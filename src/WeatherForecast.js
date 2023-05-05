import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  function handleResponse(response) {
    setLoaded(true);
    console.log(new Date().getDay());
    setForecast(response.data.daily);
  }
  function day(dt) {
    let date = new Date(dt * 1000);
    return days[date.getDay()];
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">{day(forecast[1].time)}</div>{" "}
            <img width={50} src={forecast[1].condition.icon_url}></img>
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">
                {Math.round(forecast[1].temperature.maximum)}°
              </span>
              <span className="WeatherForecast-temperature-min">
                {Math.round(forecast[1].temperature.minimum)}°
              </span>
            </div>
          </div>
          <div className="col">
            <div className="WeatherForecast-day">{day(forecast[2].time)}</div>
            <img width={50} src={forecast[2].condition.icon_url}></img>
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">
                {Math.round(forecast[2].temperature.maximum)}°
              </span>
              <span className="WeatherForecast-temperature-min">
                {Math.round(forecast[2].temperature.minimum)}°
              </span>
            </div>
          </div>
          <div className="col">
            <div className="WeatherForecast-day">{day(forecast[3].time)}</div>
            <img width={50} src={forecast[3].condition.icon_url}></img>
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">
                {Math.round(forecast[3].temperature.maximum)}°
              </span>
              <span className="WeatherForecast-temperature-min">
                {Math.round(forecast[3].temperature.minimum)}°
              </span>
            </div>
          </div>
          <div className="col">
            <div className="WeatherForecast-day">{day(forecast[4].time)}</div>
            <img width={50} src={forecast[4].condition.icon_url}></img>
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">
                {Math.round(forecast[4].temperature.maximum)}°
              </span>
              <span className="WeatherForecast-temperature-min">
                {Math.round(forecast[4].temperature.minimum)}°
              </span>
            </div>
          </div>
          <div className="col">
            <div className="WeatherForecast-day">{day(forecast[5].time)}</div>
            <img width={50} src={forecast[5].condition.icon_url}></img>
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">
                {Math.round(forecast[5].temperature.maximum)}°
              </span>
              <span className="WeatherForecast-temperature-min">
                {Math.round(forecast[5].temperature.minimum)}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "4af911bf6cc0a30d4ecc3adao79t646b";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;

    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  return null;
}
