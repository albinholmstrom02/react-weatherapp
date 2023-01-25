import Bg from "./assets/hot.jpg";
import Container from "./components/container";

function App() {
  return (
    <div className="app" style={{backgroundImage: `url(${Bg})`}}>
      <div className="overlay">
        {
        <Container/>
        }
      </div>
    </div>
  );
}

export default App;
