import React, { Component } from 'react'
import './ImagesHolder.css'

let image_index = 0

class ImagesHolder extends Component{

    images = ['/images/sweden/sweden.jpg', '/images/denmark/denmark.jpg', '/images/finland/finland.jpg', '/images/norway/norway.jpg']

    state = {
        current_image: <img src={this.images[this.props.image_index]} />
    }


    componentDidMount(){
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.image_index !== prevProps.image_index){
            this.setState({
                current_image: <img src={this.images[this.props.image_index]} />
            })
        }
    }


    render(){
        return(
            <div className="images-holder">
                <div className="images">
                    {this.state.current_image}
                </div>
            </div>
        )
    }
}

export default ImagesHolder