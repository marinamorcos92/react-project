import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <form>
        <input type="search" placeholder="Search For a City" />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
      <h1>Stockholm</h1>
      <ul>
        <li> Friday 02:00</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" /> 6℃
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0% </li>
            <li>Humidity: 36%</li>
            <li>Wind: 4 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
