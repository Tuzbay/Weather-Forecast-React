import React, { useContext } from "react";
import SingleWeather from "./SingleWeather";
import "../App.scss";
import WeatherData from "../context/WeatherData";

function WeatherList() {
  const { forecastInfo } = useContext(WeatherData);
  return (
    <div className="weather-list">
      <h2 style={{ textAlign: "center", margin: "0px" }}>Forecast</h2>

      <div className="wrapper">
        {/* Aşağıdaki satırda SingleWeather componentini çekiyorum.  */}

        {forecastInfo.map((item, index) => {
          return <SingleWeather key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default WeatherList;
