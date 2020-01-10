import React, { Component } from 'react';
import './Clock.scss';

class Clock extends Component {
  state = {
    time: new Date()
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    return (
      <div className="clock">
        {this.state.time.toLocaleTimeString()}
      </div>
    );
  }
}

export default Clock;