import React, { Component } from 'react'
import './ClientChooseCountryHolder.css'

class ClientChooseCountryHolder extends Component{
    images = ['/images/sweden/sweden.jpg', '/images/denmark/denmark.jpg', '/images/finland/finland.jpg', '/images/norway/norway.jpg']

    destinations = ['Sweden', 'Denmark', 'Finland', 'Norway']

    state ={
        
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
    }

    render(){
        return(
            <div className="client-choose-country-holder">
                <div className="instruction-holder">
                    <span><b>Choose a country where you want to travel to</b></span>
                </div>

                <div className="stacking-destinations-holder">
                    <div className="destinations-holder">
                        <div className="portions" id="img-destination-holder">
                            <div className="destination sweden-destination">
                                <img src={this.images[0]} id="sweden-img" className="active-img-destination" alt="sweden-img"/>
                            </div>

                            <div className="destination denmark-destination">
                                <img src={this.images[1]} id="denmark-img" alt="denmark-img"/>
                            </div>

                            <div className="destination finland-destination">
                                <img src={this.images[2]} id="finland-img" alt="finland-img"/>
                            </div>

                            <div className="destination norway-destination">
                                <img src={this.images[3]} id="norway-img" alt="norway-img"/>
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
                                        <a className="choose-destination-bttn" href="/Sweden">
                                            Choose
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="destination" onMouseOver={this.ActiveImg.bind(this, "denmark-img", "denmark-choose-bttn", 1)}>
                                <p>
                                    {this.destinations[1]}
                                </p>

                                <div className="cover-block">
                                    <div className="non-active-hover-choose-destination" id="denmark-choose-bttn">
                                        <a className="choose-destination-bttn" href="/Denmark">
                                            Choose
                                        </a>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="destination" onMouseOver={this.ActiveImg.bind(this, "finland-img", "finland-choose-bttn", 2)}>
                                <p>
                                    {this.destinations[2]}
                                </p>

                                <div className="cover-block">
                                    <div className="non-active-hover-choose-destination" id="finland-choose-bttn">
                                        <a className="choose-destination-bttn" href="/Finland">
                                            Choose
                                        </a>
                                    </div>
                                </div>
                                
                                
                            </div>
                            <div className="destination" onMouseOver={this.ActiveImg.bind(this, "norway-img", "norway-choose-bttn",3)}>
                                <p>
                                    {this.destinations[3]}
                                </p>

                                <div className="cover-block">
                                    <div className="non-active-hover-choose-destination" id="norway-choose-bttn">
                                        <a className="choose-destination-bttn" href="/Norway">
                                            Choose
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClientChooseCountryHolder