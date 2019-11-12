import React from 'react';
import './App.css';

export function kelvinToCelcius (value) {
  if (!value) return null
  if (value !== Number(value)) value = Number(value)
  value = parseFloat(value)
  let celcius = value - 273.15
  return celcius.toFixed(1)
}


  /*const changeColor =  () => {
  let cw = this.state.currentWeather
  if(cw === 'Snow'){
    this.setState({backgroundcolor: 'white'})
  } 
}*/

class Weather extends React.Component {
  constructor(){
  super();
  this.state = {
    weather: {},
    isloading: true,
    backgroundcolor: '',
    name: '',
    temp:'',
    wind:'',
    currentWeather:'',
    description:'',
    windspeed:'',
    pressure:'',
    humidity:'',
    gust:''

  }
  
}
  componentDidMount(){
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Åre&appid=224019f95493a66e58ed72c09393c01a')
      .then(response => {
      return response.json();
      }).then(data => {
        
        let obj = {
          name: data.name,
          temp: kelvinToCelcius(data.main.temp),
          wind: data.wind.deg,
          currentWeather: data.weather[0].main,
          description: data.weather[0].description,
          windspeed: data.wind.speed,
          pressure: data.main.pressure,
          humidity: data.main.humidity,
          gust: data.wind.gust
        }
      
        this.setState({
          backgroundcolor: this.state.backgroundcolor,
          weather: obj, 
          name: obj.name, 
          currentWeather: obj.currentWeather,
          temp: obj.temp,
          wind: obj.wind,
          description: obj.description,
          windspeed: obj.windspeed,
          pressure: obj.pressure,
          humidity: obj.humidity,
          gust: obj.gust,
          isloading: false})
      })
      
    }

    
      
      render(){
        let {backgroundcolor,name,temp,wind,currentWeather,description,windspeed,pressure,humidity,gust} = this.state
        //this.changeColor();
        //let {isloading, weather} = this.state
       // if (isloading) return <h1>Loading...</h1>
    
    //let currentWeather = this.state.weather.weather[0].main
    //console.log(currentWeather)

    return(
      
      <div className="boxStyle" style={{backgroundColor: backgroundcolor}}>
          <label>Location:</label><h1>{name}</h1>
            <div className="divStyle" name="row1">
              <label>Temperature:</label><h3>{temp}</h3>
              <label>Main-weather:</label><h3>{currentWeather}</h3>
              <label>Description:</label><h3>{description}</h3>
            </div>
            <div className="divStyle" name="row2">
              <label>Wind-temperature:</label><h3>{wind}</h3>
              <label>Wind-speed:</label><h3>{windspeed}</h3>
              <label>Wind-gust:</label><h3>{gust}</h3>
            </div>
            <div className="divStyle" name="row3">
              <label>Snowfall-next-3h:</label><h3>{}</h3>
              <label>Pressure:</label><h3>{pressure}</h3>
              <label>Humidity:</label><h3>{humidity}</h3>
            </div>
      </div>
    )
  }
 

}


export default Weather;