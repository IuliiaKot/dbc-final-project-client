import React, {Component} from 'react';


class Pitch extends Component {
    render(){
        return(
            <div>
                <h4>{this.props.pitch.title}</h4>
                <p>{this.props.pitch.description}</p>
            </div>
        )
    }
}

export default Pitch;