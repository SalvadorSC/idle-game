import React, { createContext, useState } from "react";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [multiplicador, setMultiplicador] = useState(0);
  const [automatron1, setAutomatron1] = useState(0);
  const [count, setCount] = useState(0);
  const [totalCountOfAllTime, setTotalCountOfAllTime] = useState(48);
  const [goal, setGoal] = useState(100);
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
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContext;
