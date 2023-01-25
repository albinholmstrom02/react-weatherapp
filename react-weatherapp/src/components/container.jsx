import React from "react";
import Descriptions from "./Descriptions";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "../services/weatherService";
import Forecast from "./Forecast";

var currentdate = new Date(); 
var datetime = currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear(); 

function Container() {

const [city, setCity] = useState("Stockholm");
const [weather, setWeather] = useState(null);
const [units] = useState("metric");

useEffect(() => {
  const fetchWeatherData = async () => {
    const data = await getFormattedWeatherData(city, units);
    setWeather(data);
  };
  fetchWeatherData();
}, [city]);

const enterKeyPressed = (e) => {
  if(e.keyCode == 13)
  {
    setCity(e.currentTarget.value)
    e.currentTarget.blur()
  }
}
return (
    weather && (
    <div className="container">
        <div className="section section__inputs">
            <input onKeyDown={enterKeyPressed} type="text" name="city" placeholder="Enter City..."></input>
            <h2>Weather App ⛅</h2>
        </div>
        <div className="section section__temperature">
        <div className="icon">
            <h3>{`${weather.name}, ${weather.country}, ${datetime}`}</h3>
            <img src={weather.iconURL}></img>
            <h3>{weather.description}</h3>
        </div>
        <div className="temperature">
            <h1>{`${weather.temp.toFixed()}°C`}</h1>
        </div>
        <Descriptions weather={weather} units={units}/>
        </div>
        <Forecast/>
    </div>
    )
)
}

export default Container;