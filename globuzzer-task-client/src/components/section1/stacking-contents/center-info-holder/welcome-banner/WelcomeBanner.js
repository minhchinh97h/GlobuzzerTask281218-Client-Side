import React, { Component } from 'react'
import './WelcomeBanner.css'

class WelcomeBanner extends Component{
    welcome_banners = ['Sweden', 'Denmark', 'Finland', 'Norway']

    state = {
        place_display: this.welcome_banners[this.props.image_index]
    }
    componentDidMount(){

    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.image_index !== prevProps.image_index){
            this.setState({
                place_display: this.welcome_banners[this.props.image_index]
            })
        }
    }

    render(){
        return(
            <div className="welcome-banner">
                <p>Welcome to {this.state.place_display}</p>
            </div>
        )
    }
}

export default WelcomeBanner