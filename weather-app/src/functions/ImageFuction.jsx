import React from "react";
import sun from "../images/blue-sku.jpeg";
import cloudy from "../images/cloudy.jpeg";
import lightning from "../images/lightning.jpeg";
import rain from "../images/rain.jpeg";
import snow from "../images/snow.jpeg";

function ImageFuction(description) {
  if (description.includes("Sun") || description.includes("Clear")) {
    return <img alt="sun" src={sun} className="sun-img" />;
  }
  if (
    description.includes("rain") ||
    description.includes("Rain") ||
    description.includes("shower") ||
    description.includes("drizzle")
  ) {
    return <img alt="rain" src={rain} className="rain-img" />;
  }
  if (description.includes("snow")) {
    return <img alt="snow" src={snow} className="snow-img" />;
  }
  if (description.includes("cloud")) {
    return <img alt="cloud" src={cloudy} className="cloud-img" />;
  }
  if (description.includes("wind") || description.includes("Thunder")) {
    return <img alt="lighting" src={lightning} className="wind-img" />;
  }
}

export default ImageFuction;
