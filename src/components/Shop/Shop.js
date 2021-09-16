import React, { useContext } from "react";
import CounterContext from "../../context/CounterContext";
import { useIncrementItem } from "../../hooks/useIncrementItem";
import { useNumberParsing } from "../../hooks/useNumberParsing";
import "./Shop.css";

export const Shop = (props) => {
  const {
    knCount,
    automatron1,
    multiplicador,
    upgrades,
    setMultiplicador,
    setAutomatron1,
  } = useContext(CounterContext);
  const { setNewItemQuantity } = useIncrementItem();
  const { parseNumber } = useNumberParsing();

  const disableAutomatron1 = () => {
    if (upgrades.technology.length >= 1) {
      if (knCount.generalKn >= Math.floor(100 * Math.pow(1.2, automatron1))) {
        return false;
      } else return true;
    }
    // NO Techno Upgrade
    else {
      return true;
    }
  };

  return (
    <>
      <div className="shop-item-container">
        <p className="shop-item-name">Multiplicador: {multiplicador}</p>
        <button
          className="shop-button"
          disabled={
            knCount.generalKn < Math.floor(10 * Math.pow(1.2, multiplicador))
          }
          onClick={() =>
            setNewItemQuantity(multiplicador, setMultiplicador, 1.2, 10)
          }
        >
          Buy Multiplicador (
          {parseNumber(Math.floor(10 * Math.pow(1.2, multiplicador)))})
        </button>
      </div>
      <div className="shop-item-container">
        <p className="shop-item-name">
          {upgrades.technology.length >= 1
            ? `Automatron v1: ${automatron1}`
            : "???"}{" "}
        </p>
        <button
          className="shop-button"
          disabled={disableAutomatron1()}
          onClick={() =>
            setNewItemQuantity(automatron1, setAutomatron1, 1.2, 100)
          }
        >
          {upgrades.technology.length >= 1
            ? `Buy Automatron v1 (${parseNumber(
                Math.floor(100 * Math.pow(1.2, automatron1))
              )})`
            : "???"}
        </button>
      </div>
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
