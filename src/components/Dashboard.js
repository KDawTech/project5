import React, { useEffect, useState } from "react";
import WeatherCard from './WeatherCard';
import Stats from './Stats';
import SearchBar from './SearchBar';

const cities = [
  "New York", "Los Angeles", "Chicago", "London",
  "Tokyo", "Paris", "Miami", "Dallas", "Toronto", "Seattle"
];

const Dashboard = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [aqiFilter, setAqiFilter] = useState("All");
  const [maxTemp, setMaxTemp] = useState(50);

  useEffect(() => {
    const fetchAll = async () => {
      const results = await Promise.all(
        cities.map(async (city) => {
          const res = await fetch(
            `https://api.weatherbit.io/v2.0/current?city=${city}&key=ae0dd2af2bdd4ce0affb4ce7b7c6b304`
          );
          const json = await res.json();
          return json.data[0];
        })
      );
      setWeatherData(results);
    };
    fetchAll();
  }, []);

  const handleAqiChange = (e) => setAqiFilter(e.target.value);
  const handleTempChange = (e) => setMaxTemp(Number(e.target.value));

  const filteredResults = weatherData
    .filter((entry) =>
      entry.city_name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((entry) => {
      const temp = entry.app_temp;
      const aqi = entry.aqi;

      const passesTemp = temp <= maxTemp;

      const passesAqi =
        aqiFilter === "All" ||
        (aqiFilter === "Good" && aqi <= 50) ||
        (aqiFilter === "Moderate" && aqi > 50 && aqi <= 100) ||
        (aqiFilter === "Unhealthy" && aqi > 100);

      return passesTemp && passesAqi;
    });

  return (
    <div className="dashboard" style={{ padding: "2rem", color: "white" }}>
      <h1 style={{ textAlign: "center" }}>WeatherDash 🌤️</h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="filters" style={{ display: "flex", gap: "1rem", alignItems: "center", marginTop: "1rem", flexWrap: "wrap" }}>
        <label>
          AQI Filter:
          <select value={aqiFilter} onChange={handleAqiChange} style={{ marginLeft: "0.5rem" }}>
            <option value="All">All AQI</option>
            <option value="Good">Good (0-50)</option>
            <option value="Moderate">Moderate (51-100)</option>
            <option value="Unhealthy">Unhealthy (100+)</option>
          </select>
        </label>

        <label>
          Max Temp: {maxTemp} °C
          <input
            type="range"
            min="0"
            max="50"
            value={maxTemp}
            onChange={handleTempChange}
            style={{ marginLeft: "0.5rem" }}
          />
        </label>
      </div>

      <Stats data={filteredResults} />

      <div className="cards" style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1.5rem",
        marginTop: "2rem"
      }}>
        {filteredResults.map((data, idx) => (
          <WeatherCard key={idx} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

