import React, { Component } from 'react'
import Header from '../header/Header'
import './Section1.css'

let today = new Date(),
    currentMonth = today.getMonth(),
    currentYear = today.getFullYear()



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

    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    state={
        render_country_options:null,
        current_selected_country: 'Select a country',
        arrival_date_content: null,
        departure_date_content: null
    }

    SelectCountry = (e) => {
        this.setState({
            current_selected_country: e.target.textContent
        })
    }

    ToggleCountryDropdown = () => {
        window.document.getElementById("country-dropdown-content").classList.toggle("show")
        window.document.getElementById("select-country-dropdown").classList.toggle("active")
    }

    ToggleArrivalDropdown = () => {
        window.document.getElementById("arrival-dropdown-content").classList.toggle("show")
        window.document.getElementById("arrival-date-dropdown").classList.toggle("active")
    }

    ToggleDepartureDropdown = () => {
        window.document.getElementById("departure-dropdown-content").classList.toggle("show")
        window.document.getElementById("departure-date-dropdown").classList.toggle("active")
    }

    isDescendant(parent, child) {
        var node = child.parentNode;
        while (node != null) {
            if (node == parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
   }

   ShowMonthYear(tbId, monthYearId, month, year){
        let firstDay = (new Date(year, month)).getDay()
        let daysInMonth = 32 - (new Date(year,month, 32)).getDate()

        let tb = document.getElementById(tbId) //tbody of arrival previous month
        
        //clearing all the data
        tb.innerHTML = ""

        let monthYear = document.getElementById(monthYearId)
        monthYear.innerHTML = this.months[month] + " " + year

        //initialize cells
        let date = 1;
        for(let r = 0; r < 6; r++){
            let row = document.createElement("tr")

            for(let c = 0; c < 7; c++){
                if(r === 0 && c < firstDay){
                    let cell = document.createElement("td")
                    let cellText = document.createTextNode("")
                    cell.appendChild(cellText)
                    row.appendChild(cell)
                }

                else if(date > daysInMonth){
                    break
                }

                else{
                    let cell = document.createElement("td")
                    let cellText = document.createTextNode(date)

                    if(date === today.getDate() && year === today.getFullYear() && month === today.getMonth()){

                    }

                    cell.appendChild(cellText)
                    row.appendChild(cell)
                    date++
                }
            }

            tb.appendChild(row)
        }
    }

    componentDidMount(){
        window.onclick = (e) => {
            if(!e.target.matches('.select-country-dropdown')){
                let countryDropdown = document.getElementById("country-dropdown-content")
                if(countryDropdown.classList.contains('show')){
                    document.getElementById("select-country-dropdown").classList.remove("active")
                    countryDropdown.classList.remove('show')
                } 
            }

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


        //initialize countries
        this.setState({
            render_country_options: this.country_list.map((country, index) =>{
                return(
                    <a className="" href="#" key={country} onClick={this.SelectCountry}>{country}</a>
                )
            })
        })


        //initialize arrival date
        let previous = new Date()
        previous.setDate(1)
        previous.setMonth(previous.getMonth() - 1)

        let previousYear = previous.getFullYear(),
            previousMonth = previous.getMonth()


        this.ShowMonthYear("arrival-previous-month", "a-previous-month-year", previousMonth, previousYear)
        this.ShowMonthYear("arrival-current-month", "a-current-month-year", currentMonth,currentYear)

        //initialize departure date
        let next = new Date()
        next.setDate(1)
        next.setMonth(next.getMonth() + 1)

        this.ShowMonthYear("departure-current-month", "d-current-month-year", currentMonth, currentYear)
        this.ShowMonthYear("departure-next-month", "d-next-month-year", next.getMonth(), next.getFullYear())
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

                                    <div className="select-arrival-departure-date-holder">
                                        <div className="arrival-date-holder">
                                            <a id="arrival-date-dropdown" className="arrival-date-dropdown"
                                            onClick={this.ToggleArrivalDropdown}>
                                                Select a date
                                            </a>
                                            <div id="arrival-dropdown-content" className="arrival-dropdown-content"
                                            >
                                                <div className="content-holder">
                                                    <div className="previous-month">
                                                        <h3 id="a-previous-month-year">
                                                        </h3>
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th>
                                                                        Su
                                                                    </th>
                                                                    <th>
                                                                        Mo
                                                                    </th>
                                                                    <th>
                                                                        Tu
                                                                    </th>
                                                                    <th>
                                                                        We
                                                                    </th>
                                                                    <th>
                                                                        Th
                                                                    </th>
                                                                    <th>
                                                                        Fr
                                                                    </th>
                                                                    <th>
                                                                        Sa
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody id="arrival-previous-month">
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="current-month">
                                                        <h3 id="a-current-month-year">
                                                        </h3>
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th>
                                                                        Su
                                                                    </th>
                                                                    <th>
                                                                        Mo
                                                                    </th>
                                                                    <th>
                                                                        Tu
                                                                    </th>
                                                                    <th>
                                                                        We
                                                                    </th>
                                                                    <th>
                                                                        Th
                                                                    </th>
                                                                    <th>
                                                                        Fr
                                                                    </th>
                                                                    <th>
                                                                        Sa
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody id="arrival-current-month">
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="breadcrumb">
                                        </div>
                                        <div className="departure-date-holder">
                                            <a id="departure-date-dropdown" className="departure-date-dropdown"
                                            onClick={this.ToggleDepartureDropdown}>
                                                Select a date
                                            </a>
                                            <div id="departure-dropdown-content" className="departure-dropdown-content">
                                                <div className="content-holder">
                                                    <div className="current-month">
                                                            <h3 id="d-current-month-year">
                                                            </h3>
                                                            <table>
                                                                <thead>
                                                                    <tr>
                                                                        <th>
                                                                            Su
                                                                        </th>
                                                                        <th>
                                                                            Mo
                                                                        </th>
                                                                        <th>
                                                                            Tu
                                                                        </th>
                                                                        <th>
                                                                            We
                                                                        </th>
                                                                        <th>
                                                                            Th
                                                                        </th>
                                                                        <th>
                                                                            Fr
                                                                        </th>
                                                                        <th>
                                                                            Sa
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody id="departure-current-month">
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div className="next-month">
                                                            <h3 id="d-next-month-year">
                                                            </h3>
                                                            <table>
                                                                <thead>
                                                                    <tr>
                                                                        <th>
                                                                            Su
                                                                        </th>
                                                                        <th>
                                                                            Mo
                                                                        </th>
                                                                        <th>
                                                                            Tu
                                                                        </th>
                                                                        <th>
                                                                            We
                                                                        </th>
                                                                        <th>
                                                                            Th
                                                                        </th>
                                                                        <th>
                                                                            Fr
                                                                        </th>
                                                                        <th>
                                                                            Sa
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody id="departure-next-month">
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
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