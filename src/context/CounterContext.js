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
  const [totalKnCountOfThisRun, setTotalKnCountOfThisRun] = useState(
    savegame
      ? savegame.totalKnCountOfThisRun
      : { generalKn: 0, cultureKn: 0, bioKn: 0, technoKn: 0 }
  );
  const [clicks, setClicks] = useState(savegame ? savegame.clicks : 0);
  const [totalClicksOfAllTime, setTotalClicksOfAllTime] = useState(
    savegame ? savegame.totalClicksOfAllTime : 0
  );
  const [totalKnOfAllTime, setTotalKnOfAllTime] = useState(
    savegame
      ? savegame.totalKnOfAllTime
      : {
          generalKn: 0,
          cultureKn: 0,
          bioKn: 0,
          technoKn: 0,
        }
  );

  const [resets, setResets] = useState(savegame ? savegame.resets : 0);
  const [potenciaClick, setPotenciaClick] = useState(
    savegame ? savegame.potenciaClick : 0
  );
  const [knForfeitedAtReset, setKnForfeitedAtReset] = useState(
    savegame
      ? savegame.knForfeitedAtReset
      : {
          generalKn: 0,
          cultureKn: 0,
          bioKn: 0,
          technoKn: 0,
        }
  );
  const [maxKn, setMaxKn] = useState(
    savegame
      ? savegame.maxKn
      : {
          generalKn: 0,
          cultureKn: 0,
          bioKn: 0,
          technoKn: 0,
        }
  );
  const [goal, setGoal] = useState(savegame ? savegame.goal : 100);
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
  const [mute, setMute] = useState(true);

  const [chosenBook, setChosenBook] = useState(
    savegame ? savegame.chosenBook : "General Culture I"
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [detailsInfo, setDetailsInfo] = useState("Hehe");
  const [lastLogin, setLastLogin] = useState(savegame ? savegame.lastLogin : 0);
  ///Calculate OFFLINE PRODUCTION
  const dependencies = {
    chosenBook,
    multiplicador,
    upgrades,
    setKnCount,
    setTotalKnOfAllTime,
    setMaxKn,
    setTotalKnCountOfThisRun,
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

  let save = {
    multiplicador,
    automatron1,
    squirrels,
    knCount,
    totalKnCountOfThisRun,
    goal,
    clicks,
    totalClicksOfAllTime,
    totalKnOfAllTime,
    knForfeitedAtReset,
    resets,
    upgrades,
    chosenBook,
    potenciaClick,
    maxKn,
    lastLogin,
    pageTrees,
  };
  const [volume, setVolume] = useState(0);

  return (
    <CounterContext.Provider
      value={{
        goal,
        setGoal,
        knCount,
        setKnCount,
        clicks,
        setClicks,
        chosenBook,
        setChosenBook,
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
        potenciaClick,
        setPotenciaClick,
        upgrades,
        setUpgrades,
        save,
        baseUpgrades,
        isPlaying,
        setIsPlaying,
        volume,
        setVolume,
        mute,
        setMute,
        setResets,
        squirrels,
        setSquirrels,
        detailsInfo,
        generatedKn,
        setDetailsInfo,
        maxKn,
        setMaxKn,
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
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContext;
