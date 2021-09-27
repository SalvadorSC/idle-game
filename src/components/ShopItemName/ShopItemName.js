import React from "react";

export const ShopItemName = ({ nameInfo }) => {
  const { name, handleDetails, setShowDetails, item } = nameInfo;
  return (
    <span className="shop-item-name">
      {name}: {item}
      <span
        onMouseEnter={() => handleDetails()}
        onMouseOut={() => setShowDetails(false)}
        className="info-bullet"
      >
        i
      </span>
    </span>
  );
};
