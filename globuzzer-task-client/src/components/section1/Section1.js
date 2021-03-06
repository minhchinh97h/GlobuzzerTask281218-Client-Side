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

//function for controlling the dropdowns when the user doesnt click on them
let clickOutSideToHideDropDowns

class Section1 extends Component{

    //When using react-router, we need a variable to determine whether the component is mounted and advoid no-op/memory
    //leaks error

    _mounted = false;

    state={
        image_index: image_index
    }

    //Currently there are 4 indexes (0, 1, 2, 3) for 4 according countries Sweden, Denmark, Finland, Norway
    //This function is to automatically update the current index every 10 seconds so that the page will load
    //the correct image
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

    
    //This function is responsible for event when user click on the navigation image button
    ChangeImageTo = (index) => {
        clearInterval(timer)
        image_index = index

        this.setState({
            image_index: image_index
        })

        this.UpdateImageIndexAuto()
    }

    //to check whether the current DOM node is a child element of any
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

                //to control the "Select a country" dropdown button
                if(!e.target.matches('.select-country-dropdown')){
                    let countryDropdown = document.getElementById("country-dropdown-content")
                    if(countryDropdown.classList.contains('show')){
                        document.getElementById("select-country-dropdown").classList.remove("active")
                        countryDropdown.classList.remove('show')
                    }
                }


                //to control the "Select a date" for arrivale dropdown button
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


                //to control the "Select a date" for departure dropdown button
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

            //add event when mounted
            document.addEventListener('click', clickOutSideToHideDropDowns)

        }
        
    }

    componentWillUnmount(){
        this._mounted = false

        //remove event when unmounted
        document.removeEventListener('click', clickOutSideToHideDropDowns)
    }

    render(){
        return(
            <div className="section1-container">

                {/* include header, image changing automation, select country, arrival/departure date, number of guests */}
                <StackingContents image_index = {this.state.image_index} 
                                    UpdateImageIndexAuto = {this.UpdateImageIndexAuto}
                                    ChangeImageTo = {this.ChangeImageTo}
                />
                
                {/* include the "Discover with our Nordics package" section */}
                <IntroAdHolder />


                {/* include the advertisment options for clients to choose */}
                <AdOptionsHolder />
                
                {/* display 4 sections of 4 countries with its image, when the user clicks on each image, the page will be 
                then redirected to its dedicated page */}
                <ClientChooseCountryHolder />
                
                {/* this holds the 4 videos */}
                <VideosHolder />

                {/* include footer and all the forms plus company's information */}
                <ContactUsHolder />
                
            </div>
        )
    }
}

export default Section1