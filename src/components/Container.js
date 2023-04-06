import React, { useContext, useEffect, useState } from "react";
import "../App.scss";
import Header from "./Header";
import CurrentWeather from "./CurrentWeather";
import WeatherList from "./WeatherList";
import ThemeContext from "../context/ThemeContext";
import WeatherData from "../context/WeatherData";
import GeoContext from "../context/GeolocationContext";
import Cities from "./Cities";
import turkishCities from "../turkishCities";
import Footer from "./Footer";

function Container() {
  // * Tüm componentleri container altında topladım. App.js'de ThemeContext ve WeatherData ile çevrelemek için bu şekilde yaptım.

  const { theme } = useContext(ThemeContext);
  const { locationCity } = useContext(GeoContext);
  const { setCity } = useContext(WeatherData);
  const [search, setSearch] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    setCity(locationCity);
  }, [setCity, locationCity]);

  const searchLocation = (e) => {
    e.preventDefault();
    setCity(search);
    setSearch("");
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    const filteredCities = turkishCities.filter((city) =>
      city.toLocaleLowerCase().startsWith(e.target.value.toLocaleLowerCase())
    );
    setFilteredCities(filteredCities);
  };

  let popup = search === "" ? false : true;

  return (
    <div className={`container ${theme === "dark" ? theme : ""}`}>
      <Header />
      <div className="app">
        <form onSubmit={searchLocation}>
          <input
            value={search}
            onChange={handleChange}
            placeholder="Write a country, city or county"
          />
        </form>
        {popup && (
          <ul className="popup">
            {filteredCities.map((city) => {
              return (
                <Cities setCity={setCity} setSearch={setSearch} name={city} />
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
        <Footer />
      </div>
    </div>
  );
}

export default Container;
