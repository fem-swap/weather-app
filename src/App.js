import Weather from "./components/Weather";
import "./styles.css";

import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar'
import WeatherApp from "./views/Weatherapp/Weatherapp"
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
       <WeatherApp />
      </div>
    )
  }
}

export default function App() {
  return (
    <div className="backdrop">
      <div className="main">
        <Weather
          data={{
            city_name: "Pune",
            weather_status: "Clouds",
            weather_desc: "Rainy",
            temp: "43.2"
          }}
        />
      </div>
    </div>
  );
}
 
