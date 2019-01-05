import React, { Component } from 'react'
import './DepartureDateHolder.css'

let today = new Date(),
    currentMonth = today.getMonth(),
    currentYear = today.getFullYear(),
    dCurrentMonth = currentMonth,
    dCurrentYear = currentYear

class DepartureDateHolder extends Component{
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    state = {
        current_date: "Select a date"
    }
    
    ToggleDepartureDropdown = () => {
        window.document.getElementById("departure-dropdown-content").classList.toggle("show")
        window.document.getElementById("departure-date-dropdown").classList.toggle("active")
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

    SelectDate = (date, node) => {
        this.setState({
            current_date: date
        })
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

                    if(date < today.getDate() && year === today.getFullYear() && month === today.getMonth() 
                        || (month < today.getMonth() && year === today.getFullYear())
                        || (year < today.getFullYear()) ){
                        cell.classList.add("table-td-out-of-date")
                    }

                    else{
                        if(date === today.getDate() && year === today.getFullYear() && month === today.getMonth()){
                            cell.classList.add("table-td-current-date")
                        }
                        cell.classList.add("table-td-available")
                        cell.onclick = this.SelectDate.bind(this, ((month+1) + "/" + date + "/" + year), cell)
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

        //initialize departure date
        let next = new Date()
        next.setDate(1)
        next.setMonth(next.getMonth() + 1)

        this.ShowMonthYear("departure-current-month", "d-current-month-year", dCurrentMonth, dCurrentYear)
        this.ShowMonthYear("departure-next-month", "d-next-month-year", next.getMonth(), next.getFullYear())
    }

    render(){
        return(
            <div className="departure-date-holder">
                <a id="departure-date-dropdown" className="departure-date-dropdown"
                onClick={this.ToggleDepartureDropdown}>
                    <i className="far fa-calendar-alt"></i>
                    {this.state.current_date}
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
                                    <p id="d-current-month-year"></p>
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
                                    <p id="d-next-month-year"> </p>
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
        )
    }
}

export default DepartureDateHolder