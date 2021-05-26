import React from "react";
import { BiCloud } from "react-icons/bi";
import { CgSun } from "react-icons/cg";
import { FaWind } from "react-icons/fa";
import { FiCloudRain, FiCloudSnow } from "react-icons/fi";

function IconFunction(description) {
  if (description.includes("sun")) {
    return <CgSun className="" />;
  }
  if (description.includes("rain")) {
    return <FiCloudRain className="rain" />;
  }
  if (description.includes("snow")) {
    return <FiCloudSnow />;
  }
  if (description.includes("cloud")) {
    return <BiCloud />;
  }
  if (description.includes("wind")) {
    return <FaWind />;
  }
}

export default IconFunction;
