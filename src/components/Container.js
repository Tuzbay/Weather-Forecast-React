import React, { useContext, useState } from "react";
import "../App.scss";
import Header from "./Header";
import CurrentWeather from "./CurrentWeather";
import WeatherList from "./WeatherList";
import ThemeContext from "../context/ThemeContext";
import WeatherData from "../context/WeatherData";
import Cities from "./Cities";
import turkishCities from "../turkishCities";

function Container() {
  // * Tüm componentleri container altında topladım. App.js'de ThemeContext ve WeatherData ile çevrelemek için bu şekilde yaptım.

  const { theme } = useContext(ThemeContext);
  const { setCity } = useContext(WeatherData);
  const [search, setSearch] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  // const [popupOpen, setPopupOpen] = useState(false);

  const searchLocation = (e) => {
    e.preventDefault();
    setCity(search);
    setSearch("");
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    const filteredCities = turkishCities.filter((city) =>
      city.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    );
    setFilteredCities(filteredCities);
  };

  let popup = search === "" ? false : true;

  return (
    <div className={`container ${theme === "dark" ? theme : ""}`}>
      <Header />
      <div className="app">
        <form onSubmit={searchLocation}>
          <input list="data" value={search} onChange={handleChange} />
        </form>
        {popup && (
          <ul className="popup">
            {filteredCities.map((city) => {
              return (
                <Cities
                  setCity={setCity}
                  setSearch={setSearch}
                  name={city}
                  popup={popup}
                />
              );
            })}
          </ul>
        )}

        <h2
          style={{ textAlign: "center", marginTop: "0", marginBottom: "14px" }}
        >
          Current
        </h2>
        <CurrentWeather />
        <WeatherList />
      </div>
    </div>
  );
}

export default Container;
