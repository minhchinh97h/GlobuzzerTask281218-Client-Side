import React, { Component } from 'react'
import WelcomeBanner from './welcome-banner/WelcomeBanner'
import InfoBarHolder from './info-bar-holder/InfoBarHolder'
import ImageNavBttnHolder from './image-nav-bttn-holder/ImageNavBttnHolder'

import './CenterInfoHolder.css'

class CenterInfoHolder extends Component{

    render(){
        return(
            <div className="center-info-holder">
                <div className="center-info">
                    <WelcomeBanner image_index = {this.props.image_index}/>
                    <InfoBarHolder />
                    
                </div>
                
                <ImageNavBttnHolder image_index = {this.props.image_index}
                                        UpdateImageIndexAuto = {this.props.UpdateImageIndexAuto}
                                        ChangeImageTo = {this.props.ChangeImageTo}
                />
            </div>
        )
    }
}

export default CenterInfoHolder