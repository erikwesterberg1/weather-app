
import React from 'react';

const weatherCol = ({data, index}) => {

if(!data) return undefined
console.log(data)
return <div name="upcomingWeather-col1" className="divstyle-col" key={index}>
    <label>{data.date}</label><br/>
    <label>Main-weather</label><h3>{data.main}</h3>
    <label>Description</label><h3>{data.desc}</h3>
    <label>Temperature</label><h3>{data.temp}</h3>
    </div>

}

export default weatherCol