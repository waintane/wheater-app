import React from 'react';
import weather from "./functions/getApi";
import './App.scss';
import WeatherCard from './components/WeatherCard';

function App() {

  //weather.fetchWeather("Montréal");
  return (
    <div className="App">
      <div className='background-filter'>
        <WeatherCard/>
      </div>
    </div>
  );
}

export default App;
