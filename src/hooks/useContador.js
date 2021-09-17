import { useEffect } from "react";

export const useContador = ({
  goal,
  setGoal,
  knCount,
  setKnCount,
  clicks,
  setClicks,
  automatron1,
  multiplicador,
  totalKnCountOfThisRun,
  setTotalKnCountOfThisRun,
  totalClicksOfAllTime,
  setTotalClicksOfAllTime,
  totalKnOfAllTime,
  setTotalKnOfAllTime,
  upgrades,
  save,
}) => {
  const updateProgressBar = () => {
    if (totalKnCountOfThisRun.generalKn >= goal) {
      setGoal(goal * 10);
    }
  };

  const increment = (upgrades) => {
    let efectoMultiplicador;
    if (upgrades.multiplicador.length === 0) {
      efectoMultiplicador = multiplicador * 0.1;
    } else if (upgrades.multiplicador.includes("General Culture III")) {
      efectoMultiplicador = multiplicador * 1.25;
    } else if (upgrades.multiplicador.includes("General Culture II")) {
      efectoMultiplicador = multiplicador * 1;
    } else if (upgrades.multiplicador.includes("General Culture I")) {
      efectoMultiplicador = multiplicador * 0.75;
    }
    const knCountWithEffects = knCount.generalKn + 1 + efectoMultiplicador;
    setKnCount({
      ...knCount,
      generalKn: Math.floor(knCountWithEffects * 100) / 100,
    });
    setTotalKnCountOfThisRun({
      ...totalKnCountOfThisRun,
      generalKn:
        Math.floor(
          (totalKnCountOfThisRun.generalKn + 1 + efectoMultiplicador) * 100
        ) / 100,
    });
    setTotalKnOfAllTime({
      ...totalKnCountOfThisRun,
      generalKn:
        Math.floor(
          (totalKnOfAllTime.generalKn + 1 + efectoMultiplicador) * 100
        ) / 100,
    });
    setClicks(clicks + 1);
    setTotalClicksOfAllTime(totalClicksOfAllTime + 1);
    updateProgressBar();
  };
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

  const incrementEverySecond = (upgrades) => {
    let efectoAutomatron1;
    if (upgrades.technology.length === 0) {
      efectoAutomatron1 = automatron1 * 1.5;
    } else if (upgrades.technology.includes("DIY at home")) {
      efectoAutomatron1 = automatron1 * 5;
    } else if (upgrades.technology.includes("Technology for dummies")) {
      efectoAutomatron1 = automatron1 * 2.5;
    } else {
      efectoAutomatron1 = automatron1 * 1;
    }
    const knCountWithEffects = knCount.generalKn + efectoAutomatron1;
    setKnCount({
      ...knCount,
      generalKn: Math.floor(knCountWithEffects * 100) / 100,
    });
    if (efectoAutomatron1 > 0) {
      setTotalKnCountOfThisRun({
        ...knCount,
        generalKn:
          Math.floor(
            (totalKnCountOfThisRun.generalKn + efectoAutomatron1) * 100
          ) / 100,
      });
      setTotalKnOfAllTime({
        ...knCount,
        generalKn:
          Math.floor((totalKnOfAllTime.generalKn + efectoAutomatron1) * 100) /
          100,
      });
    }
    /* updateProgressBar(); */
  };

  return {
    knCount,
    increment,
    automatron1,
    multiplicador,
    incrementEverySecond,
  };
};
