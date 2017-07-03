import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {isLoggedIn} from './utils/AuthService';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';



class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
        isOpen: false
        };
    }
    toggle() {
        this.setState({
        isOpen: !this.state.isOpen
        });
    }

    loginRender(){
        return (
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link to='/home'>Home</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to='/pitches'>My pitches</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to='/pitches/new'>Add pitch</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to='/logout'>Log Out</Link></NavLink>
              </NavItem>
            </Nav>
        )
    }

    logoutRender(){
        return (
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link to='/login'>Log in</Link></NavLink>
              </NavItem>
            </Nav>
            )
    }


    render(){
        return(
            <div>
                <Navbar color="faded" light toggleable>
                <NavbarToggler right onClick={this.toggle} />
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <Collapse isOpen={this.state.isOpen} navbar>
                    { isLoggedIn() ? this.loginRender() : this.logoutRender()}
                </Collapse>
                </Navbar>
            </div>
        )
    }
}


export default Header;

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