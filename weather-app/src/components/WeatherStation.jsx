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

  const temperature = parseInt(temp.slice(0, 2));
  var tomorrow = new Date();
  const hello = new Date(tomorrow);
  console.log(hello);

  return (
    <div className="weather-station">
      <div className="font-loader-two">Your local weather</div>
      <div className="station">
        {ImageFuction(description)}
        <div className="weather-icon">{IconFunction(description)}</div>
        <div className="primary-weather">
          <div className="temp">
            {weatherDescription(temperature, temp.slice(0, 6))}
          </div>
          <div className="wind">
            Wind Speed is {wind} {console.log(temperature)}{" "}
          </div>
          <div className="description"> with {description}</div>
        </div>

        <div className="three-day-forecast">
          <div className="forecast">
            Tomorrow's forecast {day1temp}
            {day1wind}
          </div>
          <div className="forecast">
            {day2}
            {day2temp}
            {day2wind}
          </div>
          <div className="forecast">
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
