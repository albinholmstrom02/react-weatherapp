import Bg from "./assets/hot.jpg";
import { useState } from "react";
import Input from "./components/InputDiv";
import Forecast from "./components/Forecast";

function App() {
    const [city, setCity] = useState("Stockholm");
    const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
        setCity(e.currentTarget.value);
        e.currentTarget.blur();
    }
  };

  return (
    <div className="app" style={{ backgroundImage: `url(${Bg})`}}>
      <div className="overlay">
        <input onKeyDown={enterKeyPressed} type="text" name="city" placeholder="Enter a location..."/>
        <Input city={city}/>
        <Forecast city={city}/>
      </div>
    </div>
  );
}

export default App;