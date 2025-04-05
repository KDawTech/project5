import React from "react";

const WeatherCard = ({ data }) => {
  return (
    <div className="card">
      <h3>{data.cityLabel || data.city_name}</h3>
      <p>App Temp: {data.app_temp}°C</p>
      <p>Clouds: {data.clouds}%</p>
      <p>AQI: {data.aqi}</p>
    </div>
  );
};

export default WeatherCard;


