import React from 'react';

function japanTime() {
    const date = new Date();
    date.setHours(date.getHours() + 7);
    return date;
}

class Clock extends React.Component {
    state = {
        date: japanTime()
    };


    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick() {
        this.setState({
            date: japanTime()
        });
    }


    render() {

        return (
            <div className="wrapper">
                <div className="clock">
                    <h1>the time </h1>
                    <h2> {this.state.date.toLocaleTimeString()}</h2>
                </div>
                <div className="facts">
                    If you move slowly in Japan, you are wasting time and not fulfilling your obligations.

                </div>
            </div>
        );
    }

}


export default Clock;