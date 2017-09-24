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
          <input type="image" src={predictionBall} className="prediction-ball" alt="eight ball showing the prediction screen" />
        </div>
      </div>
    );
  }
}

class TheFortunes extends Component {
  //state for what is inside of the triangle
  .setState(fortuneOfTheMoment)
  getFortune(fortune) {  //a function that randomizes getting the fortune and then returns the xml component
    return <FortuneTriangle/>

  }
  render() {
    return ({this.getFortune(currentFortune)}
    );
  }
}

const FortuneTriangle = function (props) {
  return {
    props, // set props
    render () {
      // get `word` from props obj with
      const { fortune } = this.props;
      return (
        <p> { fortune }!</p>
      );
    }
  };
};


//can return FortuneTriangle inside of the


export default App;
