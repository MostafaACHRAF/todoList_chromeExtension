import React, { Component } from 'react';

class TimeTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taskTimer: 30
        }
    }

    incrementTimer(event) {
        event.preventDefault();
        this.setState({taskTimer: this.state.taskTimer + 30});
        this.props.taskTimer(this.state.taskTimer + 30);
    }

    decrementTimer(event) {
        event.preventDefault();
        this.setState({taskTimer: this.state.taskTimer - 30});
        this.props.taskTimer(this.state.taskTimer - 30);
    }

    

    render() {
        return(
            <div>
                <input type="text" value={this.state.taskTimer + ' min'} disabled /> 
                <a className="btn" onClick={this.incrementTimer.bind(this)}><i className="material-icons">expand_less</i></a>
                <a className="btn" onClick={this.decrementTimer.bind(this)}><i className="material-icons">expand_more</i></a>
            </div>
        );
    }

}

export default TimeTodo;