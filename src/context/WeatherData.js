import axios from "axios";
import { createContext, useEffect, useState } from "react";

const WeatherData = createContext();

export const WeatherProvide = ({ children }) => {
  const [currentInfo, setCurrentInfo] = useState(null);
  const [forecastInfo, setForecastInfo] = useState([]);
  const [city, setCity] = useState("Istanbul");
  // * Anlık hava durumu verisini aşağıdaki hook ile çekiyorum.
  useEffect(() => {
    async function getCurrentWeather() {
      try {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
        );
        setCurrentInfo(data);
      } catch (error) {
        console.error(error);
      }
    }
    getCurrentWeather();
  }, [city]);

  // * Günlük hava durumu verisini aşağıdaki hook ile çekiyorum.
  useEffect(() => {
    async function getForecastData() {
      try {
        const {
          data: { list },
        } = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
        );
        const filteredList = list.filter((item) =>
          item.dt_txt.includes("12:00:00")
        );
        setForecastInfo(filteredList);
      } catch (error) {
        console.error(error);
      }
    }
    getForecastData();
  }, [city]);

  // * Burada diğer componentlerde kullanacağım değişkenleri tutuyorum.
  const values = {
    currentInfo,
    setCurrentInfo,
    city,
    setCity,
    forecastInfo,
    setForecastInfo,
  };
  return <WeatherData.Provider value={values}>{children}</WeatherData.Provider>;
};

export default WeatherData;
