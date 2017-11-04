import React, { Component } from 'react';
import TodoList from './TodoList';
import CreateTodoItem from './createTodoItem';
import Notifications, { notify } from 'react-notify-toast';
import $ from 'jquery';

const tasks = [
    {title: 'read a book', time: 90, isCompleted: false},
    {title: 'clean the house', time: 60, isCompleted: false}
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
                <Notifications />
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
        if (foundTodo.isCompleted) {
            notify.show("Well done ! you finished : '" + title + "'", "success");
            let t = this.state.tasks.filter((t) => t.title !== title);
            t.push({title, isCompleted: true, time: foundTodo.time});
            this.setState({tasks: t});
        } else {
            let t = this.state.tasks.filter((t) => t.title !== title);
            t.unshift({title, isCompleted: false, time: foundTodo.time});
            this.setState({tasks: t});
            notify.show("No problem ! you will finished it this time", "error");
            
        }
    }

    removeTask(taskToRemove) {
        this.setState({tasks: this.state.tasks.filter((t) => t.title !== taskToRemove)});
    }

}

export default App;