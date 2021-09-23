import React, { useContext } from "react";
import MiscContext from "../../context/MiscContext";
import "./DetailsBox.css";

export const DetailsBox = () => {
  const { detailsInfo } = useContext(MiscContext);
  return (
    <div className="details-container">
      <div className="details-box">{detailsInfo}</div>
    </div>
  );
};
