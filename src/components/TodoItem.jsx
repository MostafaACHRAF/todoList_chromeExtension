import React, { Component } from 'react';
import Timer from './Timer';
import $ from 'jquery';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isCompleted: false,
            isTimerStarted: false
        }
    }

    componentDidMount() {
        console.log($('.card-panel'));
    }

    render() {
        return(
            <div>
                {this.renderTaskSection()}
            </div>
        );
    }

    renderTaskTime(time) {
        const hours = Math.floor(time / 60);
        const minutes = time % 60;
        let timeToDisplay = '';

        if (hours !== 0) {
            timeToDisplay = hours + 'H';
        }

        if (minutes !== 0) {
            timeToDisplay = timeToDisplay + '' + minutes + 'min';
        }

        return timeToDisplay;

    }

    handelTimerStatus(status) {

        if (status) {
            $("#task" + this.props.id).parent().removeClass("red");
            $("#task" + this.props.id).parent().addClass("yellow");
        } else {
            $("#task" + this.props.id).parent().removeClass("yellow");
            $("#task" + this.props.id).parent().addClass("red");
        }

        this.setState({isTimerStarted: status});
    }
   

    renderTaskSection() {
        const {title, time, isCompleted} = this.props;

        let timeStyle = this.state.isTimerStarted ? "timer" : "timeBadge";

        const taskStyle = {
            textDecoration: isCompleted ? 'line-through' : '',
            cursor: 'pointer',
            display: 'inline-block',
            float: 'left',
            color: 'white'
        }

        if (isCompleted) {
            $("#task" + this.props.id).parent().removeClass("red");
            $("#task" + this.props.id).parent().addClass("teal");
        } else {
            $("#task" + this.props.id).parent().removeClass("teal");
            $("#task" + this.props.id).parent().addClass("red");
        }

        const timeToDisplay = this.renderTaskTime(time);

        return(
            <div className="row">
                <div className="col m12 s12">
                    <div className="card-panel red hoverable valign-wrapper">
                        <a className="btn-floating waves-effect waves-light blue left delBtn" onClick={this.props.removeTask.bind(this, this.props.title)} data-position="top" data-delay="50" data-tooltip="I am a tooltip" >
                            <i className="material-icons tooltipped" data-position="top" data-delay="50" data-tooltip="Delete this task">clear</i>
                        </a>
                        <h5 id={'task' + this.props.id} style={taskStyle} onClick={ this.props.toggleTask.bind(this, title) } >
                            { title }
                            <span className={timeStyle}><i className="material-icons">timer</i> { timeToDisplay }</span>
                        </h5>
                        <Timer time={this.props.time} handelTimerStatus={this.handelTimerStatus.bind(this)} />
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoItem;