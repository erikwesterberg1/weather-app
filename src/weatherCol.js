
import React from 'react'
import {changeImage, changeBackground, snowyBorder} from './common'



const weatherCol = ({data, index}) => {
    
    if(!data) return undefined
    
    return <div name="upcomingWeather-col1" className="divstyle-col" key={index} style={{backgroundColor: changeBackground(data.main), border: snowyBorder(data.main)}}>
          <label>{data.date}</label><br/>
          <div className="bigIcon" style={{backgroundImage: changeImage(data.main)}}></div>
          <label>Main-weather</label><h3>{data.main}</h3>
          <label>Description</label><h3>{data.desc}</h3>
          <label>Temperature</label><h3>{data.temp}</h3>
          </div>
    
}


export default weatherCol