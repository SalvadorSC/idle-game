import React, { useContext } from "react";
import CounterContext from "../../context/CounterContext";
import "./Shop.css";

export const Shop = (props) => {
  const {
    incrementMultiplicador,
    incrementAutomatron1,
    incrementAutomatron2,
  } = props;
  const {
    count,
    automatron1,
    multiplicador,
    upgrades,
    automatron2,
  } = useContext(CounterContext);
  return (
    <>
      <div className="shop-item-container">
        <p className="shop-item-name">Multiplicador: {multiplicador}</p>
        <button
          className="shop-button"
          disabled={count < Math.floor(10 * Math.pow(1.1, multiplicador))}
          onClick={incrementMultiplicador}
        >
          Buy Multiplicador ({Math.floor(10 * Math.pow(1.1, multiplicador))})
        </button>
      </div>
      <div className="shop-item-container">
        <p className="shop-item-name">Automatron v1: {automatron1}</p>
        <button
          className="shop-button"
          disabled={count < Math.floor(100 * Math.pow(1.2, automatron1))}
          onClick={incrementAutomatron1}
        >
          Buy Automatron v1 ({Math.floor(100 * Math.pow(1.2, automatron1))})
        </button>
      </div>
      <div className="shop-item-container">
        <p className="shop-item-name">
          {upgrades.automatron2.length >= 1
            ? `Automatron v2: ${automatron2}`
            : "???"}
          {/* Automatron v2: {automatron2} */}
        </p>
        <button
          className="shop-button"
          disabled={count < Math.floor(1000 * Math.pow(1.3, automatron2))}
          onClick={incrementAutomatron2}
        >
          {upgrades.automatron2.length >= 1
            ? `Buy Automatron v2 ${Math.floor(
                1000 * Math.pow(1.3, automatron1)
              )}`
            : "???"}
          {/* Buy Automatron v2 {Math.floor(1000 * Math.pow(1.3, automatron1))} */}
        </button>
      </div>
    </>
  );
};
