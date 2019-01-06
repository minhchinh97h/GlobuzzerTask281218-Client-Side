import React, { Component } from 'react'
import StackingContents from './stacking-contents/StackingContents'
import IntroAdHolder from './intro-ad-holder/IntroAdHolder'
import AdOptionsHolder from './ad-options-holder/AdOptionsHolder'
import ClientChooseCountryHolder from './client-choose-country-holder/ClientChooseCountryHolder'
import VideosHolder from './videos-holder/VideosHolder'
import ContactUsHolder from './contact-us-holder/ContactUsHolder'

import './Section1.css'

let image_index = 0
let timer
let clickOutSideToHideDropDowns

class Section1 extends Component{
    _mounted = false;

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
            if (node === parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    }

    componentDidMount(){
        this._mounted = true


        if(this._mounted){

            //update index of images every 10 seconds
            this.UpdateImageIndexAuto()

            clickOutSideToHideDropDowns = (e) => {
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

            //control the dropdowns
            document.addEventListener('click', clickOutSideToHideDropDowns)

        }
        
    }

    componentWillUnmount(){
        this._mounted = false
        document.removeEventListener('click', clickOutSideToHideDropDowns)
    }

    render(){
        return(
            <div className="section1-container">
                <StackingContents image_index = {this.state.image_index} 
                                    UpdateImageIndexAuto = {this.UpdateImageIndexAuto}
                                    ChangeImageTo = {this.ChangeImageTo}
                />
                
                <IntroAdHolder />
                
                <AdOptionsHolder />
                
                <ClientChooseCountryHolder />
                
                <VideosHolder />

                <ContactUsHolder />
                
            </div>
        )
    }
}

export default Section1