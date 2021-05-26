import React, { useEffect, useState } from "react";
import WebFont from "webfontloader";
import * as api from "../api";
import IconFunction from "../functions/IconFunction";
import weatherDescription from "../functions/tempFunction";

function WeatherStation(props) {
  const [temp, setTemp] = useState("");
  const [wind, setWind] = useState("");
  const [description, setDescription] = useState("");
  const [day1, setDay1] = useState("");
  const [day2, setDay2] = useState("");
  const [day3, setDay3] = useState("");
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
      setDay1(data.forecast[0].day);
      setDay2(data.forecast[1].day);
      setDay3(data.forecast[2].day);
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

  const temperature = parseInt(temp.slice(1));

  return (
    <div className="weather-station">
      <div className="font-loader-two">Your local weather</div>
      <div className="station">
        <div className="weather-icon">{IconFunction(description)}</div>
        <div className="primary-weather">
          <div classNam="temp">
            {weatherDescription(temperature, temp.slice(1, 6))}
          </div>
          <div classNam="wind">Wind Speed is {wind} </div>
          <div classNam="description"> with {description}</div>
        </div>

        <div className="three-day-forecast">
          <div classNam="forecast">
            {day1} {day1temp}
            {day1wind}
          </div>
          <div classNam="forecast">
            {day2}
            {day2temp}
            {day2wind}
          </div>
          <div classNam="forecast">
            {day3}
            {day3temp}
            {day3wind}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherStation;
