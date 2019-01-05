import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
    render(){
        return(
            <div className="footer-container">
                <div className="bottom-nav">
                    <div className="left-section">
                        <div className="upper-left-section">
                            <div className="home-nav-link">
                                <a href="#">Home</a>
                            </div>
                            <div className="privacy-nav-link">
                                <a href="#">Privacy</a>
                            </div>
                            <div className="terms-nav-link">
                                <a href="#">Terms & Conditions</a>
                            </div>  
                            <div className="contact-nav-link">
                                <a href="#">Contact us</a>
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
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                        </div>
                        <div className="twitter-holder">
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                        <div className="linkedin-holder">
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer