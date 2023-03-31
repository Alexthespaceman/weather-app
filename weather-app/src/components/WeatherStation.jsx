import React, { useEffect, useState } from "react";
import WebFont from "webfontloader";
import * as api from "../api";
import IconFunction from "../functions/IconFunction";
import ImageFuction from "../functions/ImageFuction";
import weatherDescription from "../functions/tempFunction";

function WeatherStation(props) {
  const [temp, setTemp] = useState("");
  const [wind, setWind] = useState("");
  const [description, setDescription] = useState("");
  const [day1temp, setDay1temp] = useState("");
  const [day2temp, setDay2temp] = useState("");
  const [day3temp, setDay3temp] = useState("");
  const [day1wind, setDay1wind] = useState("");
  const [day2wind, setDay2wind] = useState("");
  const [day3wind, setDay3wind] = useState("");

  useEffect(() => {
    api.getManchesterWeather().then((data) => {
      console.log(data);
      setTemp(data.temperature);
      setWind(data.wind);
      setDescription(data.description);
      setDay1temp(data.forecast[0].temperature);
      setDay2temp(data.forecast[1].temperature);
      setDay3temp(data.forecast[2].temperature);
      setDay1wind(data.forecast[0].wind);
      setDay2wind(data.forecast[1].wind);
      setDay3wind(data.forecast[2].wind);
    });
  });

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Pattaya"],
      },
    });
  }, []);

  const temperature = parseInt(temp.slice(0, 3));

  const today = new Date();
  const tomorrow = new Date(today);
  const tomorrowsDate = new Date(tomorrow.setDate(tomorrow.getDate() + 1));

  return (
    <div className="weather-station">
      <div className="font-loader-two">The local weather in Manchester</div>
      <div className="station">
        {ImageFuction(description)}
        <div className="weather-icon">{IconFunction(description)}</div>
        <div className="primary-weather">
          <div className="temp">
            {weatherDescription(temperature, temp.slice(0, 6))}
          </div>
          <div className="wind">Wind Speed is {wind} </div>
          <div className="description"> and {description}</div>
        </div>

        <div className="three-day-forecast1">
          <div className="forecast">
            Tomorrow's forecast has highs of {day1temp} and wind speeds of
            {day1wind}
          </div>
        </div>

        {/* <div>
         <div className="forecast">
            {tomorrowsDate.day}
            {day2temp}
            {day2wind}
          </div>
          <div className="forecast">
            {day3}
            {day3temp}
            {day3wind}
          </div>  */}
      </div>
      {/* </div> */}
    </div>
  );
}

export default WeatherStation;
