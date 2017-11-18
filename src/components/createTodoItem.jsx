import React, { Component } from 'react';
import TimeTodo from './TimeTodo';
import { notify } from 'react-notify-toast';

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
                <div className="switch right promodoContainer">
                    <label>
                        <span style={{"fontSize":"20px"}}>Promodo Technique</span>
                        <input type="checkbox" />
                        <span className="lever"></span>
                    </label>
                </div>

                <form onSubmit={this.handleCreateTask.bind(this)}>
                    <input className="createTaskInput" type="text" placeholder="What do i need to do ?" ref="createInput" />
                    <TimeTodo taskTimer={this.taskTimer.bind(this)} />
                    <button className="waves-effect waves-light btn-large addBtn ">ADD new task</button>
                    {this.renderErrorMsg()}
                    <div id="txt"></div>
                </form>
                
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
            notify.show("Please enter a valid task !", "error");
        }
    }

}

export default CreateTodoItem;