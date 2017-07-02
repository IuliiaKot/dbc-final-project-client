import React, {Component} from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Pitches from './Pitches';
import LogIn from './LogIn'
import Logout from './Logout'
import NewPitchForm from './NewPitchForm';


class Main extends Component {
    render(){
        return(
            <main>
                <Switch>
                   <div>
                    <Route exact path='/pitches' component={Pitches}/>
                    <Route path='/pitches/new' component={NewPitchForm}/>
                    <Route path='/login' component={LogIn}/>
                    <Route path='/logout' component={Logout}/>
                   </div>
                </Switch>
            </main>
        )
    }
}


export default Main;