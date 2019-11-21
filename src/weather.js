import React from 'react'
import './App.css'
import WeatherCol from './weatherCol'
import {fetchWeather, fetchWeekly} from './apiFetches'
import {changeImage, changeBackground} from './common'



/*const officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
]

const officersName = officers.map(officer => officer.name)
console.log(officersName)


const characters = [
  {level: 100, name: 'cpt Price', title: 'captain'},
  {level: 10, name: 'lt Dan', title: 'liutanant'},
  {level: 120, name: 'mc john-117 ', title: 'master chief officer'},
  {level: 30, name: 'adm ackbar', title: 'admiral'},
  {level: 70, name: 'pvt Ryan', title: 'private'}
]

const characterLevel = characters.filter(char => char.level >= 60)
console.log(characterLevel)


const money = [
  {product: 'socks', price: 30},
  {product: 't-shirt', price: 67},
  {product: 'shirt', price: 350},
  {product: 'jeans', price: 498}
]

const total = money.reduce((acc,mon) => acc + mon.price,0)
console.log(total)*/



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
}


  

class Weather extends React.Component {
  constructor(){
  super()
  this.state = {
    weather: {},
    isloading: true,
    location: 'åre',
    lat: '',
    long: '',
    weekly: {}
  }

}
  componentDidMount(){
    let {location} = this.state
    const firstUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=224019f95493a66e58ed72c09393c01a`
    const secondUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&limit=5&appid=5aa1660165374b4199e3f8f06d3f3479`
    fetchWeekly(secondUrl)
    .then((res) => this.setState({weekly: res}))
    fetchWeather(firstUrl)
      .then((res) => this.setState({weather: res}))
    }
    
    
      
      render(){
        this.renderWeatherCols()
        var {name,temp,wind,currentWeather,description,windspeed,pressure,humidity,gust,snow} = this.state.weather
      return(
      
      <div className="boxStyle" style={{backgroundColor: changeBackground(currentWeather)}}>
        <div className="bgIcon"></div>
          <label className="la">Get-your-location</label><div className="geoIcon" onClick={this.getLocation}></div>
            <div className="search">
              {/* <form onSubmit={this.onSubmit}> */}
                <input type="text" onChange={this.onChange} value={this.state.inputValue} placeholder={this.state.location} maxLength="20" style={{backgroundColor: changeBackground(currentWeather)}}/>
                <button type="submit" onClick={this.onSubmit}>search</button>
              {/* </form> */}
            </div>
          <div className="icon" style={{backgroundImage: changeImage(currentWeather)}}></div>
          <h1 className="title">{name}</h1>
          <i>Daily weather overview</i>
          <div className="dailyBlock">
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
            </div>

            {/* kompimerat resultat med hjälp av map() och en ny komponent*/}
            <i>Upcomming 5 days</i>
            <p>&darr;</p>
            <h1>{name}</h1>
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

  onChange = (event) => this.setState({location: event.target.value})

  onSubmit = () => {
    let {location} = this.state
    console.log('location', location)
    fetchWeather(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=224019f95493a66e58ed72c09393c01a`)
    .then((res) => this.setState({weather: res}))
    fetchWeekly(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&limit=5&appid=5aa1660165374b4199e3f8f06d3f3479`)
    .then ((res) => this.setState({weekly: res}))
  } 

  
  success = (pos) => {
    var crd = pos.coords
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
    console.warn(`ERROR(${err.code}): ${err.message}`)
  }
  
  getLocation = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.success, this.error, options)
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






export default Weather