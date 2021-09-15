import React, { useContext } from "react";
import CounterContext from "../../context/CounterContext";
import "./Options.css";

export const Options = () => {
  const { resetGame, resetAllGame, cheat } = useContext(CounterContext);
  return (
    <div className="options-item-container">
      <button className="reset-button" onClick={resetGame}>
        Reset
      </button>
      <button className="reset-button" onClick={cheat}>
        Cheat
      </button>
      <button className="reset-button" onClick={resetAllGame}>
        Reset All
      </button>
    </div>
  );
};
