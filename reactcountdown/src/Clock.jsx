import React, {Component} from 'react';
import './App.css';

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
      days:0,
      hours:0,
      minutes:0,
      seconds:0
    }
  }
  
  render(){
    return (
      <div>
        <div className = "clockDays">{this.state.days} Days</div>
        <div className = "clockHours">{this.state.hours} Hours</div>
        <div className = "clockMinutes">{this.state.minutes} Minutes</div>
        <div className = "clockSeconds">{this.state.seconds} Seconds</div>
      </div>
    )
  }
}

export default Clock;
