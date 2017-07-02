import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LogIn from './LogIn'
import Header from './Header';
import Main from './Main';
import {Container} from 'reactstrap';


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
        <Container>
          <Main />
        </Container>
      </div>
    );
  }
}

export default App;
