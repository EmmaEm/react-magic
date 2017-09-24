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
      fortune:"I know all",
    }
  }

  shakeBall() {
    const fortunes = ["Yes", "No", "Maybe"];
    const fortune = fortunes[Math.floor(Math.random()*fortunes.length)]
    this.setState({fortune: fortune});
  }

  render() {
    return (
      <div>
        <Triangle value={this.state}/>
        <input type="image" src={predictionBall} className="prediction-ball" alt="eight ball showing the prediction screen" onClick={() => this.shakeBall()} />
      </div>
    )
  }
}

function Triangle(props) {
  console.log(props);
  return (
    <p>{props.value.fortune}</p>
  )
}

export default App;
