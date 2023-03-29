import React, { useState } from "react";
import MetalItems from "./MetalItems";

const Metal = (props) => {
  const [date, setDate] = useState({});
  const [base, setBase] = useState({});
  const [rates, setRates] = useState({});

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateMetal = async () => {
    props.setProgress(10);
    const url = `https://metals-api.com/api/latest?access_key=u55dxt1qijyln61xh2fxvc365msuh503z4pzpfgb3yg5p85315712iv2hjaw&base=INR&symbols=XAU`;
    let data = await fetch(url);
    props.setProgress(40);
    let parseData = await data.json();
    console.log(parseData);
    props.setProgress(70);
    setDate(parseData.date);
    JSON.parse(date);
    setBase(parseData.base);
    setRates(parseData.rates);
    props.setProgress(100);
  };

  return (
    <>
      <h2 className="text-center" style={{ marginTop: "80px" }}>
        NewEEAAO - {capitalizeFirstLetter(props.category)}
      </h2>
      <button onClick={updateMetal}>CLICK</button>
      <div className="container">
        <div className="row my-3">
          <div className="col-md-4 my-3">
            <MetalItems date={date} currency={base} metalType={rates.XAU} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Metal;
