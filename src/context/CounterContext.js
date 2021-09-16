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
  const [knCount, setKnCount] = useState(savegame ? savegame.knCount : 0);
  const [totalKnCountOfThisRun, setTotalKnCountOfThisRun] = useState(
    savegame ? savegame.totalKnCountOfThisRun : 0
  );
  const [clicks, setClicks] = useState(savegame ? savegame.clicks : 0);
  const [totalClicksOfAllTime, setTotalClicksOfAllTime] = useState(
    savegame ? savegame.totalClicksOfAllTime : 0
  );
  const [totalKnOfAllTime, setTotalKnOfAllTime] = useState(0);
  const [resets, setResets] = useState(savegame ? savegame.resets : 0);
  const [knForfeitedAtReset, setKnForfeitedAtReset] = useState(
    savegame ? savegame.knForfeitedAtReset : 0
  );
  const [goal, setGoal] = useState(savegame ? savegame.goal : 100);
  const baseUpgrades = {
    multiplicador: [],
    technology: [],
    nature: [],
    culture: [],
  };
  const [upgrades, setUpgrades] = useState(
    savegame ? savegame.upgrades : baseUpgrades
  );
  let save = {
    multiplicador: multiplicador,
    automatron1: automatron1,
    knCount: knCount,
    totalKnCountOfThisRun: totalKnCountOfThisRun,
    goal: goal,
    clicks: clicks,
    totalClicksOfAllTime: totalClicksOfAllTime,
    totalKnOfAllTime: totalKnOfAllTime,
    knForfeitedAtReset: knForfeitedAtReset,
    resets: resets,
    upgrades: upgrades,
  };

  const resetGame = () => {
    setGoal(100);
    setMultiplicador(0);
    setTotalKnCountOfThisRun(0);
    setKnCount(0);
    setAutomatron1(0);
    setResets(resets + 1);
    setClicks(0);
    setTotalClicksOfAllTime(totalClicksOfAllTime);
    setUpgrades(baseUpgrades);
    setKnForfeitedAtReset(knForfeitedAtReset + knCount);
  };
  const resetAllGame = () => {
    setGoal(100);
    setMultiplicador(0);
    setTotalKnOfAllTime(0);
    setTotalKnCountOfThisRun(0);
    setTotalClicksOfAllTime(0);
    setKnCount(0);
    setAutomatron1(0);
    setClicks(0);
    setResets(0);
    setUpgrades(baseUpgrades);
    setKnForfeitedAtReset(0);
  };
  const cheat = () => {
    setKnCount(knCount + 100000000);
    setTotalKnCountOfThisRun(totalKnCountOfThisRun + 100000000);
    setTotalKnOfAllTime(totalKnOfAllTime + 100000000);
  };

  return (
    <CounterContext.Provider
      value={{
        goal,
        setGoal,
        knCount,
        setKnCount,
        clicks,
        setClicks,
        automatron1,
        setAutomatron1,
        multiplicador,
        setMultiplicador,
        totalKnCountOfThisRun,
        setTotalKnCountOfThisRun,
        totalClicksOfAllTime,
        setTotalClicksOfAllTime,
        totalKnOfAllTime,
        setTotalKnOfAllTime,
        knForfeitedAtReset,
        setKnForfeitedAtReset,
        upgrades,
        setUpgrades,
        save,
        resetGame,
        resetAllGame,
        cheat,
        baseUpgrades,
        /* runStartTime,
        currentTime,
        firstRunStartTime,
        setCurrentTime, */
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContext;
