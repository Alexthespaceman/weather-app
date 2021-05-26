import React, { useEffect, useState } from "react";
import WebFont from "webfontloader";
import * as api from "../api";

function WeatherStation(props) {
  const [temp, setTemp] = useState("");
  const [wind, setWind] = useState("");
  const [description, setDescription] = useState("");
  const [day1, setDay1] = useState("");
  const [day2, setDay2] = useState("");
  const [day3, setDay3] = useState("");

  useEffect(() => {
    api.getManchesterWeather().then((data) => {
      console.log(data);
      setTemp(data.temperature);
      setWind(data.wind);
      setDescription(data.description);
      setDay1(data.forecast[0].day);
      setDay2(data.forecast[1].day);
      setDay3(data.forecast[2].day);
    });
  });

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Pattaya"],
      },
    });
  }, []);
  return (
    <div className="weather-station">
      <div className="font-loader-two">Your local weather</div>
      <div className="station">
        <div classNam="temp">{temp}</div>
        <div classNam="wind">{wind}</div>
        <div classNam="description">{description}</div>
        <div classNam="forecast">{day1}</div>
        <div classNam="forecast">{day2}</div>
        <div classNam="forecast">{day3}</div>
      </div>
    </div>
  );
}

export default WeatherStation;
