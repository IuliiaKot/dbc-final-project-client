import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {isLoggedIn} from './utils/AuthService'


class Header extends Component {

    loginRender(){
        return (<ul>
            <li><Link to='/pitches'>Home</Link></li>
            <li><Link to='/pitches/new'>Add pitch</Link></li>
            <li><Link to='/logout'>Log Out</Link></li>
        </ul>)
    }

    logoutRender(){
        return (<ul>
            <li><Link to='/login'>Log in</Link></li>
        </ul>)
    }


    render(){
        return(
              <header>
                <nav>

                    { isLoggedIn() ? this.loginRender() : this.logoutRender()}
                    {/*<ul>
                        <li>
                            {(isLoggedIn()) ? ( <Link to="/pitches/new">Add Pitch</Link>) : '' }
                        </li>
                        <li><Link to='/pitches'>Home</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                        { 
                            (isLoggedIn()) ? ( <button className="btn btn-info log" onClick={this.logOut.bind(this)}>Log Out</button> ) : ( <li><Link to='/login'>Log In</Link></li>)
                        }
                        </li>
                    </ul>*/}
                </nav>
            </header>
        )
    }
}


export default Header;