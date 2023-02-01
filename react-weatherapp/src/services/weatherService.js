import React, {useState} from 'react';
import Form from '../components/Form';
import WeatherInfo from '../components/WeatherInfo';

//API 098fc63991af7bd81c3274899243e67c

const WeatherService = () => {

    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=098fc63991af7bd81c3274899243e67c&units=metric";
    let cityUrl = "&q=";

    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=098fc63991af7bd81c3274899243e67c&units=metric"

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("Stockholm");

    const getLocation = async(loc) => {
        setLoading(true);
        setLocation(loc);

        //Weather

        urlWeather = urlWeather + cityUrl + loc;

        await fetch(urlWeather).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();
        }).then((weatherData) =>{
            console.log(weatherData);
            setWeather(weatherData);
        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });

        //Forecast

        urlForecast = urlForecast + cityUrl + loc;

        await fetch(urlForecast).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();
        }).then((forecastData) =>{
            console.log(forecastData);
            setForecast(forecastData);

            setLoading(false);
            setShow(true);

        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });

        
    }


    return(
        <React.Fragment>
            <Form
                newLocation = {getLocation}
            />
            <WeatherInfo
                showData = {show}
                loadingData = {loading}
                weather = {weather}
                forecast = {forecast}
            />
        </React.Fragment>
    );
}

export default WeatherService;