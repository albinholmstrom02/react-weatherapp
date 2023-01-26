import Bg from "./assets/hot.jpg";
import Input from "./components/InputDiv";
import Forecast from "./components/Forecast";

function App() {
  return (
    <div className="app" style={{ backgroundImage: `url(${Bg})`}}>
      <div className="overlay">
        <Input/>
      </div>
    </div>
  );
}

export default App;