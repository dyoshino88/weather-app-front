import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleGetWeather = async () => {
    try {
      const response = await axios.get(`https://young-mesa-75839-8d20ed811f40.herokuapp.com/get_weather/${cityName}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter city name"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <button onClick={handleGetWeather}>Get Weather</button>
      </div>
      {weatherData && (
        <div>
          <h2>Weather in {weatherData.city}</h2>
          <p>Description: {weatherData.weather}</p>
          <p>Temperature: {weatherData.temperature} °C</p>
        </div>
      )}
    </div>
  );
}

export default App;
