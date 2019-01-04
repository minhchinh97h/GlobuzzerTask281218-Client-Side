import React, { Component } from 'react'
import './ArrivalDateHolder.css'

let today = new Date(),
    currentMonth = today.getMonth(),
    currentYear = today.getFullYear(),
    aCurrentMonth = currentMonth,
    aCurrentYear = currentYear

class ArrivalDateHolder extends Component{
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    state = {

    }

    ToggleArrivalDropdown = () => {
        window.document.getElementById("arrival-dropdown-content").classList.toggle("show")
        window.document.getElementById("arrival-date-dropdown").classList.toggle("active")
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
        

        //initialize arrival date
        let next = new Date()
        next.setDate(1)
        next.setMonth(next.getMonth() + 1)


        this.ShowMonthYear("arrival-current-month", "a-current-month-year", aCurrentMonth, aCurrentYear)
        this.ShowMonthYear("arrival-next-month", "a-next-month-year", next.getMonth(), next.getFullYear())
    }

    render(){
        return(
            <div className="arrival-date-holder">
                <a id="arrival-date-dropdown" className="arrival-date-dropdown"
                onClick={this.ToggleArrivalDropdown}>
                    <i className="far fa-calendar-alt"></i>
                    Select a date
                </a>
                <div id="arrival-dropdown-content" className="arrival-dropdown-content">
                    <div className="content-holder">
                        <div className="current-month">
                            <div className="nav-btn-holder" 
                            onClick={this.ANavPrevious.bind(this, "arrival-current-month",
                            "a-current-month-year", "arrival-next-month", "a-next-month-year")}>
                                <i id="previous-month-btn" className="fas fa-angle-left fa-lg"></i>
                            </div>

                            <div className="calendar-divider">
                                <div className="my-inform">
                                    <p id="a-current-month-year"></p>
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
                                    <p id="a-next-month-year"></p>
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
        )
    }
}

export default ArrivalDateHolder