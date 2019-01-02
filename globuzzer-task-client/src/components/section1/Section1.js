import React, { Component } from 'react'

import './Section1.css'

class Section1 extends Component{
    render(){
        return(
            <div className="container">
                <div className="center-info-bar">
                    <div className="select-country-holder">
                        Country
                        <div className="dropdown">
                            Select a country

                            <div className="dropdown-content">

                            </div>
                        </div>
                    </div>

                    <div className="select-arrival-date-holder">

                    </div>

                    <div className="select-departure-date-holder">

                    </div>

                    <div className="number-guests-holder">

                    </div>
                </div>
            </div>
        )
    }
}

export default Section1