import React, {Component} from 'react';
import querystring from 'querystring';
import axios from 'axios'

class LogIn extends Component {

sendData(e){
  e.preventDefault();
  let params = {
    email: this.refs.email.value,
    password: this.refs.password.value
  }
  axios.post('http://localhost:8000/authenticate', querystring.stringify(params))
    .then(res => {
      sessionStorage.setItem('token', res.data.auth_token)
      this.props.history.push('/pitches')
    })
}  

  render(){
    return(
      <div>
        <form onSubmit={this.sendData.bind(this)}>
          <input ref="email" type="email" />
          <input ref="password" type="password"/>
          <input type="submit" value="LogIn"/>
        </form>
      </div>
    )
  }
}


export default LogIn;
