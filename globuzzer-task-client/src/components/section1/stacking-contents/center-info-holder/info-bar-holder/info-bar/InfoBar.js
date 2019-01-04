import React, { Component } from 'react'
import SelectCountryHolder from './select-country-holder/SelectCountryHolder'
import SelectADDateHolder from './select-arrival-departure-date-holder/SelectADDateHolder'
import NumberGuestsHolder from './number-guests-holder/NumberGuestsHolder'
import './InfoBar.css'

class InfoBar extends Component{
    
    render(){
        return(
            <div className="info-bar">
                <SelectCountryHolder />

                <SelectADDateHolder />

                <NumberGuestsHolder />
                
            </div>
        )
    }
}

export default InfoBar