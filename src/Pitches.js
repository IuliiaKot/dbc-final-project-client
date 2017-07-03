import React, {Component} from 'react';
import Pitch from './Pitch';


class Pitches extends Component {

    render(){
          return(
            <div>
                {this.props.pitches.map(elm => {
                    return <Pitch pitch={elm}/>
                })}
            </div>
        )
    }
}

export default Pitches;