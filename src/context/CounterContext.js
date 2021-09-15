import React, { createContext, useState } from "react";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  let savegame = JSON.parse(localStorage.getItem("save"));
  const [multiplicador, setMultiplicador] = useState(
    savegame ? savegame.multiplicador : 0
  );
  const [automatron1, setAutomatron1] = useState(
    savegame ? savegame.automatron1 : 0
  );
  const [count, setCount] = useState(savegame ? savegame.count : 0);
  const [clicks, setClicks] = useState(savegame ? savegame.clicks : 0);
  const [resets, setResets] = useState(savegame ? savegame.resets : 0);
  const [totalCountOfAllTime, setTotalCountOfAllTime] = useState(
    savegame ? savegame.totalCountOfAllTime : 0
  );
  const [goal, setGoal] = useState(savegame ? savegame.goal : 100);

  let save = {
    multiplicador: multiplicador,
    automatron1: automatron1,
    count: count,
    totalCountOfAllTime: totalCountOfAllTime,
    goal: goal,
    clicks: clicks,
  };

  const resetGame = () => {
    setGoal(100);
    setMultiplicador(0);
    setTotalCountOfAllTime(0);
    setCount(0);
    setAutomatron1(0);
    setResets(resets + 1);
  };
  const resetAllGame = () => {
    setGoal(100);
    setMultiplicador(0);
    setTotalCountOfAllTime(0);
    setCount(0);
    setAutomatron1(0);
    setClicks(0);
    setResets(0);
  };

  return (
    <CounterContext.Provider
      value={{
        goal,
        setGoal,
        count,
        setCount,
        clicks,
        setClicks,
        automatron1,
        setAutomatron1,
        multiplicador,
        setMultiplicador,
        totalCountOfAllTime,
        setTotalCountOfAllTime,
        save,
        resetGame,
        resetAllGame,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContext;
