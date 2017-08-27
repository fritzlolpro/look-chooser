import getPosition from 'js/weatherApi.js'
import picLinks from 'js/clothesPicChooser.js'
getPosition
    .then((weather) => {
        let numbersOutput = `<span>Average Temp: ${weather.avrTemp}</span><br>
        <span>wind speed: ${weather.wind} km/h</span><br>
        <span>humidity: ${weather.humidity}%</span><br>
         `
        let conditionsOutput = `<span>sky condition: ${weather.clouds}</span><br>
        <span>clouds amount: ${weather.cloudsPersent}%</span> <br>
        <span>very actual icon:</span> <img src="https://openweathermap.org/img/w/${weather.icon}.png"> `
        let locationOutput = `<span>you are here: ${weather.city}</span><br>
        <span>forecast time: ${weather.time}</span>`
        $('#numbers').html(numbersOutput)
        $('#conditions').html(conditionsOutput)
        $('#location').html(locationOutput)
    })

picLinks
    .then((picLinks) => {
        console.log(picLinks)
        let clothesHtml=''
        Object.keys(picLinks)
            .forEach((e) => {
            if (picLinks[e]!='none.png'){
                clothesHtml+=`<div class='${e}'><img src='${picLinks[e]}'></div>`
            }

            console.log( clothesHtml)
        }, this);
        clothesHtml+='<span>← heres your look</span>'
        $('#clothes').html(clothesHtml)
    })
export default {}