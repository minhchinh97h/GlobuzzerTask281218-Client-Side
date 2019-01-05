import React, { Component } from 'react'
import './NumberGuestsHolder.css'

class NumberGuestsHolder extends Component{

    render(){
        return(
            <div className="under-991px-guests-cover">
                <div className="under-991px-guests-title">
                    <p>
                        Number of travelers
                    </p>
                </div>
                <div className="number-guests-holder">
                    <div className="number-guests">
                        <i className="fas fa-users"></i>
                        <input placeholder="Type a number"></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default NumberGuestsHolder