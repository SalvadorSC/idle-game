import React, { createContext, useEffect, useState } from "react";
import { useChosenKn } from "../hooks/useChosenKn";

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
  ///Calculate OFFLINE PRODUCTION
  const { setChosenBookEffect } = useChosenKn(chosenBook);
  const [lastLogin, setLastLogin] = useState(savegame ? savegame.lastLogin : 0);
  const [showBuffer, setShowBuffer] = useState(true);
  const [showGeneratedKnAlert, setShowGeneratedKnAlert] = useState(false);
  const [rewardsTaken, setRewardsTaken] = useState(false);
  const [generatedKn, setGeneratedKn] = useState({
    generatedGnKn: 0,
    generatedBioKn: 0,
    generatedTechnoKn: 0,
    generatedCultureKn: 0,
  });
  const {
    genrlKnCountWithEffects,
    bioKnCountWithEffects,
    technoKnCountWithEffects,
    cultureKnCountWithEffects,
  } = setChosenBookEffect(multiplicador);
  useEffect(() => {
    const newLogin = Date.now();
    if (showBuffer && lastLogin !== 0) {
      setShowBuffer(false);

      if (
        newLogin - lastLogin > 60 * 1000 &&
        (automatron1 > 0 || squirrels > 0)
      ) {
        setShowGeneratedKnAlert(true);
        debugger;
        const secondsElapsedSinceLastLogin = (Date.now() - lastLogin) / 1000;
        const getGeneratedKn = (knWithEffects) =>
          Math.floor(knWithEffects * secondsElapsedSinceLastLogin * 0.1 * 100) /
          100;
        setKnCount((knCount) => {
          return {
            ...knCount,
            generalKn:
              Math.floor(
                (knCount.generalKn + getGeneratedKn(genrlKnCountWithEffects)) *
                  100
              ) / 100,

            bioKn:
              Math.floor(
                (knCount.bioKn + getGeneratedKn(bioKnCountWithEffects)) * 100
              ) / 100,
            technoKn:
              Math.floor(
                (knCount.technoKn + getGeneratedKn(technoKnCountWithEffects)) *
                  100
              ) / 100,
            cultureKn:
              Math.floor(
                (knCount.cultureKn +
                  getGeneratedKn(cultureKnCountWithEffects)) *
                  100
              ) / 100,
          };
        });
        setMaxKn((maxKn) => {
          return {
            generalKn:
              Math.floor(
                (maxKn.generalKn + getGeneratedKn(genrlKnCountWithEffects)) *
                  100
              ) / 100,

            bioKn:
              Math.floor(
                (maxKn.bioKn + getGeneratedKn(bioKnCountWithEffects)) * 100
              ) / 100,
            technoKn:
              Math.floor(
                (maxKn.technoKn + getGeneratedKn(technoKnCountWithEffects)) *
                  100
              ) / 100,
            cultureKn:
              Math.floor(
                (maxKn.cultureKn + getGeneratedKn(cultureKnCountWithEffects)) *
                  100
              ) / 100,
          };
        });
        setTotalKnCountOfThisRun((totalKnCountOfThisRun) => {
          return {
            ...totalKnCountOfThisRun,
            generalKn:
              Math.floor(
                (totalKnCountOfThisRun.generalKn +
                  getGeneratedKn(genrlKnCountWithEffects)) *
                  100
              ) / 100,

            bioKn:
              Math.floor(
                (totalKnCountOfThisRun.bioKn +
                  getGeneratedKn(bioKnCountWithEffects)) *
                  100
              ) / 100,
            technoKn:
              Math.floor(
                (totalKnCountOfThisRun.technoKn +
                  getGeneratedKn(technoKnCountWithEffects)) *
                  100
              ) / 100,
            cultureKn:
              Math.floor(
                (totalKnCountOfThisRun.cultureKn +
                  getGeneratedKn(cultureKnCountWithEffects)) *
                  100
              ) / 100,
          };
        });
        setTotalKnOfAllTime((totalKnOfAllTime) => {
          return {
            ...totalKnOfAllTime,
            generalKn:
              Math.floor(
                (totalKnOfAllTime.generalKn +
                  getGeneratedKn(genrlKnCountWithEffects)) *
                  100
              ) / 100,

            bioKn:
              Math.floor(
                (totalKnOfAllTime.bioKn +
                  getGeneratedKn(bioKnCountWithEffects)) *
                  100
              ) / 100,
            technoKn:
              Math.floor(
                (totalKnOfAllTime.technoKn +
                  getGeneratedKn(technoKnCountWithEffects)) *
                  100
              ) / 100,
            cultureKn:
              Math.floor(
                (totalKnOfAllTime.cultureKn +
                  getGeneratedKn(cultureKnCountWithEffects)) *
                  100
              ) / 100,
          };
        });
        setGeneratedKn({
          generatedGnKn: getGeneratedKn(genrlKnCountWithEffects),
          generatedBioKn: getGeneratedKn(bioKnCountWithEffects),
          generatedTechnoKn: getGeneratedKn(technoKnCountWithEffects),
          generatedCultureKn: getGeneratedKn(cultureKnCountWithEffects),
        });
      }
      setLastLogin(0);
    } else if (newLogin - lastLogin < 60 * 1000 && rewardsTaken) {
      setShowGeneratedKnAlert(false);

      const timer = setTimeout(() => {
        setLastLogin(Date.now());
        setShowBuffer(false);
      }, 1e3);
      return () => clearTimeout(timer);
    }
  }, [
    automatron1,
    bioKnCountWithEffects,
    cultureKnCountWithEffects,
    generatedKn.generatedBioKn,
    generatedKn.generatedCultureKn,
    generatedKn.generatedGnKn,
    generatedKn.generatedTechnoKn,
    genrlKnCountWithEffects,
    knCount.bioKn,
    knCount.cultureKn,
    knCount.generalKn,
    knCount.technoKn,
    lastLogin,
    rewardsTaken,
    showBuffer,
    squirrels,
    technoKnCountWithEffects,
  ]);
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
        setGeneratedKn,
        setDetailsInfo,
        maxKn,
        setMaxKn,
        showBuffer,
        lastLogin,
        setShowBuffer,
        setLastLogin,
        showGeneratedKnAlert,
        setShowGeneratedKnAlert,
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
