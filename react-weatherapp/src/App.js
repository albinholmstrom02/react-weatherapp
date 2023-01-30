import './assets/css/App.css';
import NavBar from './components/NavBar';
import WeatherService from './services/weatherService';

function App() {
  return (
    <div className="App">

      <NavBar />
      <WeatherService />

    </div>
  );
}

export default App;
