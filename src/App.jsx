import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  // 日本の47都道府県のリストを作成
  const prefectures = [
    'Hokkaido',
    'Aomori',
    'Iwate',
    'Miyagi',
    'Akita',
    'Yamagata',
    'Fukushima',
    'Ibaraki',
    'Tochigi',
    'Gunma',
    'Saitama',
    'Chiba',
    'Tokyo',
    'Kanagawa',
    'Niigata',
    'Toyama',
    'Ishikawa',
    'Fukui',
    'Yamanashi',
    'Nagano',
    'Gifu',
    'Shizuoka',
    'Aichi',
    'Mie',
    'Shiga',
    'Kyoto',
    'Osaka',
    'Hyogo',
    'Nara',
    'Wakayama',
    'Tottori',
    'Shimane',
    'Okayama',
    'Hiroshima',
    'Yamaguchi',
    'Tokushima',
    'Kagawa',
    'Ehime',
    'Kochi',
    'Fukuoka',
    'Saga',
    'Nagasaki',
    'Kumamoto',
    'Oita',
    'Miyazaki',
    'Kagoshima',
    'Okinawa'
  ];

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
      <h1>天気アプリ</h1>
      <div>
        <select
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        >
          <option value="">都市を選択してください</option>
          {prefectures.map((prefecture) => (
            <option key={prefecture} value={prefecture}>
              {prefecture}
            </option>
          ))}
        </select>
        <button onClick={handleGetWeather}>今日の天気を取得</button>
      </div>
      {weatherData && (
        <div>
          <h2>{weatherData.city}の予報</h2>
          <p>天気: {weatherData.weather}</p>
          <p>温度: {weatherData.temperature} °C</p>
        </div>
      )}
    </div>
  );
}

export default App;
