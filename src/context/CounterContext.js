import React, { createContext, useEffect, useState } from "react";
import { useChosenKn } from "../hooks/useChosenKn";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  let savegame = JSON.parse(localStorage.getItem("save"));
  const [multiplicador, setMultiplicador] = useState(
    savegame ? savegame.multiplicador : 1
  );
  const [automatron1, setAutomatron1] = useState(
    savegame ? savegame.automatron1 : 0
  );
  const [squirrels, setSquirrels] = useState(savegame ? savegame.squirrels : 0);
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
  const [mute, setMute] = useState(true);
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
  const [chosenBook, setChosenBook] = useState(
    savegame ? savegame.chosenBook : "General Culture I"
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [detailsInfo, setDetailsInfo] = useState("Hehe");
  ///Calculate OFFLINE PRODUCTION
  const { setChosenBookEffect } = useChosenKn(chosenBook);
  const [lastLogin, setLastLogin] = useState(savegame ? savegame.lastLogin : 0);
  const [showBuffer, setShowBuffer] = useState(true);
  const [showGeneratedKnAlert, setShowGeneratedKnAlert] = useState(true);
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
    if (showBuffer && lastLogin !== 0) {
      console.log(Date.now() - lastLogin);
      setShowBuffer(false);
      if (Date.now() - lastLogin > 60 * 1000) {
        const secondsElapsedSinceLastLogin = (Date.now() - lastLogin) / 1000;
        const getGeneratedKn = (knWithEffects) =>
          Math.floor(knWithEffects * secondsElapsedSinceLastLogin * 0.1 * 100) /
          100;
        setKnCount({
          ...knCount,
          generalKn:
            knCount.generalKn + getGeneratedKn(genrlKnCountWithEffects),
          bioKn: knCount.bioKn + getGeneratedKn(bioKnCountWithEffects),
          technoKn: knCount.technoKn + getGeneratedKn(technoKnCountWithEffects),
          cultureKn:
            knCount.cultureKn + getGeneratedKn(cultureKnCountWithEffects),
        });
        setMaxKn({
          generalKn:
            maxKn.generalKn < knCount.generalKn
              ? knCount.generalKn
              : maxKn.generalKn,
          cultureKn:
            maxKn.cultureKn < knCount.cultureKn
              ? knCount.cultureKn
              : maxKn.cultureKn,
          bioKn: maxKn.bioKn < knCount.bioKn ? knCount.bioKn : maxKn.bioKn,
          technoKn:
            maxKn.technoKn < knCount.technoKn
              ? knCount.technoKn
              : maxKn.technoKn,
        });
        setTotalKnCountOfThisRun({
          ...totalKnCountOfThisRun,
          generalKn:
            totalKnCountOfThisRun.generalKn +
            getGeneratedKn(genrlKnCountWithEffects),
          bioKn:
            totalKnCountOfThisRun.bioKn + getGeneratedKn(bioKnCountWithEffects),
          technoKn:
            totalKnCountOfThisRun.technoKn +
            getGeneratedKn(technoKnCountWithEffects),
          cultureKn:
            totalKnCountOfThisRun.cultureKn +
            getGeneratedKn(cultureKnCountWithEffects),
        });
        setTotalKnOfAllTime({
          ...totalKnOfAllTime,
          generalKn:
            totalKnOfAllTime.generalKn +
            getGeneratedKn(genrlKnCountWithEffects),
          bioKn: totalKnOfAllTime.bioKn + getGeneratedKn(bioKnCountWithEffects),
          technoKn:
            totalKnOfAllTime.technoKn +
            getGeneratedKn(technoKnCountWithEffects),
          cultureKn:
            totalKnOfAllTime.cultureKn +
            getGeneratedKn(cultureKnCountWithEffects),
        });
        setGeneratedKn({
          generatedGnKn: getGeneratedKn(genrlKnCountWithEffects),
          generatedBioKn: getGeneratedKn(bioKnCountWithEffects),
          generatedTechnoKn: getGeneratedKn(technoKnCountWithEffects),
          generatedCultureKn: getGeneratedKn(cultureKnCountWithEffects),
        });
        /* alert(
          `${secondsElapsedSinceLastLogin} You have gained ${getGeneratedKn(
            genrlKnCountWithEffects
          )} general kN,
            ${getGeneratedKn(bioKnCountWithEffects)} bio kN,
            ${getGeneratedKn(technoKnCountWithEffects)} tech kN,
            ${getGeneratedKn(cultureKnCountWithEffects)} cultural kN,
          while offline`
        ); */
      }
      setLastLogin(0);
    } else if (lastLogin === 0) {
      const timer = setTimeout(() => {
        setLastLogin(Date.now());
        setShowBuffer(false);
      }, 1e3);
      return () => clearTimeout(timer);
    }
  }, []);
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
  };
  const [volume, setVolume] = useState(0);

  const resetGame = () => {
    setGoal(100);
    setMultiplicador(1);
    setKnCount({
      generalKn: 0,
      cultureKn: 0,
      bioKn: 0,
      technoKn: 0,
    });
    setTotalKnCountOfThisRun({
      generalKn: 0,
      cultureKn: 0,
      bioKn: 0,
      technoKn: 0,
    });
    setMaxKn({
      generalKn: 0,
      cultureKn: 0,
      bioKn: 0,
      technoKn: 0,
    });
    setPotenciaClick(0);
    setAutomatron1(0);
    setSquirrels(0);
    setResets(resets + 1);
    setClicks(0);
    setTotalClicksOfAllTime(totalClicksOfAllTime);
    setUpgrades(baseUpgrades);
    setKnForfeitedAtReset({
      ...knForfeitedAtReset,
      generalKn: knForfeitedAtReset.generalKn + knCount.generalKn,
    });
    setChosenBook("General Culture I");
  };
  const resetAllGame = () => {
    setGoal(100);
    setChosenBook("General Culture I");
    setMultiplicador(1);
    setTotalKnOfAllTime({
      generalKn: 0,
      cultureKn: 0,
      bioKn: 0,
      technoKn: 0,
    });
    setMaxKn({
      generalKn: 0,
      cultureKn: 0,
      bioKn: 0,
      technoKn: 0,
    });
    setPotenciaClick(0);
    setTotalKnCountOfThisRun({
      generalKn: 0,
      cultureKn: 0,
      bioKn: 0,
      technoKn: 0,
    });
    setTotalClicksOfAllTime(0);
    setKnCount({
      generalKn: 0,
      cultureKn: 0,
      bioKn: 0,
      technoKn: 0,
    });
    setAutomatron1(0);
    setSquirrels(0);
    setClicks(0);
    setResets(0);
    setUpgrades(baseUpgrades);
    setKnForfeitedAtReset({
      generalKn: 0,
      cultureKn: 0,
      bioKn: 0,
      technoKn: 0,
    });
  };
  const cheat = () => {
    setKnCount({ ...knCount, generalKn: knCount.generalKn + 100000000 });
    setTotalKnCountOfThisRun({
      ...totalKnCountOfThisRun,
      generalKn: totalKnCountOfThisRun.generalKn + 100000000,
    });
    setTotalKnOfAllTime({
      ...totalKnOfAllTime,
      generalKn: totalKnOfAllTime.generalKn + 100000000,
    });
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
        resetGame,
        resetAllGame,
        cheat,
        baseUpgrades,
        isPlaying,
        setIsPlaying,
        volume,
        setVolume,
        mute,
        setMute,
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
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContext;
