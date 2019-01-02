import React, { Component } from 'react'
import './Header.css'

class Header extends Component{

    render(){
        return(
            <div className="container">
                <div className="top-nav">
                    <div className="logo-brand-holder">
                        <a className="brand-display" href="#">Globuzzer</a>
                    </div>

                    <div className="right-section">
                        <div className="home-selection-holder">
                            <a className="home-display" href="#">Home</a>
                        </div>

                        <div className="services-selection-holder">
                            <a className="services-display" href="#">Services</a>
                        </div>
                        
                        <div className="my-package-selection-holder">
                            <a className="my-package-display" href="#">My package</a>
                        </div>

                        <div className="currency-selection-holder">
                            <select className="currency-selection-display">
                                <option value="EUR" defaultValue>EUR</option>
                                <option value="USD">USD</option>
                                <option value="GBP">GBP</option>
                                <option value="JPY">JPY</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div>

                </div>
            </div>
        )
    }
}

export default Header