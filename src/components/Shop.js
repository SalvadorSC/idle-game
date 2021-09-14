import React, { useContext } from "react";
import CounterContext from "../context/CounterContext";

export const Shop = (props) => {
  const { incrementMultiplicador, incrementAutomatron1 } = props;
  const { count, automatron1, multiplicador } = useContext(CounterContext);
  return (
    <div className="shop">
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
          disabled={count < Math.floor(20 * Math.pow(1.2, automatron1))}
          onClick={incrementAutomatron1}
        >
          Buy Automatron v1 ({Math.floor(20 * Math.pow(1.2, automatron1))})
        </button>
      </div>
    </div>
  );
};
