import React, { Component } from 'react'
import './AdOptionsHolder.css'

class AdOptionsHolder extends Component{
    render(){
        return(
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
        )
    }
}

export default AdOptionsHolder