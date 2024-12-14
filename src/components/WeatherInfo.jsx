import React from 'react';

function WeatherInfo({ data }) {
  return (
    <div className="top">
      <div className="location">
        <p>{data.name}</p>
      </div>
      <div className="temp">
        {data.main ? <h1>{data.main.temp.toFixed()} ºC</h1> : null}
      </div>
      <div className="description">
        {data.weather ? <p>{data.weather[0].main}</p> : null}
      </div>
    </div>
  );
}

export default WeatherInfo;