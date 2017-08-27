import getPosition from 'js/navigator.js'
import conditionCodes from 'js/conditionCodes.js'
let getWeather = function(url) {
    return new Promise((resolve, reject) => {
        $.getJSON(url).done(function(json) {
            resolve(json);
        })
    })
}
let buildWeather = function(json) {
    let weather = {
        code: '',
        tempratureMin: "",
        tempratureMax: "",
        avrTemp: "",
        clouds: "",
        cloudsPersent: "",
        wind: "",
        humidity: "",
        city: "",
        icon: "",
        time: "",
        rain: "",
        snow: "",
        description:""
    }
    weather.city = json.city.name;
    weather.tempratureMax = json.list[1].main.temp_max - 273.15;
    weather.tempratureMin = json.list[1].main.temp_min - 273.15;
    weather.avrTemp = Math.round((weather.tempratureMax + weather.tempratureMin) / 2);
    weather.humidity = json.list[1].main.humidity;
    weather.clouds = json.list[1].weather[0].description;
    weather.time = json.list[1].dt_txt;
    weather.cloudsPersent = json.list[1].clouds.all;
    weather.wind = Math.round(json.list[1].wind.speed * 3.6);
    weather.icon = json.list[1].weather[0].icon;
    weather.rain = json.list[0].rain;
    weather.snow = json.list[0].snow;
    weather.code = json.cod;
    weather.description = conditionCodes[json.cod];
    return weather;
}
export default getPosition
    .then((position) => {
        let weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&APPID=" + "f937eb1f1cdd5f16dccbc0fe7e956e0f";
        return weatherUrl;
    }).then((weatherUrl) => {
        let json = getWeather(weatherUrl)
        console.log(json)
        return json;
    })
    .then((json) => {
        let weather = buildWeather(json)
        return weather
    })