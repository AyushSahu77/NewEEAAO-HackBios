import React from "react";

const WeatherItems = (props) => {
  let {
    location,
    region,
    country,
    localtime,
    tempc,
    wind,
    windDir,
    weatherIcon,
  } = props;

  return (
    <div>
      <div className="card">
        <img
          src={
            weatherIcon
              ? weatherIcon
              : "https://cdn-icons-png.flaticon.com/512/1163/1163734.png"
          }
          className="card-img-top weatherImage"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            location - {location}, {region}, {country}
          </h5>
          <p className="card-text">Time - {localtime}</p>
          <p className="card-text">Temp in °C - {tempc}</p>
          <p className="card-text">
            Wind Speed in KMPH - {wind} with direction - {windDir}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherItems;
