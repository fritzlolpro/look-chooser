import getPosition from 'js/weatherApi.js'
let chooseClothes = (weather) => {
    let temp = weather.avrTemp
    let wind = weather.wind
    let clouds = weather.cloudsPersent
    let skyStatus = weather.clouds

    let outfit = {
        hat: "none",
        underwear: "none",
        shirt: 'none',
        sweater: 'none',
        coat: 'none',
        extraCoat: 'none',
        legs: 'none',
        leggins: 'none',
        foot: 'none'
    }

    if (temp >= 20) {
        outfit.hat = 'cap'
        outfit.underwear = 't-shirt'
        outfit.shirt = 'none'
        outfit.sweater = 'none'
        outfit.coat = 'none'
        outfit.leggins = 'none'
        outfit.foot = 'sneakers'
        outfit.legs = 'shorts'

    } else if (19 > temp && temp >= 15) {
        console.log('sdfafaf')
        outfit.hat = 'none'
        outfit.underwear = 't-shirt'
        outfit.shirt = 'none'
        outfit.sweater = 'none'
        outfit.coat = 'none'
        outfit.leggins = 'none'
        outfit.foot = 'sneakers'
        outfit.legs = 'shorts'

    } else if (14 >= temp && temp >= 10) {
        outfit.hat = 'none'
        outfit.underwear = 't-shirt'
        outfit.shirt = 'flannelShirt'
        outfit.sweater = 'none'
        outfit.coat = 'none'
        outfit.leggins = 'none'
        outfit.foot = 'sneakers'
        outfit.legs = 'jeans'
        if (wind > 20 || clouds > 60 || skyStatus != 'clear sky') {
            outfit.coat = 'lightParka'
        }


    } else if (9 >= temp && temp >= 5) {
        outfit.hat = 'cap'
        outfit.underwear = 't-shirt'
        outfit.shirt = 'flannelShirt'
        outfit.sweater = 'none'
        outfit.coat = 'lightParka'
        outfit.leggins = 'none'
        outfit.foot = 'sneakers'
        outfit.legs = 'jeans'

    } else if (-2 < temp && temp <= 0) {
        outfit.hat = 'pidorka'
        outfit.underwear = 't-shirt'
        outfit.shirt = 'flannelShirt'
        outfit.sweater = 'none'
        outfit.coat = 'warmParka'
        outfit.leggins = 'none'
        outfit.foot = 'sneakers'
        outfit.legs = 'jeans'

    } else if (-5 < temp && temp <= -3) {
        outfit.hat = 'pidorka'
        outfit.underwear = 't-shirt'
        outfit.shirt = 'flannelShirt'
        outfit.sweater = 'none'
        outfit.coat = 'warmParka'
        outfit.leggins = 'none'
        outfit.foot = 'sorel'
        outfit.legs = 'jeans'

    } else if (-9 < temp && temp <= -6) {
        outfit.hat = 'theShapka'
        outfit.underwear = 'logsleeve'
        outfit.shirt = 'flannelShirt'
        outfit.sweater = 'none'
        outfit.coat = 'warmParka'
        outfit.leggins = 'thermoleggins'
        outfit.foot = 'sorel'
        outfit.legs = 'jeans'

    } else if (temp <= -10) {
        outfit.hat = 'theShapka'
        outfit.underwear = 'logsleeve'
        outfit.shirt = 'flannelShirt'
        outfit.sweater = 'sweater'
        outfit.coat = 'warmParka'
        outfit.leggins = 'thermoleggins'
        outfit.foot = 'sorel'
        outfit.legs = 'jeans'

    }
    if (skyStatus.includes('rain')){
        outfit.hat = 'cap'
    }
    return outfit
}
let look = getPosition
    .then((weather) => {
        let look = chooseClothes(weather)
        console.log(look)
        return (look)

    })

export default look