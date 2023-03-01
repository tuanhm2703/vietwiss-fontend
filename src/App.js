import logo from "./assets/images/logo.png";
import "./App.css";
import "./style/main.css";
import leftSliderImg from "./assets/images/left-slider.png";
import MenuSlider from "./components/MenuSlider";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <MenuSlider></MenuSlider>
    </div>
  );
}

export default App;
