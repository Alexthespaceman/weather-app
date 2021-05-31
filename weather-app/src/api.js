import axios from "axios";

export const getManchesterWeather = () => {
  return axios
    .get("https://goweather.herokuapp.com/weather/manchester")
    .then(({ data }) => {
      return data;
    });
};

export const getCityData = () => {
  return axios
    .get("https://goweather.herokuapp.com/weather/london")
    .then(({ data }) => {
      return data;
    });
};
