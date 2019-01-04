import React, { Component } from 'react'
import './NumberGuestsHolder.css'

class NumberGuestsHolder extends Component{

    render(){
        return(
            <div className="number-guests-holder">
                <div className="number-guests">
                    <i className="fas fa-users"></i>
                    <input placeholder="Type a number"></input>
                </div>
            </div>
        )
    }
}

export default NumberGuestsHolder