import React from "react";
import { useContador } from "./hooks/useContador";

const ContadorCustomHook = () => {
  const {
    count,
    increment,
    automatron1,
    multiplicador,
    incrementMultiplicador,
    incrementAutomatron1,
    /* incrementEverySecond, */
  } = useContador();

  /* window.setInterval(() => incrementEverySecond(), 1000); */

  return (
    <>
      <div className="contador">
        <p>Count: {count}</p>
        <p>Multiplicador: {multiplicador}</p>
        <p>Automatron v1: {automatron1}</p>
        <button onClick={increment}>+</button> <br />
        <button
          disabled={count < Math.floor(10 * Math.pow(1.2, multiplicador))}
          onClick={incrementMultiplicador}
        >
          Buy Multiplicador ({Math.floor(10 * Math.pow(1.2, multiplicador))})
        </button>
        <button
          disabled={count < Math.floor(20 * Math.pow(1.2, automatron1))}
          onClick={incrementAutomatron1}
        >
          Buy Automatron v1 ({Math.floor(20 * Math.pow(1.2, automatron1))})
        </button>
      </div>
    </>
  );
};

export default ContadorCustomHook;
