import React from "react";

export const InfoBullet = ({ handleDetails, setShowDetails }) => {
  return (
    <div
      onMouseEnter={() => handleDetails()}
      onMouseOut={() => setShowDetails(false)}
      className="info-bullet"
    >
      i
    </div>
  );
};
