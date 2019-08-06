import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';

import Quiz from './components/Quiz';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gryffindor: 0,
      hufflepuff: 0,
      ravenclaw: 0,
      slytherin: 0
    }
  }

  updateScore = (house) => {
    const newScore = {
      ...this.state,
      [house]:  this.state[house] +1,
    }

    this.setState(
      newScore
    )
    console.log(this.state)
  }

  pickHouse = () => {
    const arr = Object.entries(this.state);
    console.log(arr);
    const house = arr.reduce((a, b)=> {
      return b > a;
    })
    
    
  }

  render() {
    return (
      <div className="App">
        {console.log('score', this.state)}
        <p>Hello, lets get you sorted out!</p>
        <NavLink to="/quiz"><button>Click Here To Begin</button></NavLink>
        <Route 
          path="/quiz"
          render={(props) => (
            <Quiz {...props} house={this.state} updateScore={this.updateScore} pickHouse={this.pickHouse} />
          )} 
        />
      </div>

    );
  }
}

export default App;
