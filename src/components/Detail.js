import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from 'recharts';

const sampleWeather = {
  clouds: 58,
  aqi: 40,
  wind_spd: 4.3,
  rh: 68,
  pres: 1012,
  uv: 7.5,
};

function Detail() {
  const { city } = useParams();
  const [chartType, setChartType] = useState('bar');

  const chartData = [
    { label: 'AQI', value: sampleWeather.aqi },
    { label: 'Cloud %', value: sampleWeather.clouds },
    { label: 'Humidity', value: sampleWeather.rh },
    { label: 'Wind (m/s)', value: sampleWeather.wind_spd },
    { label: 'Pressure', value: sampleWeather.pres },
    { label: 'UV Index', value: sampleWeather.uv },
  ];

  return (
    <div className="detail-container" style={{ padding: '2rem', color: 'white', textAlign: 'center' }}>
      <h2>{city} - Detailed Weather Data</h2>

      <div style={{ margin: '1rem 0' }}>
        <button onClick={() => setChartType('bar')}>Bar Chart</button>
        <button onClick={() => setChartType('line')} style={{ marginLeft: '10px' }}>Line Chart</button>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        {chartType === 'bar' ? (
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#4fd1c5" />
          </BarChart>
        ) : (
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#c084fc" strokeWidth={2} />
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}

export default Detail;
