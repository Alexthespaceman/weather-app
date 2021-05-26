import React from "react";
import image from "../images/weather-icon.jpeg";

function Logo(props) {
  return (
    <div className="logo">
      <img className="image1" src={image} alt="logo" />
    </div>
  );
}

export default Logo;
