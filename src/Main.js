import React, {Component} from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Pitches from './Pitches';
import LogIn from './LogIn';
import Logout from './Logout';
import Home from './Home';
import NewPitchForm from './NewPitchForm';


class Main extends Component {
    render(){
        return(
            <main>
                <Switch>
                   <div>
                    <Route exact path='/home' 
                        render={() => <Home pitches={this.props.pitches}/>}/>
                    <Route exact path='/pitches' 
                        render={() => <Pitches pitches={this.props.user_pitches}/>}/>
                    <Route path='/pitches/new' 
                        render={(props) => <NewPitchForm addPitch={this.props.addPitch}
                            addCurrentUserPitch={this.props.addCurrentUserPitch}
                            history={props.history}
                        />}/>
                    <Route path='/login' 
                        render={(props) => <LogIn 
                        getAllPitches={this.props.getAllPitches}
                        getCurrentUserPitches={this.props.getCurrentUserPitches}
                        history={props.history}/>}/>
                    <Route path='/logout' component={Logout}/>
                   </div>
                </Switch>
            </main>
        )
    }
}


export default Main;