import React from "react";
import { useEffect, useState } from "react";
import './forecast.css';
import { getFormattedForecastData } from "../services/weatherService";

function Forecast({city})
{
    const [weather, setWeather] = useState(null);

    useEffect(() => {
    const fetchWeatherData = async () => {
        const data = await getFormattedForecastData({city});
        setWeather(data);
    };

    fetchWeatherData();
    });

    return (
        weather && 
        (
            <div className="container">
                <div className="section section__temperature">
                    <div className="icon">
                        <h3>{`${weather.name}, ${weather.country}`}</h3>
                        <img src={weather.iconURL} alt="weatherIcon"/>
                        <h3>{weather.description}</h3>
                    </div>
                    <div className="temperature">
                        <h1>{`${weather.temp.toFixed()} °C`}</h1>
                    </div>
                    <div className="temperature">
                        <h2>{`⬇️${weather.temp_min.toFixed()} °C`}</h2>
                    </div>
                    <div className="temperature">
                        <h2>{`⬆️${weather.temp_max.toFixed()} °C`}</h2>
                    </div>
                </div>
            </div>
        )   
    )


    return (
        <div>
            <h1>aa</h1>
        </div>
    )
}

export default Forecast;