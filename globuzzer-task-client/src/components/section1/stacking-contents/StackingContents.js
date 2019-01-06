import React, { Component } from 'react'
import Header from '../header/Header'
import ImagesHolder from './images-holder/ImagesHolder'
import CenterInfoHolder from './center-info-holder/CenterInfoHolder'
import './StackingContents.css'

class StackingContents extends Component{
    state = {
    }

    componentDidMount(){
    }


    render(){
        return(
            <div className="stacking-contents" id="stacking-contents">

                {/* header */}
                <Header />

                {/* this div contains 2 stacking layers, ImagesHolder is below CenterInfoHolder */}
                <div className = "first-section-holder">

                    {/*hold and display the images */}
                    <ImagesHolder image_index = {this.props.image_index}/>

                    {/* hold the rest of content */}
                    <CenterInfoHolder image_index = {this.props.image_index}
                                        UpdateImageIndexAuto = {this.props.UpdateImageIndexAuto}
                                        ChangeImageTo = {this.props.ChangeImageTo}
                    />
                </div>
            </div>
        )
    }
}

export default StackingContents