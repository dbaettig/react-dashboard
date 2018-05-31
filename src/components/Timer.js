import React from 'react';

const counter = (sec) =>
    Math.floor(sec / 60) +
    ':' +
    (sec % 60)

class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            seconds: 10,

        };
    }


    handleStartClick = () => {
        this.decrementer = setInterval(() =>
            this.setState({
                seconds: this.state.seconds - 1
            })
            , 1000);


    }

    handleResetClick = () => {
        if (this.state.seconds > 0) {
            clearInterval(this.decrementer);
            this.setState({
                seconds: 10,

            });
        }


    }



    render() {
        if (this.state.seconds === 0) {
            clearInterval(this.decrementer);

        }
        return (
            <div className="wrapper">
                <div className="timer">
                    <h1>timer</h1>
                    <h2 className="counter">{counter(this.state.seconds)}</h2>

                    <button id="start-btn" onClick={this.handleStartClick}>start</button>
                    <button id="reset-btn" onClick={this.handleResetClick}>reset</button>

                </div>
                <div className="facts">
                    The Japanese also have a low tolerance of tardiness.
                    Their trains are consideredto be on time if the delay is less than one minute.
                </div>
            </div>
        );
    }
}


export default Timer;