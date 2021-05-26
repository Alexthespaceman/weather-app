import React, { useEffect } from "react";
import WebFont from "webfontloader";

function WeatherStation(props) {
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
    </div>
  );
}

export default WeatherStation;
