import React, { Component } from 'react'
import ArrivalDateHolder from './arrival-date-holder/ArrivalDateHolder'
import DepartureDateHolder from './departure-date-holder/DepartureDateHolder'
import './SelectADDateHolder.css'

class SelectADDateHolder extends Component{

    render(){
        return(
            <div className="select-arrival-departure-date-holder">
                <ArrivalDateHolder />

                <div className="breadcrumb">
                </div>

                <DepartureDateHolder />
            </div>
        )
    }
}

export default SelectADDateHolder