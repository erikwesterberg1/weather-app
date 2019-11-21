import Cloud from './img/cloud.png'
import Sun from './img/sun.png'
import Snow from './img/snowy.png'
import Rain from './img/raining.png'
import Drizzle from './img/drizzle.png'
import Mist from './img/mist.png'
import Fog from './img/fog.png'


export function kelvinToCelcius (value) {
  let celcius = value - 273.15
  return celcius.toFixed(0)
}


export let changeImage =  (currentWeather) => {
   
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

 export let changeBackground =  (currentWeather) => {
    
    //if (!currentWeather) return 'salmon'
    
    switch (currentWeather) {
      case 'Clouds': return 'lightgrey'
      case 'Clear': return 'lightblue'
      case 'Snow': return 'seashell'
      case 'Rain': return 'grey'
      case 'Drizzle': return 'seashellgreen'
      case 'Mist': return 'thistle'
      case 'Fog': return 'chocolate'
      default: return 'yellow'
    }
    
}

export let snowyBorder = (currentWeather) => {
    
    if (!currentWeather) return 'black'

    switch (currentWeather) {
        case 'Snow': return '2px dotted red'
        case 'Clouds': return '.5px solid white'
        case 'Clear': return '.5px solid yellow'
        case 'Rain': return '.5px solid black'
        case 'Drizzle': return '.5px solid black'
        case 'Mist': return '.5px dashed purple'
        case 'Fog': return '.5px solid chocolate'
        default: return 'black'
    }
}