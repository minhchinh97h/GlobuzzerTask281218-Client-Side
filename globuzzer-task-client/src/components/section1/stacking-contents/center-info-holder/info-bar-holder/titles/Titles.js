import React, { Component } from 'react'
import './Titles.css'

class Titles extends Component{

    render(){
        return(
            <div className="titles">
                <div className="country-title">
                    <p>
                        Country
                    </p>
                </div>
                
                <div className="arrival-title">
                    <p>
                        Arrival date
                    </p>
                </div>
                
                <div className="departure-title">
                    <p>
                        Departure date
                    </p>
                </div>
                
                <div className="travelers-title">
                    <p>
                        Number of travelers
                    </p>
                </div>
            </div>
        )
    }
}

export default Titles