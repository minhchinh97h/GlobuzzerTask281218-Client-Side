import React, { Component } from 'react'
import './ImageNavBttnHolder.css'

class ImageNavBttnHolder extends Component{

    ChangeImageTo = (index) => {
        this.props.ChangeImageTo(index)
    }

    componentDidMount(){

    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.image_index !== prevProps.image_index){
            let imgBtnHolder = document.getElementById("image-nav-bttn-holder")

            imgBtnHolder.childNodes[this.props.image_index].classList.add("active-img-nav-bttn")
            imgBtnHolder.childNodes[this.props.image_index].classList.remove("non-active-img-nav-bttn")

            for(let i = 0; i < imgBtnHolder.childNodes.length; i++){
                if(i !== this.props.image_index){
                    imgBtnHolder.childNodes[i].classList.remove("active-img-nav-bttn")
                    imgBtnHolder.childNodes[i].classList.add("non-active-img-nav-bttn")
                }
            }
        }
    }

    render(){
        return(
            <div className="image-nav-bttn-holder" id="image-nav-bttn-holder">
                <div className="sweden-dot active-img-nav-bttn" onClick={this.ChangeImageTo.bind(this, 0)}>

                </div>
                <div className="denmark-dot non-active-img-nav-bttn" onClick={this.ChangeImageTo.bind(this, 1)}>

                </div>
                <div className="finland-dot non-active-img-nav-bttn" onClick={this.ChangeImageTo.bind(this, 2)}>

                </div>
                <div className="norway-dot non-active-img-nav-bttn" onClick={this.ChangeImageTo.bind(this, 3)}>

                </div>
            </div>
        )
    }
}

export default ImageNavBttnHolder