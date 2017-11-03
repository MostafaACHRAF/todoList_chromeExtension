import React, { Component } from 'react';

class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hours: 0,
            minutes: 0,
            secondes: 59,
            time: null,
            isStarted: false
        }
    }

    runTimer(time) {
        const secondes = this.state.secondes;

        if (this.state.hours === 0 && this.state.minutes === 0 && secondes === 0) {
            clearInterval(this.compteur);

        } else {
            if (secondes > 0) {
            this.setState({secondes: secondes - 1});
            } else {
                this.setState({time: this.state.time - 1, secondes: 59});
                this.renderTimer(this.state.time - 1);
            }
        }

    }

    renderTimer(time) {
        let hours = Math.floor(time / 60);
        let minutes = time % 60 === 0 ? time % 60 : time % 60 - 1;
        let secondes = 59;

        this.setState({hours, minutes});
    }

    componentWillMount() {
        this.setState({time: this.props.time});
        this.renderTimer(this.props.time);
    }

    componentDidMount() {
        //this.compteur = setInterval(() => this.startTimer(), 1000);
    }

    startTimer() {
        this.compteur = setInterval(() => this.runTimer(), 1000);
        this.setState({isStarted: true});
        this.props.handelTimerStatus(true);
    }

    stopTimer() {
        clearInterval(this.compteur);
        this.setState({isStarted: false});
        this.props.handelTimerStatus(false);
    }

    renderTimerButtons() {
        if (this.state.isStarted === true) {
            return(
                <a className="btn-floating btn-large waves-effect waves-light blue" >
                    <i className="material-icons tooltipped" data-position="top" data-delay="50" data-tooltip="Stop the timer" onClick={this.stopTimer.bind(this)}>pause</i>
                </a>
            );
        }

        return(
            <a className="btn-floating btn-large waves-effect waves-light blue pulse" onClick={this.startTimer.bind(this)} >
                <i className="material-icons tooltipped" data-position="top" data-delay="50" data-tooltip="Start the timer">play_arrow</i>
            </a>
        );

    }

    /*sendTimerStatus() {
        this.props.handelTimerStatus(true);
    }*/


    render() {

        let timerStyle = "timer";

        if (this.state.isStarted) {
            timerStyle = "timeBadge";
        }
        
            
        return(
            <div>
                {/*<h5 className="timer">{this.state.hours + 'H' + this.state.minutes + 'min' + this.state.secondes + 's'}</h5>*/}
                <span className={timerStyle}>{this.state.hours + 'H' + this.state.minutes + 'min' + this.state.secondes + 's'}</span>
                {this.renderTimerButtons()}
            </div>
        );
    }

}

export default Timer;