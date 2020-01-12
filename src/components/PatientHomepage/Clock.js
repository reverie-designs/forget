import React, { Component } from 'react';
import './Clock.scss';

// const DaytoNight = () => {
  
//   const today = new Date();
//   const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// }

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
     let date = new Date();
     this.setState({
       time: date
     });
     this.props.handleUpdate(date);
    
     //TEST
     // let date = this.state.time;
    // date.setTime(date.getTime() + (1*60*60*1000));
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