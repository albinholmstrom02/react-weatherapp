import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "../services/weatherService";

function Input() {
    const [city, setCity] = useState("Stockholm");
    const [weather, setWeather] = useState(null);

    useEffect(() => {
    const fetchWeatherData = async () => {
        const data = await getFormattedWeatherData(city);
        setWeather(data);
    };

    fetchWeatherData();
  }, [city]);

    const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
        setCity(e.currentTarget.value);
        e.currentTarget.blur();
    }
  };
  
    return (
        weather && 
        (
            <div className="container">
                <div className="section section__inputs">
                    <input onKeyDown={enterKeyPressed} type="text" name="city" placeholder="Enter a location..."/>
                </div>
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
}
export default Input;