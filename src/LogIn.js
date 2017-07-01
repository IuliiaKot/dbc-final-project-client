import React, {Component} from 'react';
import querystring from 'querystring';
import axios from 'axios'

class LogIn extends Component {

sendData(e){
  e.preventDefault();
  axios.post('http://localhost:8000/authenticate', querystring.stringify({email:"julia@gmail.com", password: "123456"}))
    .then(res => {
      sessionStorage.setItem('token', res.data.auth_token)
    })
  let config = {
    headers: {'Authorization': sessionStorage.token}
  };

   axios.get('http://localhost:8000/pitches', config)
   .then(res => {
     debugger
   }) 
}  

  render(){
    return(
      <div>
        <form onSubmit={this.sendData.bind(this)}>
          <input type="email" />
          <input type="password"/>
          <input type="submit" value="LogIN"/>
        </form>
      </div>
    )
  }
}


export default LogIn;
