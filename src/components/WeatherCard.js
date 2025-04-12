import React from 'react';
import { Link } from 'react-router-dom';
import './WeatherCard.css'; // optional if you style separately

function WeatherCard({ data }) {
  if (!data) return null;

  return (
    <Link to={`/city/${data.city_name}`} className="weather-card-link">
      <div className="weather-card">
        <h3>{data.city_name}</h3>
        <p>App Temp: {data.app_temp}°C</p>
        <p>Clouds: {data.clouds}%</p>
        <p>AQI: {data.aqi}</p>
      </div>
    </Link>
  );
}

export default WeatherCard;


