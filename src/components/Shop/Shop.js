import React, { useContext, useState } from "react";
import CounterContext from "../../context/CounterContext";
import { DetailsBox } from "../DetailsBox/DetailsBox";
import { ShopItem } from "../ShopItem/ShopItem";
import "./Shop.css";

export const Shop = (props) => {
  const {
    automatron1,
    multiplicador,
    upgrades,
    setMultiplicador,
    setAutomatron1,
  } = useContext(CounterContext);

  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      {showDetails && <DetailsBox />}
      <ShopItem
        setShowDetails={setShowDetails}
        name={"Multiplicador"}
        item={multiplicador}
        setItem={setMultiplicador}
        hasRequirements={false}
      />
      <ShopItem
        setShowDetails={setShowDetails}
        name={"Automatron v1"}
        item={automatron1}
        setItem={setAutomatron1}
        hasRequirements={true}
        requirement={upgrades.technology.length >= 2}
      />

      {/* <div className="shop-item-container">
        <p className="shop-item-name">
          {upgrades.automatron2.length >= 1
            ? `Automatron v2: ${automatron2}`
            : "???"}
          
        </p>
        <button
          className="shop-button"
          disabled={disableAutomatron2()}
          onClick={() => {
            console.log(upgrades.automatron2.length >= 1 ? false : true);
            setNewItemQuantity(automatron2, setAutomatron2, 1.3, 10000);
          }}
        >
          {upgrades.automatron2.length >= 1
            ? `Buy Automatron v2 (${parseNumber(
                Math.floor(10000 * Math.pow(1.3, automatron2))
              )})`
            : "???"}
          
        </button>
      </div> */}
    </>
  );
};
