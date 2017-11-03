import React, { Component } from 'react';
import TodoList from './TodoList';
import CreateTodoItem from './createTodoItem';


const tasks = [
    {title: 'read a book', time: 90, isCompleted: false},
    {title: 'clean the house', time: 60, isCompleted: true}
]

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks
        }
    }

    render() {
        return(
            <div className="mainContainer">
                <h3>Todo List</h3>
                <CreateTodoItem tasks={this.state.tasks} createTask={this.createTask.bind(this)} />
                <hr />
                <TodoList tasks={ this.state.tasks } toggleTask={this.toggleTask.bind(this)} removeTask={this.removeTask.bind(this)} />
            </div>
        );
    }

    createTask(task, time) {
        this.state.tasks.push({
            title: task,
            isCompleted: false,
            time
        });

        this.setState({tasks: this.state.tasks});
    }

    toggleTask(title) {
        const foundTodo = this.state.tasks.find((t) => t.title === title);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({tasks: this.state.tasks});
    }

    removeTask(taskToRemove) {
        this.setState({tasks: this.state.tasks.filter((t) => t.title !== taskToRemove)});
    }

}

export default App;