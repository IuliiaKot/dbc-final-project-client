import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LogIn from './LogIn'
import Header from './Header';
import Main from './Main';


class App extends Component {
  constructor(){
    super();
    this.state = {
      pitches: []
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <Main />
      </div>
    );
  }
}

export default App;
