import React, { useEffect, useState } from "react";
import WeatherCard from "./components/WeatherCard";

import "./App.css";

const cities = [
  { name: "New York", lat: 40.7128, lon: -74.006 },
  { name: "Los Angeles", lat: 34.0522, lon: -118.2437 },
  { name: "Chicago", lat: 41.8781, lon: -87.6298 },
  { name: "London", lat: 51.5074, lon: -0.1278 },
  { name: "Tokyo", lat: 35.6895, lon: 139.6917 },
  { name: "Paris", lat: 48.8566, lon: 2.3522 },
  { name: "Miami", lat: 25.7617, lon: -80.1918 },
  { name: "Dallas", lat: 32.7767, lon: -96.797 },
  { name: "Toronto", lat: 43.6532, lon: -79.3832 },
  { name: "Seattle", lat: 47.6062, lon: -122.3321 }
];

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAll = async () => {
      const API_KEY = "ae0dd2af2bdd4ce0affb4ce7b7c6b304";
      const promises = cities.map(async (city) => {
        const res = await fetch(
          `https://api.weatherbit.io/v2.0/current?lat=${city.lat}&lon=${city.lon}&key=${API_KEY}`
        );
        const json = await res.json();
        if (json && json.data && json.data[0]) {
          return { ...json.data[0], cityLabel: city.name };
        }
        return null;
      });
      const results = await Promise.all(promises);
      const filteredResults = results.filter(Boolean);
      setWeatherData(filteredResults);
    };

    fetchAll();
  }, []);

  const filtered = weatherData.filter((w) =>
    w.cityLabel.toLowerCase().includes(search.toLowerCase())
  );

  const temps = weatherData.map((d) => d.app_temp);
  const min = Math.min(...temps);
  const max = Math.max(...temps);
  const avg = temps.reduce((a, b) => a + b, 0) / temps.length;

  return (
    <div className="App">
      <h1>WeatherDash 🌦️</h1>
      <input
        type="text"
        placeholder="Search city..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="stats">
        <span>Avg Temp: {avg.toFixed(1)}°C</span>
        <span>Max Temp: {max.toFixed(1)}°C</span>
        <span>Min Temp: {min.toFixed(1)}°C</span>
      </div>

      <div className="card-grid">
        {filtered.map((w, i) => (
          <WeatherCard key={i} data={w} />
        ))}
      </div>
    </div>
  );
};

export default App;
