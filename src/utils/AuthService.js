// import { browserHistory } from 'react-router';
import axios from 'axios';


function getAccessToken(){
    return sessionStorage.getItem('token');
}

function clearAccessToken() {
  sessionStorage.removeItem('token');
}
export function logout(){
    clearAccessToken();
    // debugger
    // history.push('/pitches');
}

export function isLoggedIn() {
    let idToken = getAccessToken();
    return !!idToken;
}