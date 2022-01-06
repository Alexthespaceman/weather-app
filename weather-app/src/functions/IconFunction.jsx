import React from "react";
import { BiCloud } from "react-icons/bi";
import { CgSun } from "react-icons/cg";
import { FaWind } from "react-icons/fa";
import { FiCloudRain, FiCloudSnow } from "react-icons/fi";

function IconFunction(description) {
  if (description.includes("Sun") || description.includes("Clear")) {
    return <CgSun className="icon" id="sun" />;
  }
  if (
    description.includes("rain") ||
    description.includes("Rain") ||
    description.includes("drizzle") ||
    description.includes("shower")
  ) {
    return <FiCloudRain className="icon" id="rain" />;
  }
  if (description.includes("Snow") || description.includes("snow")) {
    return <FiCloudSnow className="icon" id="snow" />;
  }
  if (description.includes("cloud")) {
    return <BiCloud className="icon" id="cloud" />;
  }
  if (description.includes("wind") || description.includes("Thunder")) {
    return <FaWind className="icon" id="wind" />;
  }
}

export default IconFunction;
