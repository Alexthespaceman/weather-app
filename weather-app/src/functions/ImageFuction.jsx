import React from "react";
import sun from "../images/blue-sku.jpeg";
import cloudy from "../images/cloudy.jpeg";
import lightning from "../images/lightning.jpeg";
import rain from "../images/rain.jpeg";
import snow from "../images/snow.jpeg";

function ImageFuction(description) {
  if (description.includes("sun")) {
    return <img src={sun} className="sun-img" />;
  }
  if (description.includes("rain")) {
    return <img src={rain} className="rain-img" />;
  }
  if (description.includes("snow")) {
    return <img src={snow} className="snow-img" />;
  }
  if (description.includes("cloud")) {
    return <img src={cloudy} className="cloud-img" />;
  }
  if (description.includes("wind")) {
    return <img src={lightning} className="wind-img" />;
  }
}

export default ImageFuction;
