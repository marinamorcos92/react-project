import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import DateFormat from "./DateFormat";
import WeatherForecast from "./WeatherForecast.js";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  let [forecast, setForecast] = useState(null);
  const [foreCastLoaded, setForecastLoaded] = useState(false);
  const [stateCity, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsuis");
  function handleResponse(response) {
    setReady(true);
    setWeatherData({
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`,
      coordinates: response.data.coord,
    });

    let apiKey = "4af911bf6cc0a30d4ecc3adao79t646b";
    let longitude = response.data.coord.lon;
    let latitude = response.data.coord.lat;

    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
    axios.get(apiUrl).then(handleForeCastResponse);
  }
  function handleForeCastResponse(response) {
    setForecastLoaded(true);
    setForecast(response.data.daily);
  }

  function search() {
    const apiKey = "a95c2c6739994ba4903e007ee817e7d1";
    let city = stateCity;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function showFahrenheit(event) {
    event.preventDefault();
    if (unit === "celsuis") {
      setWeatherData({
        date: weatherData.date,
        temperature: (weatherData.temperature * 9) / 5 + 32,
        humidity: weatherData.humidity,
        wind: weatherData.wind,
        city: weatherData.city,
        description: weatherData.description,
        iconUrl: weatherData.iconUrl,
      });
      setUnit("fahrenheit");
    }
  }
  function showCelsuis(event) {
    event.preventDefault();

    if (unit === "fahrenheit") {
      setWeatherData({
        date: weatherData.date,
        temperature: (weatherData.temperature - 32) * (5 / 9),
        humidity: weatherData.humidity,
        wind: weatherData.wind,
        city: weatherData.city,
        description: weatherData.description,
        iconUrl: weatherData.iconUrl,
      });
      setUnit("celsuis");
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (ready) {
    return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Search For a City"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-4">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary  w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            {" "}
            <DateFormat date={weatherData.date} />
          </li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.iconUrl} alt=""></img>
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">
              <a href={unit === "fahrenheit" ? "#" : ""} onClick={showCelsuis}>
                °C
              </a>
              |
              <a href={unit === "celsuis" ? "#" : ""} onClick={showFahrenheit}>
                °F
              </a>
            </span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
        {foreCastLoaded ? <WeatherForecast forecast={forecast} /> : <></>}
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
