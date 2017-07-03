import React, {Component} from 'react';
import Pitches from './Pitches';


class Home extends Component {
    render(){
        return(
            <Pitches pitches={this.props.pitches}/>
        )
    }
}

export default Home;