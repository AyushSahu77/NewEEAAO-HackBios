import React from "react";

const WeatherItems = (props) => {
  let { date, currency, metalType } = props;

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Date & Timeline - {date}</h5>
          <p className="card-text">Currency - {currency}</p>
          <p className="card-text">Metal Type - {metalType}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherItems;
