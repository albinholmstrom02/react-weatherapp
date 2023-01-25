const API_KEY = '098fc63991af7bd81c3274899243e67c';

const makeIconURL = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`

const getFormattedWeatherData = async (city, units = 'metric') => {

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);
    
    const {
        weather, 
        main: {temp, temp_min, temp_max},
        sys:{country},
        name,
    } = data;

    const {description, icon} = weather[0];

    return {
        description, iconURL: makeIconURL(icon), temp, temp_min, temp_max, country, name
    }
};

const getFormattedForecastData = async (lat, lon, ) => {
    const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}.99&appid=${API_KEY}`
    
};


export {getFormattedWeatherData, getFormattedForecastData};