import React, { Component } from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import StackingContents from './stacking-contents/StackingContents'
import IntroAdHolder from './intro-ad-holder/IntroAdHolder'
import AdOptionsHolder from './ad-options-holder/AdOptionsHolder'
import ClientChooseCountryHolder from './client-choose-country-holder/ClientChooseCountryHolder'
import VideosHolder from './videos-holder/VideosHolder'
import './Section1.css'

let image_index = 0
let timer

class Section1 extends Component{
    
    

    state={
        image_index: image_index
    }

    UpdateImageIndexAuto(){
        timer = setInterval(() => {
            image_index++

            if(image_index === 4){
                image_index = 0
            }

            this.setState({
                image_index: image_index
            })

        }, 10000)
    }

    
    ChangeImageTo = (index) => {
        clearInterval(timer)
        image_index = index

        this.setState({
            image_index: image_index
        })

        this.UpdateImageIndexAuto()
    }

    isDescendant(parent, child) {
        var node = child.parentNode;
        while (node != null) {
            if (node == parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    }

    


    componentDidMount(){
        //update index of images every 10 seconds
        this.UpdateImageIndexAuto()

        //control the dropdowns
        window.onclick = (e) => {
            if(!e.target.matches('.select-country-dropdown')){
                let countryDropdown = document.getElementById("country-dropdown-content")
                if(countryDropdown.classList.contains('show')){
                    document.getElementById("select-country-dropdown").classList.remove("active")
                    countryDropdown.classList.remove('show')
                } 
            }

            if(e.target !== document.getElementById("arrival-date-dropdown")
            && !this.isDescendant(document.getElementById("arrival-dropdown-content"), e.target)){
                let arrivalDropdown = document.getElementById("arrival-dropdown-content")
                if(arrivalDropdown.classList.contains('show')){
                    arrivalDropdown.classList.remove('show')
                }
                
                if(window.document.getElementById("arrival-date-dropdown").classList.contains('active')){
                    window.document.getElementById("arrival-date-dropdown").classList.remove('active')
                }
            }

            if(e.target !== document.getElementById("departure-date-dropdown")
            && !this.isDescendant(document.getElementById("departure-dropdown-content"), e.target)){
                let departureDropdown = document.getElementById("departure-dropdown-content")
                if(departureDropdown.classList.contains('show')){
                    departureDropdown.classList.remove('show')
                }
                
                if(window.document.getElementById("departure-date-dropdown").classList.contains('active')){
                    window.document.getElementById("departure-date-dropdown").classList.remove('active')
                }
            }
        }
    }

    
    render(){
        return(
            <div className="section1-container">
                <Header />
                <StackingContents image_index = {this.state.image_index} 
                                    UpdateImageIndexAuto = {this.UpdateImageIndexAuto}
                                    ChangeImageTo = {this.ChangeImageTo}
                />
                
                <IntroAdHolder />
                
                <AdOptionsHolder />
                
                <ClientChooseCountryHolder />
                
                <VideosHolder />


                <div className="contact-us-holder">
                    <div className="contact-us-description">
                        <span><b>Contact us</b></span>
                    </div>

                    <div className="contact-us-content">
                        <div className="contact-us-forms">
                            <div className="forms-cover">
                                <span>
                                    <p>How shall we call you? *</p>
                                </span>

                                <input type="text"
                                placeholder="Type your name here"
                                ></input>

                                <span>
                                    <p>What is your email address? *</p>
                                </span>

                                <input type="text"
                                placeholder="We will keep it safe!"
                                ></input>

                                <span>
                                    <p>We are all ears! *</p>
                                </span>

                                <textarea 
                                placeholder="Share with us any information that might help us  to respond you.">

                                </textarea>

                                <div className="send-message-holder">
                                    <button type="button">
                                        Send message
                                    </button>
                                </div>
                                
                            </div>
                        </div>

                        <div className="contact-us-info">
                            <span>
                                <p>
                                    Come in for a coffee <i class="fas fa-coffee"></i>
                                </p>

                            </span>

                            <div className="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8619.952373406051!2d18.06769312535121!3d59.34901039298875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d401191830f%3A0xff6e8bbbca445e6b!2sLindstedtsv%C3%A4gen+24%2C+114+28+Stockholm%2C+Sweden!5e0!3m2!1sen!2s!4v1546681314413" 
                                width="600" height="450" frameborder="0" allowFullScreen></iframe>
                            </div>  

                            <div className="contact-info">
                                <span>
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>Lindstedtsvägen 24, 4thFloor, 114 28 Stockholm, Sweden</p>    
                                </span>

                                <span>
                                    <i class="fas fa-envelope"></i>
                                    <p>rami@globuzzer.com</p>
                                </span> 

                                <span>
                                    <i class="fas fa-phone"></i>
                                    <p>+46 73 555 5 134</p>
                                </span>  
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        )
    }
}

export default Section1