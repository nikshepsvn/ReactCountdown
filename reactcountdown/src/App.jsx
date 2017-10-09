import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: "November 25, 2017"
    }
  }

  changeDeadline(){
    this.setState({deadline: "October 25. 2017"})
  }

  render(){
    return(
      <div className = "App">
        <div className = "App-title"> Countdown to {this.state.deadline}</div>
        <div>
          <div className = "clockDays">14 Days</div>
          <div className = "clockHours">35 Hours</div>
          <div className = "clockMinutes">30 Minutes</div>
          <div className = "clockSeconds">14 Seconds</div>
        </div>
        <div>
          <input placeholder = "new date" />
          <button onClick = {() => {this.changeDeadline()}}> Submit </button>
        </div>
      </div>
    )
  }
}

export default App;
