import React from 'react';
import weather from "./functions/getApi";
import data from "./data/data.json"
import './App.scss';
import WeatherCard from './components/WeatherCard';

function App() {

  //weather.fetchWeather("Montréal");
  return (
    <div className="App">
      <WeatherCard/>
      temperature: {data.temp}
    </div>
  );
}

export default App;
