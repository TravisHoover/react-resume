import React, { Component } from 'react';
import Body from './Components/Body/body';
import Header from './Components/Header/header';
import data from './data';
import logo from './logo.svg';
import github from './github.svg'
import linkedin from './linkedin.svg';
import twitter from './twitter.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

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
	          <a href={data.ContactInfo.twitter_url}>
		          <img src={twitter} className="App-altLogo" alt="twitter"/>
	          </a>
          </div>
        </header>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Header className="App-intro"/>
          <Body className="App-intro"/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
