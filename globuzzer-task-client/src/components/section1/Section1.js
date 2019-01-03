import React, { Component } from 'react'
import Header from '../header/Header'
import './Section1.css'

let today = new Date(),
    currentMonth = today.getMonth(),
    currentYear = today.getFullYear(),
    aCurrentMonth = currentMonth,
    aCurrentYear = currentYear,
    dCurrentMonth = currentMonth,
    dCurrentYear = currentYear

let image_index = 0
let timer
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

    images = ['/images/sweden/sweden.jpg', '/images/denmark/denmark.jpg', '/images/finland/finland.jpg', '/images/norway/norway.jpg']
    
    welcome_banners = ['Sweden', 'Denmark', 'Finland', 'Norway']

    state={
        render_country_options:null,
        current_selected_country: 'Select a country',
        current_image: <img src={this.images[image_index]} />,
        place_display: this.welcome_banners[image_index]

    }

    ChangeImageAuto(){
        timer = setInterval(() => {
            image_index++

            if(image_index === 4){
                image_index = 0
            }
            this.setState({
                current_image: <img src={this.images[image_index]} />,
                place_display: this.welcome_banners[image_index]
            })

            let imgBtnHolder = document.getElementById("image-nav-bttn-holder")

            imgBtnHolder.childNodes[image_index].classList.add("active-img-nav-bttn")
            imgBtnHolder.childNodes[image_index].classList.remove("non-active-img-nav-bttn")

            for(let i = 0; i < imgBtnHolder.childNodes.length; i++){
                if(i !== image_index){
                    imgBtnHolder.childNodes[i].classList.remove("active-img-nav-bttn")
                    imgBtnHolder.childNodes[i].classList.add("non-active-img-nav-bttn")
                }
            }
        }, 10000)
    }

    ChangeImageTo = (index) => {
        clearInterval(timer)
        image_index = index
        this.setState({
            current_image: <img src={this.images[image_index]} />,
            place_display: this.welcome_banners[image_index]
        })

        let imgBtnHolder = document.getElementById("image-nav-bttn-holder")

        imgBtnHolder.childNodes[image_index].classList.add("active-img-nav-bttn")
            imgBtnHolder.childNodes[image_index].classList.remove("non-active-img-nav-bttn")

        for(let i = 0; i < imgBtnHolder.childNodes.length; i++){
            if(i !== image_index){
                imgBtnHolder.childNodes[i].classList.remove("active-img-nav-bttn")
                imgBtnHolder.childNodes[i].classList.add("non-active-img-nav-bttn")
            }
        }

        this.ChangeImageAuto()
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

    ANavPrevious = (currentTb, currentMY, nextTb, nextMY) => {
        this.ShowMonthYear(nextTb, nextMY, aCurrentMonth, aCurrentYear)

        //decrease
        aCurrentYear = (aCurrentMonth === 0) ? aCurrentYear - 1 : aCurrentYear
        aCurrentMonth = (aCurrentMonth === 0) ? 11 : aCurrentMonth - 1;
        
        this.ShowMonthYear(currentTb, currentMY, aCurrentMonth, aCurrentYear)
    }

    ANavNext = (currentTb, currentMY, nextTb, nextMY) => {
        //increase
        aCurrentYear = (aCurrentMonth === 11) ? aCurrentYear + 1 : aCurrentYear;
        aCurrentMonth = (aCurrentMonth + 1) % 12;
        this.ShowMonthYear(currentTb, currentMY, aCurrentMonth, aCurrentYear)

        //increase again
        let year = aCurrentYear,
            month = aCurrentMonth

        year = (year === 11) ? year + 1 : year;
        month = (month + 1) % 12;
        this.ShowMonthYear(nextTb, nextMY, month, year)
    }
    
    DNavPrevious = (currentTb, currentMY, nextTb, nextMY) => {
        this.ShowMonthYear(nextTb, nextMY, dCurrentMonth, dCurrentYear)

        //decrease
        dCurrentYear = (dCurrentMonth === 0) ? dCurrentYear - 1 : dCurrentYear
        dCurrentMonth = (dCurrentMonth === 0) ? 11 : dCurrentMonth - 1;

        this.ShowMonthYear(currentTb, currentMY, dCurrentMonth, dCurrentYear)
    }

    DNavNext = (currentTb, currentMY, nextTb, nextMY) => {
        //increase
        dCurrentYear = (dCurrentMonth === 11) ? dCurrentYear + 1 : dCurrentYear;
        dCurrentMonth = (dCurrentMonth + 1) % 12;
        this.ShowMonthYear(currentTb, currentMY, dCurrentMonth, dCurrentYear)

        //increase again
        let year = dCurrentYear,
            month = dCurrentMonth

        year = (year === 11) ? year + 1 : year;
        month = (month + 1) % 12;

        this.ShowMonthYear(nextTb, nextMY, month, year)
    }

    componentDidMount(){
        //change images every 10s
        this.ChangeImageAuto()

        //control the dropdowns
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
        let next = new Date()
        next.setDate(1)
        next.setMonth(next.getMonth() + 1)


        this.ShowMonthYear("arrival-current-month", "a-current-month-year", aCurrentMonth, aCurrentYear)
        this.ShowMonthYear("arrival-next-month", "a-next-month-year", next.getMonth(), next.getFullYear())

        //initialize departure date
        

        this.ShowMonthYear("departure-current-month", "d-current-month-year", dCurrentMonth, dCurrentYear)
        this.ShowMonthYear("departure-next-month", "d-next-month-year", next.getMonth(), next.getFullYear())
    }

    

    render(){
        return(
            <div className="section1-container">
                <Header />
                <div className="stacking-contents">
                    <div className="images-holder">
                        <div className="images">
                            {this.state.current_image}
                        </div>
                    </div>
                    <div className="center-info-holder">
                        <div className="center-info">
                            <div className="welcome-banner">
                                <p>Welcome to {this.state.place_display}</p>
                            </div>

                            <div className="info-bar-holder">
                                <div className="info-bar-cover">
                                    <div className="titles">
                                        <div className="country-title">
                                            <p>
                                                Country
                                            </p>
                                        </div>
                                        
                                        <div className="arrival-title">
                                            <p>
                                                Arrival date
                                            </p>
                                        </div>
                                        
                                        <div className="departure-title">
                                            <p>
                                                Departure date
                                            </p>
                                        </div>
                                        
                                        <div className="travelers-title">
                                            <p>
                                                Number of travelers
                                            </p>
                                        </div>
                                    </div>
                                <div className="info-bar">
                                    <div className="select-country-holder">
                                        <a id="select-country-dropdown" className="select-country-dropdown" 
                                        onClick={this.ToggleCountryDropdown}>
                                            <i className="fas fa-map-marker-alt"></i>
                                            {this.state.current_selected_country}
                                            <i className="fas fa-caret-down fa-lg"></i>
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
                                                <i className="far fa-calendar-alt"></i>
                                                Select a date
                                            </a>
                                            <div id="arrival-dropdown-content" className="arrival-dropdown-content"
                                            >
                                                <div className="content-holder">
                                                    <div className="current-month">
                                                        <div className="nav-btn-holder" 
                                                        onClick={this.ANavPrevious.bind(this, "arrival-current-month",
                                                        "a-current-month-year", "arrival-next-month", "a-next-month-year")}>
                                                            <i id="previous-month-btn" className="fas fa-angle-left fa-lg"></i>
                                                        </div>

                                                        <div className="calendar-divider">
                                                            <div className="my-inform">
                                                                <p id="a-current-month-year">
                                                                
                                                                </p>
                                                            </div>
                                                            <div className="md-show">
                                                                <div>
                                                                <table>
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Su</th><th>Mo</th><th>Tu</th>
                                                                            <th>We</th><th>Th</th><th>Fr</th><th>Sa</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody id="arrival-current-month">
                                                                    </tbody>
                                                                </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="next-month">
                                                        <div className="nav-btn-holder"
                                                        onClick={this.ANavNext.bind(this, "arrival-current-month",
                                                        "a-current-month-year", "arrival-next-month", "a-next-month-year")}>
                                                            <i id="next-month-btn" className="fas fa-angle-right fa-lg"></i>
                                                        </div>
                                                        
                                                        <div className="calendar-divider">
                                                            <div className="my-inform">
                                                                <p id="a-next-month-year">
                                                                </p>
                                                            </div>
                                                            
                                                            <div className="md-show">
                                                                <div>
                                                                <table>
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Su</th><th>Mo</th><th>Tu</th>
                                                                            <th>We</th><th>Th</th><th>Fr</th><th>Sa</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody id="arrival-next-month">
                                                                    </tbody>
                                                                </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="breadcrumb">
                                        </div>
                                        <div className="departure-date-holder">
                                            <a id="departure-date-dropdown" className="departure-date-dropdown"
                                            onClick={this.ToggleDepartureDropdown}>
                                                <i className="far fa-calendar-alt"></i>
                                                Select a date
                                            </a>
                                            <div id="departure-dropdown-content" className="departure-dropdown-content">
                                                <div className="content-holder">
                                                    <div className="current-month">
                                                        <div className="nav-btn-holder"
                                                        onClick={this.DNavPrevious.bind(this, "departure-current-month",
                                                        "d-current-month-year", "departure-next-month", "d-next-month-year")}>
                                                            <i id="previous-month-btn" className="fas fa-angle-left fa-lg"></i>
                                                        </div>
                                                        <div className="calendar-divider">
                                                            <div className="my-inform">
                                                                <p id="d-current-month-year">
                                                                </p>
                                                            </div>
                                                            
                                                            <div className="md-show">
                                                                <div>
                                                                <table>
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Su</th><th>Mo</th><th>Tu</th>
                                                                            <th>We</th><th>Th</th><th>Fr</th><th>Sa</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody id="departure-current-month">
                                                                    </tbody>
                                                                </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="next-month">
                                                        <div className="nav-btn-holder"
                                                        onClick={this.DNavNext.bind(this, "departure-current-month",
                                                        "d-current-month-year", "departure-next-month", "d-next-month-year")}>
                                                            <i id="next-month-btn" className="fas fa-angle-right fa-lg"></i>
                                                        </div>

                                                        <div className="calendar-divider">
                                                            <div className="my-inform">
                                                                <p id="d-next-month-year">
                                                                </p>
                                                            </div>

                                                            <div className="md-show">
                                                                <div>
                                                                <table>
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Su</th><th>Mo</th><th>Tu</th>
                                                                            <th>We</th><th>Th</th><th>Fr</th><th>Sa</th>
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
                                                </div>
                                            </div>
                                        </div>
                                    <div className="number-guests-holder">
                                        <div className="number-guests">
                                            <i className="fas fa-users"></i>
                                            <input placeholder="Type a number"></input>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="image-nav-bttn-holder" id="image-nav-bttn-holder">
                            <div className="sweden-dot active-img-nav-bttn" onClick={this.ChangeImageTo.bind(this, 0)}>

                            </div>
                            <div className="denmark-dot non-active-img-nav-bttn" onClick={this.ChangeImageTo.bind(this, 1)}>

                            </div>
                            <div className="finland-dot non-active-img-nav-bttn" onClick={this.ChangeImageTo.bind(this, 2)}>

                            </div>
                            <div className="norway-dot non-active-img-nav-bttn" onClick={this.ChangeImageTo.bind(this, 3)}>

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