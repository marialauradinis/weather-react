import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
  return (
    <div>
      <div className="container">
        <form className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col .d-flex">
            <div className="city">London</div>
            <div className="weather-condition">
              Wind: 12km/h
              <br />
              Humidity: 60%
            </div>
          </div>
          <div className="col .d-flex mt-3">
            <div className="day-time">Wed 14:25</div>
          </div>
        </div>
        <div className="row">
          <div className="col .d-flex temperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Sunny"
              className="float-left"
            />
            <span>19°C</span>
          </div>
        </div>
      </div>
      <div className="small">
        <a href="https://github.com/marialauradinis" target="_blank">
          Open-source code
        </a>
        , by Laura Dinis
      </div>
    </div>
  );
}
