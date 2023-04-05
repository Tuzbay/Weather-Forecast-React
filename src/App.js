import "./App.scss";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import { WeatherProvide } from "./context/WeatherData";
import Container from "./components/Container";

function App() {
  return (
    // * Aşağıda 2 Context ile Ana yapıyı sarmaladım.
    <ThemeProvider>
      <WeatherProvide>
        <Container />
      </WeatherProvide>
    </ThemeProvider>
  );
}

export default App;
