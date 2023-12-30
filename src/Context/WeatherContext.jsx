import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");
  const [windKm, setWindKm] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.weatherapi.com/v1/current.json?key=9af7653490954c21992103625232812&q=Tbilisi"
      )
      .then((response) => {
        setLocation(response.data.location.name);
        setImageURL(response.data.current.condition.icon);
        setWeather(response.data.current.condition.text);
        setTemp(response.data.current.temp_c);
        setWindKm(response.data.current.wind_kph);
      })
      .catch((error) => {
        console.error("Weather API Error:", error);
      });
  }, []);

  const contextValue = {
    location,
    imageURL,
    weather,
    temp,
    windKm,
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};
