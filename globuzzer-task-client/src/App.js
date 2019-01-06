import React, { Component } from 'react';
import Section1 from './components/section1/Section1'
import SpecificCountry from './components/specific-country/SpecificCountry'
import {Route} from 'react-router-dom'
import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">


        {/* Section1 is the main page */}
        <Route exact path="/" component={Section1} />

        {/* SpecificCountry is the page generated for each different country when the user chooses one */}
        <Route path="/:country" component={SpecificCountry}/>
      </div>
    );
  }
}

export default App;
