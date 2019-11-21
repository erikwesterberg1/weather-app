import moment from 'moment'
import { kelvinToCelcius } from './common'



//------------------------------------------------------------------------------------------

export let fetchWeather = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {

                const obj = {
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
                  
                  return resolve(obj)

            })
            .catch(error => reject(console.log(error)))
    })
}

//-----------------------------------------------------------------------------------------

export let fetchWeekly = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then((response) => {
            return response.json()
        })
        .then(data => {
            const daysList = data.list.filter(item => moment(item.dt_txt).diff(moment(), 'days') !== 0)
        .map(item => {
          const newObj = {
            temp: kelvinToCelcius(item.main.temp),
            description: item.weather[0].description,
            main: item.weather[0].main,
            date: item.dt_txt
          }
          return newObj
        })
        const weeklyObj = {
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
          return resolve(weeklyObj)
        })
        .catch(error => reject(console.log(error)))
    })
}

//---------------------------------------------------------------------------------------------------

export let fetchUser = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(data => {
        console.log(data)
        const name = data.results.map(item => item.name)
        const location = data.results.map(item => item.location)
        const picture = data.results.map(item => item.picture)
        console.log(location)
        const userObj = {
            picture: picture[0].large,
            name: name[0].first,
            lastName: name[0].last,
            country: location[0].country,
            city: location[0].city
        }
        return resolve(userObj)
    })
    .catch(error => reject(console.log(error)))
  })
}