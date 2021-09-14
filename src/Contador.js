import React, { useContext } from "react";
import { Shop } from "./components/Shop";
import CounterContext from "./context/CounterContext";
import { useContador } from "./hooks/useContador";

const Contador = () => {
  const {
    goal,
    totalCountOfAllTime,
    count,
    automatron1,
    multiplicador,
    setCount,
    setGoal,
    setTotalCountOfAllTime,
    setMultiplicador,
    setAutomatron1,
    save,
    resetGame,
  } = useContext(CounterContext);
  const {
    increment,
    incrementMultiplicador,
    incrementAutomatron1,
  } = useContador(
    goal,
    totalCountOfAllTime,
    count,
    automatron1,
    multiplicador,
    setCount,
    setGoal,
    setTotalCountOfAllTime,
    setMultiplicador,
    setAutomatron1,
    save
  );

  return (
    <>
      <div className="contador">
        <div className="display-stats">
          <p>Goal: {goal}</p>
          <p>
            Progress:{" "}
            {Math.floor((totalCountOfAllTime / goal) * 100 * 100) / 100}%
          </p>
          <p>Total: {totalCountOfAllTime}</p>
          <button className="reset-button" onClick={resetGame}>
            Reset
          </button>
        </div>

        <div
          unselectable="on"
          onClick={increment}
          className="display-count unselectable"
        >
          <div className="circular">
            <div className="inner"></div>
            <div className="number">{count}</div>
            <div className="circle">
              <div className="bar left">
                <div className="progressL"></div>
              </div>
              <div className="bar right">
                <div className="progressR"></div>
              </div>
            </div>
          </div>
        </div>

        <Shop
          incrementMultiplicador={incrementMultiplicador}
          incrementAutomatron1={incrementAutomatron1}
        />
      </div>
    </>
  );
};

export default Contador;
