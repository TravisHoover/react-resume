import React, { Component } from 'react';
import Body from './Components/Body/body';
import Header from './Components/Header/header';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My resume written in React.js</h1>
        </header>
        <Header/>
        <Body className="App-intro"/>
      </div>
    );
  }
}

export default App;
