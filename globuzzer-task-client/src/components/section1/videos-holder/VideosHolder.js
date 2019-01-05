import React, { Component } from 'react'
import './VideosHolder.css'

class VideosHolder extends Component{

    render(){
        return(
            <div className="videos-holder">
                <div className="video-description">
                    <span><b>Explore the Nordics</b></span>
                </div>
                <div className="video-grid-cover">
                    <div className="video-grid">
                        <div className="video-item-1">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/GDQZbz9k9UM" 
                            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            mozallowfullscreen = "true"
                            msallowfullscreen = "true"
                            oallowfullscreen = "true"
                            webkitallowfullscreen = "true"></iframe>

                            
                        </div>

                        <div className="video-item-2">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/EFfoCyvUIL8" 
                            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            mozallowfullscreen = "true"
                            msallowfullscreen = "true"
                            oallowfullscreen = "true"
                            webkitallowfullscreen = "true"></iframe>
                        </div>

                        <div className="video-item-3">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/o5y7yRsKYxU" 
                            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            mozallowfullscreen = "true"
                            msallowfullscreen = "true"
                            oallowfullscreen = "true"
                            webkitallowfullscreen = "true"></iframe>
                        </div>

                        <div className="video-item-4">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/miJaLj799is" 
                            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            mozallowfullscreen = "true"
                            msallowfullscreen = "true"
                            oallowfullscreen = "true"
                            webkitallowfullscreen = "true"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideosHolder