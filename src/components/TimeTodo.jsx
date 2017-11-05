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
            <div className="row">
                <div className="col m7">
                    <input className="createTimeInput" type="text" value={this.state.taskTimer + ' min'} disabled /> 
                </div>
                <div className="col m5">
                    <a style={{"display": "block"}} onClick={this.incrementTimer.bind(this)}><i className="material-icons udBtn">expand_less</i></a>
                    <a style={{"display": "block"}} onClick={this.decrementTimer.bind(this)}><i className="material-icons udBtn">expand_more</i></a>
                </div>
                
            </div>
        );
    }

}

export default TimeTodo;