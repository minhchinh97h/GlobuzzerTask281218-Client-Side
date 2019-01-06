import React, { Component } from 'react';
import Header from '../section1/header/Header'
import Footer from '../section1/footer/Footer'
import './SpecificCountry.css'

const axios = require('axios')
const serverUrl = 'http://localhost:3002'

class SpecificCountry extends Component{
    _mounted = false

    images = {
        'Sweden' : '/images/sweden/sweden.jpg',
        'Denmark': '/images/denmark/denmark.jpg',
        'Finland': '/images/finland/finland.jpg',
        'Norway': '/images/norway/norway.jpg'
    }

    state = {
        image: null,
        destination_banner: null,
        destination_description: null,
        news: {
            news1: null,
            news2: null,
            news3: null
        },
        video_iframe: ""
    }

    componentDidMount(){
        this._mounted = true

        let getCountryInfo = async () => {
            await axios({
                method: 'get',
                url: serverUrl + '/api/retrieve-info-country/' + this.props.match.params.country
            })
            .then(res => {
                if(this._mounted){

                    this.setState({
                        image: this.images[res.data.name],
                        destination_banner: res.data.destination_banner,
                        destination_description: res.data.destination_description,
                        video_iframe: res.data.video_iframe,
                        news: res.data.news
                    })
                }
            })
            .catch(err => console.log(err))
        }

        getCountryInfo()
    }

    componentWillUnmount(){
        this._mounted = false
    }

    componentDidUpdate(prevProps, prevState){

    }

    render(){
        return(
            <div className="sweden-section">
                <div className="first-section-holder">
                    <Header />

                    <div className="stacking-content">
                        <div className="image-holder">
                            <img src={this.state.image} alt="country-holder"/>

                            <div className="example-holder">
                                <div className="news-title">
                                    <h3>What's news?</h3>
                                </div>

                                <div className="news-holder">
                                    <div className="news-item">
                                        <p>{this.state.news.news1}</p>
                                    </div>

                                    <div className="news-item">
                                        <p>{this.state.news.news2}</p>
                                    </div>

                                    <div className="news-item">
                                        <p>{this.state.news.news2}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="info-holder">
                            <div className="destination-banner">
                                <h1>{this.state.destination_banner}</h1>
                            </div>

                            <div className="destination-description">
                                <span>
                                {this.state.destination_description}
                                </span>
                            </div>

                            <div className="join-us-bttn-holder">
                                <button>
                                    Join us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="video-holder">
                    <div className="video-title">
                        <h1>Country Video</h1>
                    </div>

                    <div className="video-display">
                    <iframe width="560" height="315" src={this.state.video_iframe} title="country-video" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen mozallowfullscreen ='true' msallowfullscreen ='true' oallowfullscreen ='true' webkitallowfullscreen='true'></iframe>
                    </div>

                    
                    <Footer />  
                </div>
            </div>
        )
    }
}

export default SpecificCountry