import React, { Component } from 'react'
import Header from './header/Header'
import StackingContents from './stacking-contents/StackingContents'
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

                <div>
                    
                </div>
            </div>
        )
    }
}

export default Section1