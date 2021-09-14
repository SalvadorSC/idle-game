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
  };

  return (
    <CounterContext.Provider
      value={{
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
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContext;
