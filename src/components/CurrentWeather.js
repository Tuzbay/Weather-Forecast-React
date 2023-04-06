import React, { useContext } from "react";
import "../App.scss";
import WeatherData from "../context/WeatherData";

function CurrentWeather() {
  const { currentInfo } = useContext(WeatherData);

  // * WeatherData Contextten aldığım verileri burada kullanıyorum. Anlık hava durumunu gösterdiğim kısımın kodları aşağıdadır.
  return (
    <div className="currentWeather">
      <div className="left">
        <h1>{currentInfo?.name}</h1>
        <p className="temp">
          <span>{currentInfo?.main?.temp.toFixed(0)}°C</span>
        </p>
        <p className="extra">
          <span>Humidity: {currentInfo?.main?.humidity}%</span>
          <span> - Pressure: {currentInfo?.main?.pressure} hPa</span>
        </p>
        <p className="extra">
          Wind Speed: {currentInfo?.wind?.speed.toFixed(0)} km/h
        </p>
      </div>
      <div className="right">
        <img
          src={`https://openweathermap.org/img/w/${currentInfo?.weather[0].icon}.png`}
          alt=""
        />
        <p className="description">{currentInfo?.weather[0].main}</p>
      </div>
    </div>
  );
}

export default CurrentWeather;
