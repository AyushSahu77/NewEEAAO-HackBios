import React, { useState } from "react";
import WeatherItems from "./WeatherItems";

const Weather = (props) => {
  const [location, setLocation] = useState({});
  const [current, setCurrent] = useState({});

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateWeather = async () => {
    props.setProgress(10);
    const url = `https://api.weatherapi.com/v1/current.json?key=${props.apiKey}&q=${props.location}`;
    let data = await fetch(url);
    props.setProgress(40);
    let parseData = await data.json();
    props.setProgress(70);
    setLocation(parseData.location);
    setCurrent(parseData.current);
    props.setProgress(100);
  };

  return (
    <>
      <h2 className="text-center" style={{ marginTop: "80px" }}>
        NewEEAAO - {capitalizeFirstLetter(props.category)}
      </h2>
      <button onClick={updateWeather}>CLICK</button>
      <div className="container">
        <div className="row my-3">
          <div className="col-md-4 my-3">
            <WeatherItems
              location={location.name ? location.name : ""}
              region={location.region ? location.region : ""}
              country={location.country ? location.country : ""}
              localtime={location.localtime}
              tempc={current.temp_c}
              wind={current.wind_kph}
              windDir={current.wind_dir}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
