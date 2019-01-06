import React, { Component } from 'react'
import Footer from '../footer/Footer'
import './ContactUsHolder.css'


class ContactUsHolder extends Component{

    render(){
        return(
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
                                Come in for a coffee <i className="fas fa-coffee"></i>
                            </p>

                        </span>

                        <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8619.952373406051!2d18.06769312535121!3d59.34901039298875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d401191830f%3A0xff6e8bbbca445e6b!2sLindstedtsv%C3%A4gen+24%2C+114+28+Stockholm%2C+Sweden!5e0!3m2!1sen!2s!4v1546681314413" 
                            width="600" height="450" frameBorder="0" allowFullScreen title="map"></iframe>
                        </div>  

                        <div className="contact-info">
                            <span>
                                <i className="fas fa-map-marker-alt"></i>
                                <p>Lindstedtsvägen 24, 4thFloor, 114 28 Stockholm, Sweden</p>    
                            </span>

                            <span>
                                <i className="fas fa-envelope"></i>
                                <p>rami@globuzzer.com</p>
                            </span> 

                            <span>
                                <i className="fas fa-phone"></i>
                                <p>+46 73 555 5 134</p>
                            </span>  
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default ContactUsHolder