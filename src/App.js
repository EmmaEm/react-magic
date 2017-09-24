import React, { Component } from 'react';
import logo from './images/8-ball.png';
import predictionBall from './images/prediction-ball.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Tap the magic eight ball below to reveal your fortune.</h2>
          <FortuneBall />
        </div>
      </div>
    );
  }
}

class FortuneBall extends Component {
  constructor() {
    super();
    this.state = {
      fortune:null,
    }
  }

  shakeBall() {
    const fortunes = ["Yes", "No", "Maybe"];
    //choose a fortune and add it to the state
    const fortune = fortunes[Math.floor(Math.random()*fortunes.length)]
    console.log(fortune, "is the fortune");

    //this.setState({squares: squares});
  }

  render() {
    return (
      <input type="image" src={predictionBall} className="prediction-ball" alt="eight ball showing the prediction screen" onClick={() => this.shakeBall()} />
    )
  }
}

export default App;
