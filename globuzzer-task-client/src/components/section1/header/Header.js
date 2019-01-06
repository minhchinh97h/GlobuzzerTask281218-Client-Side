import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

class Header extends Component{

    componentDidMount(){
        
    }

    render(){
        return(
            <div className="header">
                <div className="top-nav">
                    <div className="logo-brand-holder" onClick={this.change}>
                        <Link className="brand-display" to="/">Globuzzer</Link>
                    </div>

                    <div className="right-section">
                        <div className="home-selection-holder">
                            <i className="fas fa-home fa-md"></i>
                            <Link className="home-display" to="/">Home</Link>
                        </div>

                        <div className="services-selection-holder">
                            <i className="fas fa-bicycle"></i>
                            <Link className="services-display" to="/services">Services</Link>
                        </div>
                        
                        <div className="my-package-selection-holder">
                            <i className="fas fa-shopping-cart"></i>
                            <Link className="my-package-display" to="/my-package">My package</Link>
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