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
            <div className="stacking-contents">
                <Header />
                <div className = "first-section-holder">
                    <ImagesHolder image_index = {this.props.image_index}/>
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