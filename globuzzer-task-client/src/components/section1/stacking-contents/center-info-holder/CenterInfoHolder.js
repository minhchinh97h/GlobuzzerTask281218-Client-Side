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

                    {/* display the banner */}
                    <WelcomeBanner image_index = {this.props.image_index}/>

                    {/* the center bar which helps customers choose their intents */}
                    <InfoBarHolder />
                </div>
                
                {/* 4 buttons for users to click on in order to change the current image */}
                <ImageNavBttnHolder image_index = {this.props.image_index}
                                        UpdateImageIndexAuto = {this.props.UpdateImageIndexAuto}
                                        ChangeImageTo = {this.props.ChangeImageTo}
                />
            </div>
        )
    }
}

export default CenterInfoHolder