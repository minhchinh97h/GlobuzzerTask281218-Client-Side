import React, { Component } from 'react';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Section1 from './components/section1/Section1'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <Header />
        </header>

        <main>
          <Section1 />
        </main>

        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
