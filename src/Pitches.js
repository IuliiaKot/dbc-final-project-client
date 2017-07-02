import React, {Component} from 'react';
import Pitch from './Pitch';


class Pitches extends Component {
    render(){
        // debugger
        let pitches = [{
            title: "Tiele1", description: "arers post-ironic letterpress cred."
        }, {title: "Tiele2", description: "arers post-ironic letterpress cred."}]
        return(
            <div>
                {pitches.map(elm => {
                    return <Pitch pitch={elm}/>
                })}
            </div>
        )
    }
}

export default Pitches;