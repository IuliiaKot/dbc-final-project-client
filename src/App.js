import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LogIn from './LogIn'
import Header from './Header';
import Main from './Main';
import {Container} from 'reactstrap';
import axios from 'axios';


class App extends Component {
  constructor(){
    super();
    this.state = {
      pitches: [],
      user_pitches: []
    }
    this.addPitchToState = this.addPitchToState.bind(this);
    this.updateState = this.updateState.bind(this);
    this.updateCurrentUserState = this.updateCurrentUserState.bind(this);
    this.addPitchToCurrentUserState = this.addPitchToCurrentUserState.bind(this);
  }

  updateState(pitches){
    this.setState({pitches: pitches})
  }

  updateCurrentUserState(pitches){
    this.setState({user_pitches: pitches})
  }

  addPitchToState(pitch){
    this.setState(prevState => {
      return {pitches: [pitch].concat(this.state.pitches)}
    })
  }
  addPitchToCurrentUserState(pitch){
    this.setState(prevState => {
      return {pitches: [pitch].concat(this.state.user_pitches)}
    })
  }

  componentDidMount(){
    let config = {
      headers: {'Authorization': sessionStorage.token}
    };
    axios.get('http://localhost:8000/home', config)
    .then(res => {
      this.setState({pitches: res.data.home})
    })
    axios.get('http://localhost:8000/pitches', config)
      .then(res => {
        this.setState({user_pitches: res.data.pitches})
    })  
  }

  render() {
    return (
      <div>
        <Header/>
        <Container>
          <Main  pitches={this.state.pitches} user_pitches={this.state.user_pitches}
           addPitch={this.addPitchToState}
           getAllPitches={this.updateState}
           getCurrentUserPitches={this.updateCurrentUserState}
           addCurrentUserPitch={this.addPitchToCurrentUserState}
           />
        </Container>
      </div>
    );
  }
}

export default App;
