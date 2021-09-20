import { useContext, useEffect } from "react";
import CounterContext from "../context/CounterContext";
import { useContador } from "./useContador";
import { useChosenKn } from "./useChosenKn";

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
    potenciaClick,
    setPotenciaClick,
  } = useContext(CounterContext);
  const dependencies = useContext(CounterContext);
  const { incrementEverySecond } = useContador(dependencies);
  const { setChosenBookEffect } = useChosenKn();

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
    console.log(potenciaClick);

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
