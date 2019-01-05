import React, { Component } from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import StackingContents from './stacking-contents/StackingContents'
import './Section1.css'

let image_index = 0
let timer

class Section1 extends Component{
    images = ['/images/sweden/sweden.jpg', '/images/denmark/denmark.jpg', '/images/finland/finland.jpg', '/images/norway/norway.jpg']

    destinations = ['Sweden', 'Denmark', 'Finland', 'Norway']

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

    ActiveImg = (id, bttnId, index) => {
        let imgNode = document.getElementById(id)

        imgNode.classList.remove("non-active-img-destination")
        imgNode.classList.add("active-img-destination")
        
        let imgNodes = document.getElementById("img-destination-holder")

        for(let i = 0; i < imgNodes.childNodes.length; i++){
            for(let j = 0; j < imgNodes.childNodes[i].childNodes.length; j++){
                if(imgNodes.childNodes[i].childNodes[j].classList.contains("active-img-destination") 
                && imgNodes.childNodes[i].childNodes[j].id !== id){
                    imgNodes.childNodes[i].childNodes[j].classList.remove("active-img-destination")
                    imgNodes.childNodes[i].childNodes[j].classList.add("non-active-img-destination")
                }
            }
        }

        let bttnNode = document.getElementById(bttnId)

        bttnNode.classList.remove("non-active-hover-choose-destination")
        bttnNode.classList.add("active-hover-choose-destination")

        let bttnNodes = [
            document.getElementById("sweden-choose-bttn"),
            document.getElementById("denmark-choose-bttn"),
            document.getElementById("finland-choose-bttn"),
            document.getElementById("norway-choose-bttn")
        ]

        for(let i = 0; i < bttnNodes.length; i++){
            if(i !== index){
                bttnNodes[i].classList.remove("active-hover-choose-destination")
                bttnNodes[i].classList.add("non-active-hover-choose-destination")
            }
        }
    }

    BlackenBorderLineImages = () => {
        let imgNodes = document.getElementById("img-destination-holder")

        for(let i = 0; i < imgNodes.childNodes.length; i++){
            for(let j = 0; j < imgNodes.childNodes[i].childNodes.length; j++){
                imgNodes.childNodes[i].childNodes[j].classList.add("non-active-img-destination")
            }
        }
    }


    componentDidMount(){
        this.BlackenBorderLineImages()

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
                
                <div className="intro-ad-holder">
                    <div className="advertisement">
                        <span><b>Discover the Nordics with our package</b></span>
                    </div>

                    <div className="description">
                        <span>
                            Sit amet consectetur adipisicing elit, sed do eiusmo. Tempor
                            incididunt ut laboren et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris.
                        </span>
                    </div>
                </div>

                <div className="ad-options-holder">
                    <div className="ad-banner-holder">
                        <span><b>We've got everything you need, all in one place</b></span>
                    </div>
                    <div className="options">
                        <div className="customer-support-holder">
                            <div className="hover-place">
                                <i className="fas fa-phone fa-5x"></i>
                                <span>24/7 customer support</span>
                            </div>
                            
                        </div>

                        <div className="local-guide-holder">
                            <div className="hover-place">
                                <i className="fas fa-map-marked-alt fa-5x"></i>
                                <span>Local guide</span>
                            </div>
                        </div>

                        <div className="customized-package-holder">
                            <div className="hover-place">
                                <i className="fas fa-suitcase fa-5x"></i>
                                <span>Customized packages</span>
                            </div>
                        </div>

                        <div className="all-in-one-holder">
                            <div className="hover-place">
                                <i className="fas fa-list-ul fa-5x"></i>
                                <span>All in one</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="client-choose-country-holder">
                    <div className="instruction-holder">
                        <span><b>Choose a country where you want to travel to</b></span>
                    </div>

                    <div className="stacking-destinations-holder">
                        <div className="destinations-holder">
                            <div className="portions" id="img-destination-holder">
                                <div className="destination sweden-destination">
                                    <img src={this.images[0]} id="sweden-img" className="active-img-destination"/>
                                </div>

                                <div className="destination denmark-destination">
                                    <img src={this.images[1]} id="denmark-img"/>
                                </div>

                                <div className="destination finland-destination">
                                    <img src={this.images[2]} id="finland-img"/>
                                </div>

                                <div className="destination norway-destination">
                                    <img src={this.images[3]} id="norway-img"/>
                                </div>
                            </div>
                            
                        </div>
                        <div className="overlay-destinations-holder">
                            <div className="portions">
                                <div className="destination" onMouseOver={this.ActiveImg.bind(this, "sweden-img", "sweden-choose-bttn", 0)}>
                                    <p>
                                        {this.destinations[0]}
                                    </p>

                                    <div className="cover-block" >
                                        <div className="active-hover-choose-destination" id="sweden-choose-bttn">
                                            <div className="choose-destination-bttn">
                                                Choose
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="destination" onMouseOver={this.ActiveImg.bind(this, "denmark-img", "denmark-choose-bttn", 1)}>
                                    <p>
                                        {this.destinations[1]}
                                    </p>

                                    <div className="cover-block">
                                        <div className="non-active-hover-choose-destination" id="denmark-choose-bttn">
                                            <div className="choose-destination-bttn">
                                                Choose
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="destination" onMouseOver={this.ActiveImg.bind(this, "finland-img", "finland-choose-bttn", 2)}>
                                    <p>
                                        {this.destinations[2]}
                                    </p>

                                    <div className="cover-block">
                                        <div className="non-active-hover-choose-destination" id="finland-choose-bttn">
                                            <div className="choose-destination-bttn">
                                                Choose
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                                <div className="destination" onMouseOver={this.ActiveImg.bind(this, "norway-img", "norway-choose-bttn",3)}>
                                    <p>
                                        {this.destinations[3]}
                                    </p>

                                    <div className="cover-block">
                                        <div className="non-active-hover-choose-destination" id="norway-choose-bttn">
                                            <div className="choose-destination-bttn">
                                                Choose
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="videos-holder">
                    <div className="video-description">
                        <span><b>Explore the Nordics</b></span>
                    </div>
                    <div className="video-grid-cover">
                        <div className="video-grid">
                            <div className="video-item-1">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/GDQZbz9k9UM" 
                                frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                mozallowfullscreen = "true"
                                msallowfullscreen = "true"
                                oallowfullscreen = "true"
                                webkitallowfullscreen = "true"></iframe>

                                
                            </div>

                            <div className="video-item-2">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/EFfoCyvUIL8" 
                                frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                mozallowfullscreen = "true"
                                msallowfullscreen = "true"
                                oallowfullscreen = "true"
                                webkitallowfullscreen = "true"></iframe>
                            </div>

                            <div className="video-item-3">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/o5y7yRsKYxU" 
                                frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                mozallowfullscreen = "true"
                                msallowfullscreen = "true"
                                oallowfullscreen = "true"
                                webkitallowfullscreen = "true"></iframe>
                            </div>

                            <div className="video-item-4">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/miJaLj799is" 
                                frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                mozallowfullscreen = "true"
                                msallowfullscreen = "true"
                                oallowfullscreen = "true"
                                webkitallowfullscreen = "true"></iframe>
                            </div>
                        </div>
                    </div>
                </div>


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