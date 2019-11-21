import React from 'react'
import './App.css'
import User from './user'
import config from './config'



class Footer extends React.Component {

    render(){
        return(
            <div className="footer">
                <div className="footer-content">
                    <p>All weather data collected from</p>
                    <a href="https://www.openweathermap.org" target="/blank">https://www.openweathermap.org</a>
                </div>
                {config.enableUserImg ? <User /> : <div />}
            </div>
        )
    }
}

export default Footer