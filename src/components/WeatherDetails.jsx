import React from 'react';

function WeatherDetails({ data }) {
  return (
    <div className="bottom">
      <div className="feels">
        {data.main ? (
          <p className="bold">{data.main.feels_like.toFixed()} ºC</p>
        ) : null}
        <p>Feels like</p>
      </div>
      <div className="humidity">
        {data.main ? (
          <p className="bold">{data.main.humidity} %</p>
        ) : null}
        <p>Humidity</p>
      </div>
      <div className="wind">
        {data.wind ? <p className="bold">{data.wind.speed} m/s</p> : null}
        <p>Wind speed</p>
      </div>
    </div>
  );
}

export default WeatherDetails;