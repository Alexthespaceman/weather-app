import React from "react";
import { BiCloud } from "react-icons/bi";
import { CgSun } from "react-icons/cg";
import { FaWind } from "react-icons/fa";
import { FiCloudRain, FiCloudSnow } from "react-icons/fi";

function IconFunction(description) {
  if (description.includes("Sun")) {
    return <CgSun className="icon" />;
  }
  if (description.includes("rain")) {
    return <FiCloudRain className="icon" />;
  }
  if (description.includes("Snow")) {
    return <FiCloudSnow className="icon" />;
  }
  if (description.includes("cloud")) {
    return <BiCloud className="icon" />;
  }
  if (description.includes("wind")) {
    return <FaWind className="icon" />;
  }
}

export default IconFunction;
