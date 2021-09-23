import React, { createContext, useEffect, useState } from "react";
import { useOfflineProduction } from "../hooks/useOfflineProduction";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  let savegame = JSON.parse(localStorage.getItem("save"));

  // BUILDINGS
  const [multiplicador, setMultiplicador] = useState(
    savegame ? savegame.multiplicador : 1
  );
  const [automatron1, setAutomatron1] = useState(
    savegame ? savegame.automatron1 : 0
  );
  const [squirrels, setSquirrels] = useState(savegame ? savegame.squirrels : 0);
  const [pageTrees, setPageTrees] = useState(savegame ? savegame.pageTrees : 0);
  //
  // STATS
  const [knCount, setKnCount] = useState(
    savegame
      ? savegame.knCount
      : { generalKn: 0, cultureKn: 0, bioKn: 0, technoKn: 0 }
  );
  const baseUpgrades = {
    multiplicador: ["General Culture I"],
    technology: [],
    nature: [],
    culture: [],
  };
  const [upgrades, setUpgrades] = useState(
    savegame ? savegame.upgrades : baseUpgrades
  );
  //
  // MISCELANEAOUS/USEFUL

  const [chosenBook, setChosenBook] = useState(
    savegame ? savegame.chosenBook : "General Culture I"
  );
  const [lastLogin, setLastLogin] = useState(savegame ? savegame.lastLogin : 0);

  ///Calculate OFFLINE PRODUCTION
  const dependencies = {
    chosenBook,
    multiplicador,
    setKnCount,
    lastLogin,
    setLastLogin,
    knCount,
  };
  const {
    showBuffer,
    generatedKn,
    showGeneratedKnAlert,
    setShowBuffer,
    setGeneratedKn,
    setRewardsTaken,
    setShowGeneratedKnAlert,
    calculateOfflineProduction,
  } = useOfflineProduction(dependencies);
  useEffect(() => {
    calculateOfflineProduction();
  }, [calculateOfflineProduction]);
  ///

  const [volume, setVolume] = useState(0);

  return (
    <CounterContext.Provider
      value={{
        knCount,
        setKnCount,
        chosenBook,
        setChosenBook,
        automatron1,
        setAutomatron1,
        multiplicador,
        setMultiplicador,
        volume,
        setVolume,
        squirrels,
        setSquirrels,
        generatedKn,
        lastLogin,
        setGeneratedKn,
        showBuffer,
        setShowBuffer,
        setLastLogin,
        setShowGeneratedKnAlert,
        showGeneratedKnAlert,
        setRewardsTaken,
        pageTrees,
        setPageTrees,
        upgrades,
        setUpgrades,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContext;
