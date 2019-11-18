import React from 'react';
import './App.css';
import Cloud from './img/cloud.png';
import Sun from './img/sun.png';
import Snow from './img/snowy.png';
import Rain from './img/raining.png';
import Drizzle from './img/drizzle.png';
import Mist from './img/mist.png';
import Fog from './img/fog.png'
import WeatherCol from './weatherCol';
import moment from 'moment'




export function kelvinToCelcius (value) {
  if (!value) return null
  if (value !== Number(value)) value = Number(value)
  value = parseFloat(value)
  let celcius = value - 273.15
  return celcius.toFixed(1)
}

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};


  

class Weather extends React.Component {
  constructor(){
  super();
  this.state = {
    weather: {},
    isloading: true,
    location: 'åre',
    lat: '',
    long: '',
    inputValue: '',
    weekly: {}
  }

}
  componentDidMount(){
    let {location} = this.state
    const firstUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=224019f95493a66e58ed72c09393c01a`
    const secondUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&limit=5&appid=5aa1660165374b4199e3f8f06d3f3479`
    this.fetchWeather(firstUrl)
    this.fetchWeekly(secondUrl)
    
    }

    
      
      render(){
        this.renderWeatherCols()
        var {name,temp,wind,currentWeather,description,windspeed,pressure,humidity,gust,snow} = this.state.weather
        var {city,/*d1temp,d1main,d1desc,d1date,d2temp,d2main,d2desc,d2date,d3temp,d3main,d3desc,d3date,d4temp,d4main,d4desc,d4date,d5temp,d5main,d5desc,d5date*/} = this.state.weekly
      return(
      
      <div className="boxStyle" style={{backgroundColor: this.changeBackground()}}>
        <div className="bgIcon"></div>
          <label className="la">Get-your-location</label><div className="geoIcon" onClick={this.getLocation}></div>
            <div className="search">
              <form onSubmit={this.onSubmit}>
                <input type="text" value={this.state.inputValue} onChange={this.onChange} placeholder={this.state.location} maxLength="20" style={{backgroundColor: this.changeBackground()}}/>
                <button type="submit" value="submit">search</button>
              </form>
            </div>
          <div className="icon" style={{backgroundImage: this.changeImage()}}></div>
          <h1>{name}</h1>
          <i>Daily weather overview</i>
            <div className="divStyle" name="row1">
              <label>Temperature:</label><h3>{temp}</h3>
              <label>Main-weather:</label><h3>{currentWeather}</h3>
              <label>Description:</label><h3>{description}</h3>
            </div>
            <div className="divStyle" name="row2">
              <label>Wind-deg:</label><h3>{wind}</h3>
              <label>Wind-speed:</label><h3>{windspeed}</h3>
              <label>Wind-gust:</label><h3>{gust}</h3>
            </div>
            <div className="divStyle" name="row3">
              <label>Snowfall-next-3h:</label><h3>{snow}</h3>
              <label>Pressure:</label><h3>{pressure}</h3>
              <label>Humidity:</label><h3>{humidity}</h3>
            </div>
            

            {/* kompimerat resultat med hjälp av map() och en ny komponent*/}
            <i>Upcomming 5 days</i>
            <h1>{city}</h1>
            <div className="col">
                {this.renderWeatherCols()}
            </div>    
                
                
                {/* före komprimering! 
                <div className="boxstyle-col">     
            <div name="upcomingWeather-col1" className="divstyle-col">
                  <label>{d1date}</label><br/>
                <label>Main-weather</label><h3>{d1main}</h3>
                <label>Description</label><h3>{d1desc}</h3>
                <label>Temperature</label><h3>{d1temp}</h3>
            </div>
            <div name="upcomingWeather-col2" className="divstyle-col">
                  <label>{d2date}</label><br/>
                <label>Main-weather</label><h3>{d2main}</h3>
                <label>Description</label><h3>{d2desc}</h3>
                <label>Temperature</label><h3>{d2temp}</h3>
            </div>
            <div name="upcomingWeather-col3" className="divstyle-col">
                  <label>{d3date}</label><br/>
                <label>Main-weather</label><h3>{d3main}</h3>                        
                <label>Description</label><h3>{d3desc}</h3>
                <label>Temperature</label><h3>{d3temp}</h3>
            </div>
            <div name="upcomingWeather-col4" className="divstyle-col">
                  <label>{d4date}</label><br/>
                <label>Main-weather</label><h3>{d4main}</h3>
                <label>Description</label><h3>{d4desc}</h3>
                <label>Temperature</label><h3>{d4temp}</h3>
            </div>
            <div name="upcomingWeather-col5" className="divstyle-col">
                  <label>{d5date}</label><br/>
                <label>Main-weather</label><h3>{d5main}</h3>
                <label>Description</label><h3>{d5desc}</h3>
                <label>Temperature</label><h3>{d5temp}</h3>
            </div>
            </div>*/}
      </div>
    )
  }
  
  fetchWeather = (url) => {
    fetch(url)
      .then(response => {
      return response.json();
      }).then(data => {

      var obj = {
        name: data.name,
        temp: kelvinToCelcius(data.main.temp),
        wind: data.wind.deg,
        currentWeather: data.weather[0].main,
        description: data.weather[0].description,
        windspeed: data.wind.speed,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        gust: data.wind.gust ? data.wind.gust : 0,
        snow: data.snow ? data.snow['3h'] : 0
      }

        this.setState({
          weather: obj, 
          isloading: false
        })
        console.log()
      })
      .catch(error => console.log(error))
  }

  
  fetchWeekly = (url) => {
    fetch(url)
      .then(response => {
      return response.json();
      }).then(data => {  
      let daysList = data.list.filter(item => moment(item.dt_txt).diff(moment(), 'days') !== 0)
        .map(item => {
          let newObj = {
            temp: kelvinToCelcius(item.main.temp),
            description: item.weather[0].description,
            main: item.weather[0].main,
            date: item.dt_txt
          }
          return newObj
        })
      
      

        var weeklyObj = {
        city: data.city.name,
        days: daysList,
        forcastDays: [
          {
            temp: daysList[0].temp,
            main: daysList[0].main,
            desc: daysList[0].description,
            date: daysList[0].date
          },
          {
            temp: daysList[8].temp,
            main: daysList[8].main,
            desc: daysList[8].description,
            date: daysList[8].date
          },
          { 
            temp: daysList[16].temp,
            main: daysList[16].main,
            desc: daysList[16].description,
            date: daysList[16].date
          },
          { 
            temp: daysList[24].temp,
            main: daysList[24].main,
            desc: daysList[24].description,
            date: daysList[24].date
          },
          { 
            temp: daysList[30].temp,
            main: daysList[30].main,
            desc: daysList[30].description,
            date: daysList[30].date
          }
        ]
      }
      
      this.setState({
        weekly: weeklyObj, 
        isloading: false
      })
      console.log(this.state.weekly.forcastDays[2])
      })
      .catch(error => console.log(error))
  }
  
  filterToday = (array) => {
    array.filter(item => {
      return moment(item.dt_txt).diff(moment(), 'days') !== 0
    })
  }

  changeBackground =  () => {
    let {weather} = this.state
    let {currentWeather} = weather
    if (!currentWeather) return 'blue'
    
    switch (currentWeather) {
      case 'Clouds': return 'lightgrey'
      case 'Clear': return 'lightblue'
      case 'Snow': return 'seashell'
      case 'Rain': return 'grey'
      case 'Drizzle': return 'seashell'
      case 'Mist': return 'thistle'
      case 'Fog': return 'chocolate'
      default: return 'yellow'
    }
    
}

changeImage =  () => {
  let {weather} = this.state
  let {currentWeather} = weather
  if (!currentWeather) return 'url(./img/cloud.png)'
  
  switch (currentWeather) {
    case 'Clouds': return `url(${Cloud})`
    case 'Clear': return  `url(${Sun})`
    case 'Snow': return `url(${Snow})`
    case 'Rain': return `url(${Rain})`
    case 'Drizzle': return `url(${Drizzle})`
    case 'Mist': return `url(${Mist})`
    case 'Fog': return `url(${Fog})`
    default: return 'yellow'
  }
  
}
  onChange = (event) => {
    this.setState({inputValue: event.target.value});
}

  onSubmit = (event) => {
    //if (this.state.inputValue !== this.state.location){
    this.setState({location: this.state.inputValue})
    let {location} = this.state
    this.fetchWeather(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=224019f95493a66e58ed72c09393c01a`)
    this.fetchWeekly(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&limit=5&appid=5aa1660165374b4199e3f8f06d3f3479`)
    event.preventDefault();
  } 

  
  
  success = (pos) => {
    var crd = pos.coords;
    this.setState({
      lat: `${crd.latitude}`,
      long: `${crd.longitude}`
    })
    let {lat, long} = this.state
    const secondUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=5aa1660165374b4199e3f8f06d3f3479`
    const thirdUrl =  `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&limit=5&appid=5aa1660165374b4199e3f8f06d3f3479`
    this.fetchWeather(secondUrl)
    this.fetchWeekly(thirdUrl)
    console.log('latitude',this.state.lat)
    console.log('longitude',this.state.long)
  }
  
   error = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  getLocation = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.success, this.error, options);
    } else{
      console.log('error')
    }
  }

              //komprimerar divblocken i render  
//--------------------------------------------------------------------------
  renderWeatherCols = () => {
      let {weekly} = this.state  
      let {forcastDays} = weekly
      if (!forcastDays || forcastDays.length === 0) return <div />
      return weekly.forcastDays.map((item, index) => {
        return <WeatherCol data={item} key={index}/>
      })
  }
//--------------------------------------------------------------------------
}








export default Weather;