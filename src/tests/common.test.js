import { kelvinToCelcius, changeBackground, changeImage } from '../common'
import * as Const from '../consts'



jest.unmock('../common')

let weatherArr = [Const.RAIN]

describe('should return correct data', () => {
    test('kelvinToCelcius', () => {
        expect(kelvinToCelcius(0)).toEqual('-273.15')
      })
    test('changeImage', () => {
        weatherArr.map(weather => {
            expect(changeImage(weather)).toBeDefined()
        })
    })
    test('changeImage', () => {
        let error = [] 
        weatherArr.map((weather, index) => {
            let result = changeImage(weather)
            if (!result) error.push({weather, position: index})
            if (error.length !== 0) console.log(error)
            expect(error.length === 0).toEqual(true)
        })
    })
})

/* describe('should return correct colors', () => {
    test('changeBackground', () => {
        let weatherArr = [Const]
        console.log(weatherArr)
        expect(changeBackground(weatherArr[0].RAIN)).toEqual('grey')
    })
})

*/