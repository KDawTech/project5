const Stats = ({ data }) => {
    if (data.length === 0) return null;
  
    const avgTemp = (data.reduce((a, b) => a + b.temp, 0) / data.length).toFixed(1);
    const maxTemp = Math.max(...data.map(d => d.temp));
    const minHum = Math.min(...data.map(d => d.rh));
  
    return (
      <div className="stats">
        <p>Avg Temp: {avgTemp}°C</p>
        <p>Max Temp: {maxTemp}°C</p>
        <p>Min Humidity: {minHum}%</p>
      </div>
    );
  };
  
  export default Stats;
  