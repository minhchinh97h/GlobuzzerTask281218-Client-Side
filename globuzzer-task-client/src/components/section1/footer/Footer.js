import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

class Footer extends Component {
    render(){
        return(
            <div className="footer-container">
                <div className="bottom-nav">
                    <div className="left-section">
                        <div className="upper-left-section">
                            <div className="home-nav-link">
                                <Link to="/">Home</Link>
                            </div>
                            <div className="privacy-nav-link">
                                <Link to="/privacy">Privacy</Link>
                            </div>
                            <div className="terms-nav-link">
                                <Link to="/terms-and-conditions">Terms & Conditions</Link>
                            </div>  
                            <div className="contact-nav-link">
                                <Link to="/contact-us">Contact us</Link>
                            </div>
                        </div>
                        <div className="beneath-left-section">
                            <div className="copy-right">
                                <i className="far fa-copyright "></i>
                                <p>Copyright Statement</p>
                            </div>
                        </div>
                    </div>

                    <div className="right-section">
                        <div className="fb-holder">
                            <a href="https://www.facebook.com/Globuzzer/"><i className="fab fa-facebook-f"></i></a>
                        </div>
                        <div className="twitter-holder">
                            <a href="https://twitter.com/globuzzer?lang=en"><i className="fab fa-twitter"></i></a>
                        </div>
                        <div className="linkedin-holder">
                            <a href="https://www.linkedin.com/company/globuzzer/"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer