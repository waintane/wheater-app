import React from 'react';
import weather from "./functions/getApi";
import './App.scss';

function App() {

  weather.fetchWeather("Montréal");
  return (
    <div className="App">
      bro
    </div>
  );
}

export default App;
