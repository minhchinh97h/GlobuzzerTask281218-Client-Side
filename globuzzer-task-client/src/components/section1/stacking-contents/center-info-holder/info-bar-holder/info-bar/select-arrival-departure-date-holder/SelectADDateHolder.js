import React, { Component } from 'react'
import ArrivalDateHolder from './arrival-date-holder/ArrivalDateHolder'
import DepartureDateHolder from './departure-date-holder/DepartureDateHolder'
import './SelectADDateHolder.css'

class SelectADDateHolder extends Component{

    render(){
        return(
            <div className="under-991px-ad-cover">
                <div className="under-991px-ad-titles">
                    <div className="under-991px-a">
                        <p >
                            Arrival
                        </p>
                    </div>
                    
                    <div className="under-991px-d">
                        <p >
                            Departure
                        </p>
                    </div>
                    
                </div>

                <div className="select-arrival-departure-date-holder">
                    <ArrivalDateHolder />

                    <div className="breadcrumb">
                    </div>

                    <DepartureDateHolder />
                </div>
            </div>
        )
    }
}

export default SelectADDateHolder