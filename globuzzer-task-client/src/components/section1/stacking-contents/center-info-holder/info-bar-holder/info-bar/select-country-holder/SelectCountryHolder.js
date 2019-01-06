import React, { Component } from 'react'
import './SelectCountryHolder.css'

class SelectCountryHolder extends Component{

    //The below country_list contains all the countries for future purposes

    // country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
	// ,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia Herzegovina","Botswana","Brazil","British Virgin Islands"
	// ,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
	// ,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
	// ,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
	// ,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
	// ,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
	// ,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
	// ,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
	// ,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
	// ,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
	// ,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
	// ,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad Tobago","Tunisia"
	// ,"Turkey","Turkmenistan","Turks Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay"
    // ,"Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];


    country_list = ["Sweden", "Denmark", "Finland", "Norway"]

    state = {
        render_country_options:null,
        current_selected_country: 'Select a country'
    }

    ToggleCountryDropdown = () => {
        window.document.getElementById("country-dropdown-content").classList.toggle("show")
        window.document.getElementById("select-country-dropdown").classList.toggle("active")
    }

    SelectCountry = (e) => {
        this.setState({
            current_selected_country: e.target.textContent
        })
    }
    
    componentDidMount(){
        //initialize countries
        this.setState({
            render_country_options: this.country_list.map((country) =>{
                return(
                    <div className="" key={country} onClick={this.SelectCountry}>{country}</div>
                )
            })
        })
    }

    render(){
        return(
            <div className="select-country-holder">
                <div className="under-991px-cover">
                    <div className="under-991px-country-title">
                        <p>Country</p>
                    </div>
                    
                    <div className="under-991px-dropdown-cover">
                        <div id="select-country-dropdown" className="select-country-dropdown" 
                        onClick={this.ToggleCountryDropdown}>
                            <i className="fas fa-map-marker-alt" ></i>
                            {this.state.current_selected_country}
                            <i className="fas fa-caret-down fa-lg"></i>
                        </div>
                        <div id="country-dropdown-content" className="country-dropdown-content">
                            <div className="content-holder">
                                {this.state.render_country_options}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SelectCountryHolder