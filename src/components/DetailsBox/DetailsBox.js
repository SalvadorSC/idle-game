import React, { useContext } from "react";
import CounterContext from "../../context/CounterContext";
import "./DetailsBox.css";

export const DetailsBox = () => {
  const { detailsInfo } = useContext(CounterContext);
  return (
    <div className="details-container">
      <div className="details-box">{detailsInfo}</div>
    </div>
  );
};
