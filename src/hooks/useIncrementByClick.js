import { useContext, useEffect, useMemo } from "react";
import CounterContext from "../context/CounterContext";
import { useContador } from "./useContador";
import { useChosenKn } from "./useChosenKn";
import StatsContext from "../context/StatsContext";
import personajeOneLoop from "../assets/lecteur-oneloop-3.gif";
import MiscContext from "../context/MiscContext";
import { encode } from "base-64";
export const useIncrementByClick = () => {
  const {
    knCount,
    setKnCount,
    multiplicador,
    chosenBook,
    setLastLogin,
    automatron1,
    squirrels,
    pageTrees,
    lastLogin,
    upgrades,
    stop,
  } = useContext(CounterContext);
  const {
    goal,
    setGoal,
    clicks,
    setClicks,
    totalKnOfAllTime,
    setTotalKnOfAllTime,
    totalClicksOfAllTime,
    setTotalClicksOfAllTime,
    totalKnCountOfThisRun,
    setTotalKnCountOfThisRun,
    knForfeitedAtReset,
    resets,
    potenciaClick,
    setPotenciaClick,
    maxKn,
    setMaxKn,
  } = useContext(StatsContext);
  const { mute, pomodoroClass } = useContext(MiscContext);
  const save = useMemo(() => {
    return {
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
  }, [
    automatron1,
    chosenBook,
    clicks,
    goal,
    knCount,
    knForfeitedAtReset,
    lastLogin,
    maxKn,
    multiplicador,
    pageTrees,
    potenciaClick,
    resets,
    squirrels,
    totalClicksOfAllTime,
    totalKnCountOfThisRun,
    totalKnOfAllTime,
    upgrades,
  ]);
  const { incrementEverySecond } = useContador(
    {
      knCount,
      setKnCount,
      automatron1,
      multiplicador,
      mute,
      squirrels,
      chosenBook,
      pageTrees,
      upgrades,
    },
    pomodoroClass
  );
  const { setChosenBookEffect } = useChosenKn(
    chosenBook,
    pomodoroClass,
    upgrades
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if ((automatron1 > 0 || squirrels > 0 || pageTrees > 0) && !stop) {
        incrementEverySecond(upgrades);
        const characterGif = document.querySelector(".character");
        characterGif.src = personajeOneLoop;
        // eslint-disable-next-line no-self-assign
        characterGif.src = characterGif.src;
      }
      if (!stop) {
        setLastLogin(Date.now());
      }
    }, 1e3);
    return () => clearTimeout(timer);
  });

  // save function
  useEffect(() => {
    localStorage.setItem("save", JSON.stringify(save));
    localStorage.setItem("encodedSave", encode(JSON.stringify(save)));
  }, [save]);

  const increment = () => {
    const {
      genrlKnCountWithEffects,
      bioKnCountWithEffects,
      technoKnCountWithEffects,
      cultureKnCountWithEffects,
    } = setChosenBookEffect(multiplicador);
    setPotenciaClick(
      Math.floor(genrlKnCountWithEffects * 100) / 100 +
        Math.floor(bioKnCountWithEffects * 100) / 100 +
        Math.floor(technoKnCountWithEffects * 100) / 100 +
        Math.floor(cultureKnCountWithEffects * 100) / 100
    );

    setKnCount({
      ...knCount,
      generalKn:
        knCount.generalKn + Math.floor(genrlKnCountWithEffects * 100) / 100,
      bioKn: knCount.bioKn + Math.floor(bioKnCountWithEffects * 100) / 100,
      technoKn:
        knCount.technoKn + Math.floor(technoKnCountWithEffects * 100) / 100,
      cultureKn:
        knCount.cultureKn + Math.floor(cultureKnCountWithEffects * 100) / 100,
    });
    setMaxKn({
      generalKn:
        maxKn.generalKn <= knCount.generalKn
          ? knCount.generalKn
          : maxKn.generalKn,
      cultureKn:
        maxKn.cultureKn <= knCount.cultureKn
          ? knCount.cultureKn
          : maxKn.cultureKn,
      bioKn: maxKn.bioKn <= knCount.bioKn ? knCount.bioKn : maxKn.bioKn,
      technoKn:
        maxKn.technoKn <= knCount.technoKn ? knCount.technoKn : maxKn.technoKn,
    });
    setTotalKnCountOfThisRun({
      ...totalKnCountOfThisRun,
      generalKn:
        totalKnCountOfThisRun.generalKn +
        Math.floor(genrlKnCountWithEffects * 100) / 100,
      bioKn:
        totalKnCountOfThisRun.bioKn +
        Math.floor(bioKnCountWithEffects * 100) / 100,
      technoKn:
        totalKnCountOfThisRun.technoKn +
        Math.floor(technoKnCountWithEffects * 100) / 100,
      cultureKn:
        totalKnCountOfThisRun.cultureKn +
        Math.floor(cultureKnCountWithEffects * 100) / 100,
    });
    setTotalKnOfAllTime({
      ...totalKnOfAllTime,
      generalKn:
        totalKnOfAllTime.generalKn +
        Math.floor(genrlKnCountWithEffects * 100) / 100,
      bioKn:
        totalKnOfAllTime.bioKn + Math.floor(bioKnCountWithEffects * 100) / 100,
      technoKn:
        totalKnOfAllTime.technoKn +
        Math.floor(technoKnCountWithEffects * 100) / 100,
      cultureKn:
        totalKnOfAllTime.cultureKn +
        Math.floor(cultureKnCountWithEffects * 100) / 100,
    });
    setClicks(clicks + 1);
    setTotalClicksOfAllTime(totalClicksOfAllTime + 1);
    // Update Progress Bar
    if (totalKnCountOfThisRun.generalKn >= goal) {
      setGoal(goal * 10);
    }
  };
  return {
    increment,
  };
};
