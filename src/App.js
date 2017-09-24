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
        </div>
        <FortuneBall />
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
    const fortunes = ["Yes", "No", "Maybe", "You trippin'","You will have to be patient", "It is decidedly so", "Better not tell you now", "My sources say no", "My sources say yes", "Hell no", "Make it so", "Concentrate and ask again", "Outlook not so good", "Very doubtful", "Without a doubt", "Most likely", "If you insist", "Why would you even ask that", "Pervert."];
    const fortune = fortunes[Math.floor(Math.random()*fortunes.length)]
    this.setState({fortune: fortune});
  }

  render() {
    return (
      <div className="ballAndFortune">
        <Triangle value={this.state}/>
        <input type="image" src={predictionBall} className="prediction-ball" alt="eight ball showing the prediction screen" onClick={() => this.shakeBall()} />
      </div>
    )
  }
}

function Triangle(props) {
  console.log(props);
  return (
    <p className = "fortune">{props.value.fortune}</p>
  )
}

export default App;
