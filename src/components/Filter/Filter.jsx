import { Slider } from "@mui/material";
import React, { useState } from "react";
import "./Filter.css";

const PriceFilter = ({ onPriceFilter }) => {
  const initialValue = [40, 5000];
  const [value, setValue] = useState(initialValue);
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    if(onPriceFilter){
      onPriceFilter(newValue[0],newValue[1])
    }
  };
  return (
    <>
      <div className="price_slider_amount">
        <div className="price_label">
          Price: <span className="from">${value[0]}</span>-
          <span className="to">${value[1]}</span>
        </div>

        <Slider
          value={value}
          onChange={rangeSelector}
          valueLabelDisplay="auto"
          min={initialValue[0]}
          max={initialValue[1]}
        />
      </div>
    </>
  );
};

export default PriceFilter;
