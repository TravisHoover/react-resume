import React, { Component } from 'react';
import Body from './Components/Body/body';
import Header from './Components/Header/header';
import data from './data';
import logo from './logo.svg';
import github from './github.svg'
import linkedin from './linkedin.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div>
            <a href={data.ContactInfo.github_url}>
              <img src={github} className="App-altLogo" alt="github"/>
            </a>
            <a href={data.ContactInfo.linkedIn_url}>
              <img src={linkedin} className="App-altLogo" alt="linkedIn"/>
            </a>
          </div>
        </header>
        <Header className="App-intro"/>
        <Body className="App-intro"/>
      </div>
    );
  }
}

export default App;
