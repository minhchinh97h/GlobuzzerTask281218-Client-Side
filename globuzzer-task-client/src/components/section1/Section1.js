import React, { Component } from 'react'
import Header from '../header/Header'
import './Section1.css'

class Section1 extends Component{
    country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
	,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia Herzegovina","Botswana","Brazil","British Virgin Islands"
	,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
	,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
	,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
	,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
	,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
	,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
	,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
	,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
	,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
	,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
	,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad Tobago","Tunisia"
	,"Turkey","Turkmenistan","Turks Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay"
    ,"Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];


    state={
        render_country_options:null,
        current_selected_country: 'Select a country'
    }

    SelectCountry = (e) => {
        this.setState({
            current_selected_country: e.target.textContent
        })
    }

    ToggleCountryDropdown = () => {
        window.document.getElementById("country-dropdown-content").classList.toggle("show")
        window.document.getElementById("select-country-dropdown").classList.toggle("select-country-dropdown-show")
    }

    componentDidMount(){
        window.onclick = (e) => {
            if(!e.target.matches('.select-country-dropdown')){
                let dropdown = document.getElementById("country-dropdown-content")

                if(dropdown.classList.contains('show')){
                    document.getElementById("select-country-dropdown").classList.remove("select-country-dropdown-show")
                    dropdown.classList.remove('show')
                }
                    
            }
        }

        this.setState({
            render_country_options: this.country_list.map((country, index) =>{
                return(
                    <a className="" href="#" key={country} onClick={this.SelectCountry}>{country}</a>
                )
            })
        })
    }

    render(){
        return(
            <div className="section1-container">
                <Header />
                <div className="stacking-contents">
                    <div className="images-holder">
                        <div className="images">
                            <img src="/images/sweden/sweden.jpg" />
                        </div>
                    </div>
                    <div className="center-info-holder">
                        <div className="center-info">
                            <div className="welcome-banner">
                                <p>Welcome to Sweden</p>
                            </div>
                            <div className="info-bar-holder">
                                <div className="info-bar">
                                    <div className="select-country-holder">
                                        <a id="select-country-dropdown" className="select-country-dropdown" 
                                        onClick={this.ToggleCountryDropdown}>
                                            {this.state.current_selected_country}
                                        </a>
                                        <div id="country-dropdown-content" className="country-dropdown-content">
                                            <div className="content-holder">
                                                {this.state.render_country_options}
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            Select a date
                                        </div>
                                        <div>
                                            Select a date
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            Type a number
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="intro-ad-holder">

                </div>

            </div>
        )
    }
}

export default Section1