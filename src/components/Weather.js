import React from "react";

const Weather = (props) => {
  return (
    <div className="weather_data">
      <div className="weather_status">
        <h1 className="temp">{props.data.temp}</h1>
        <h2 className="temp">{props.data.weather_status}</h2>
      </div>
      <div className="weather_title">
        <p> {props.data.city_name} </p>
        <p> {props.data.weather_status} </p>
        <p> {props.data.weather_desc} </p>
      </div>
    </div>
  );
};

export default Weather;
