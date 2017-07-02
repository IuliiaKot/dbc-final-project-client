import React, {Component} from 'react';
import {logout} from './utils/AuthService'
import { Link } from 'react-router'


class Logout extends Component {

    componentDidMount(){
        logout()
        this.props.history.push('/')
    }

    render(){
        return(
            <div>Hello</div>
        )
    }
}

export default Logout;