import "./App.scss";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import { WeatherProvide } from "./context/WeatherData";
import { GeoProvider } from "./context/GeolocationContext";
import Container from "./components/Container";

function App() {
  return (
    // * Aşağıda 2 Context ile Ana yapıyı sarmaladım.
    <ThemeProvider>
      <GeoProvider>
        <WeatherProvide>
          <Container />
        </WeatherProvide>
      </GeoProvider>
    </ThemeProvider>
  );
}

export default App;
