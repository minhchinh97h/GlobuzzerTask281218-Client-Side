import React, { Component } from 'react'
import Titles from './titles/Titles'
import InfoBar from './info-bar/InfoBar'
import './InfoBarHolder.css'

class InfoBarHolder extends Component{

    render(){
        return(
            <div className="info-bar-holder">
                <div className="info-bar-cover">
                    <Titles />
                    <InfoBar />
                    <button type="button" className="discover-bttn">
                        Discover
                    </button>
                </div>
            </div>
        )
    }
}

export default InfoBarHolder