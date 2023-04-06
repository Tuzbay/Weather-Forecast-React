import axios from "axios";
import { createContext, useEffect, useState } from "react";

const GeoContext = createContext();

export const GeoProvider = ({ children }) => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setlongitude] = useState("");
  const [locationCity, setLocationCity] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let user_latitude = position.coords.latitude.toFixed(2);
          let user_longitude = position.coords.longitude.toFixed(2);
          setLatitude(user_latitude);
          setlongitude(user_longitude);
        },
        () => {
          alert(
            "To see the weather in your location, please allow us to see your location."
          );
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, [locationCity]);

  useEffect(() => {
    async function fetchWeatherData() {
      if (latitude && longitude) {
        try {
          const { data } = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}`
          );
          const city = data.name;
          setLocationCity(city);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      }
    }
    fetchWeatherData();
  }, [latitude, longitude, locationCity]);

  const values = {
    locationCity,
  };

  return <GeoContext.Provider value={values}>{children}</GeoContext.Provider>;
};

export default GeoContext;
