import React, { Component } from 'react';
import TimeTodo from './TimeTodo';

class CreateTodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            err: null,
            time: 30
        }
    }
    
    render() {
        return(
            <div>
                <form onSubmit={this.handleCreateTask.bind(this)}>
                    <input type="text" placeholder="What do i need to do ?" ref="createInput" />
                    <button className="waves-effect waves-light btn-large">ADD</button>
                    {this.renderErrorMsg()}
                </form>
                <TimeTodo taskTimer={this.taskTimer.bind(this)} />
            </div>
        );
    }

    taskTimer(time) {
        console.log(time);
        this.setState({time});
    }

    handleCreateTask(event) {
        event.preventDefault();
        const createInput = this.refs.createInput;
        const task = createInput.value;
        const validateInput = this.validateInput(task);

        if (validateInput) {
            this.setState({err: validateInput});
            return;
        }

        this.setState({err: null});
        this.props.createTask(task, this.state.time);
        this.refs.createInput.value = '';
    }

    validateInput(task) {
        if (!task) {
            return 'Please enter a task !';
        } else if (this.props.tasks.find(t => t.title === task)) {
            return 'This is already added !';
        }

        return null;
    }

    renderErrorMsg() {
        if (this.state.err) {
            return <div style={{color: 'red'}}>{this.state.err}</div>
        }
    }

}

export default CreateTodoItem;