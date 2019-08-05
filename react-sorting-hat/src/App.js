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

  render() {
    return (
      <div className="App">
        <p>Hello, lets get you sorted out!</p>
        <NavLink to="/quiz"><button>Click Here To Begin</button></NavLink>
        <Route 
        path="/quiz"
        render={(props) => (
          <Quiz {...props} house={this.state}/>
        )} />
      </div>

    );
  }
}

export default App;
