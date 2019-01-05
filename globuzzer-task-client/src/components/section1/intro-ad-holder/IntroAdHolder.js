import React, { Component } from 'react'
import './IntroAdHolder.css'

class IntroAdHolder extends Component{

    render(){
        return(
            <div className="intro-ad-holder">
                <div className="advertisement">
                    <span><b>Discover the Nordics with our package</b></span>
                </div>

                <div className="description">
                    <span>
                        Sit amet consectetur adipisicing elit, sed do eiusmo. Tempor
                        incididunt ut laboren et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris.
                    </span>
                </div>
            </div>
        )
    }
}

export default IntroAdHolder