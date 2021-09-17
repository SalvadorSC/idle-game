import { useContext, useEffect } from "react";
import CounterContext from "../context/CounterContext";
import { useContador } from "./useContador";

export const useIncrementByClick = () => {
  const {
    goal,
    setGoal,
    clicks,
    setClicks,
    knCount,
    setKnCount,
    multiplicador,
    totalKnOfAllTime,
    setTotalKnOfAllTime,
    totalClicksOfAllTime,
    setTotalClicksOfAllTime,
    totalKnCountOfThisRun,
    setTotalKnCountOfThisRun,
    upgrades,
    save,
  } = useContext(CounterContext);
  const dependencies = useContext(CounterContext);
  const { incrementEverySecond } = useContador(dependencies);

  useEffect(() => {
    const timer = setTimeout(() => {
      incrementEverySecond(upgrades);
    }, 1e3);
    return () => clearTimeout(timer);
  });
  // save function
  useEffect(() => {
    localStorage.setItem("save", JSON.stringify(save));
  }, [save]);

  const increment = (upgrades) => {
    let efectoMultiplicador;
    if (multiplicador) {
      if (upgrades.multiplicador.length === 0) {
        efectoMultiplicador = multiplicador * 1.25;
      } else if (upgrades.multiplicador.includes("General Culture III")) {
        efectoMultiplicador = multiplicador * 2;
      } else if (upgrades.multiplicador.includes("General Culture II")) {
        efectoMultiplicador = multiplicador * 1.75;
      } else if (upgrades.multiplicador.includes("General Culture I")) {
        efectoMultiplicador = multiplicador * 1.5;
      }
    } else {
      efectoMultiplicador = 1;
    }

    const genrlKnCountWithEffects = efectoMultiplicador * 7;
    const bioKnCountWithEffects = efectoMultiplicador * 1;
    const technoKnCountWithEffects = efectoMultiplicador * 1;
    const cultureKnCountWithEffects = efectoMultiplicador * 1;
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
        Math.floor(technoKnCountWithEffects * 100) / 1000,
      cultureKn:
        totalKnOfAllTime.cultureKn +
        Math.floor(cultureKnCountWithEffects * 100) / 1000,
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
