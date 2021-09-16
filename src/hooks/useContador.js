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
    if (Math.floor((totalKnCountOfThisRun / goal) * 10000) / 100 > 100) {
      document.querySelector(".progressL").style.transform = `rotate(180deg)`;
      document.querySelector(".progressR").style.transform = `rotate(180deg)`;
    } else if ((totalKnCountOfThisRun / goal) * 100 > 50) {
      document.querySelector(".progressL").style.transform = `rotate(180deg)`;
      document.querySelector(".progressR").style.transform = `rotate(${
        Math.floor(((3.6 * totalKnCountOfThisRun) / goal) * 10000) / 100 - 180
      }deg)`;
    } else {
      document.querySelector(".progressL").style.transform = `rotate(${
        Math.floor(((3.6 * totalKnCountOfThisRun) / goal) * 10000) / 100
      }deg)`;
      document.querySelector(".progressR").style.transform = `rotate(0deg)`;
    }
    if (totalKnCountOfThisRun >= goal) {
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
    const knCountWithEffects = knCount + 1 + efectoMultiplicador;
    setKnCount(Math.floor(knCountWithEffects * 100) / 100);
    setTotalKnCountOfThisRun(
      Math.floor((totalKnCountOfThisRun + 1 + efectoMultiplicador) * 100) / 100
    );
    setTotalKnOfAllTime(
      Math.floor((totalKnOfAllTime + 1 + efectoMultiplicador) * 100) / 100
    );
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
    const knCountWithEffects = knCount + efectoAutomatron1;
    setKnCount(Math.floor(knCountWithEffects * 100) / 100);
    if (efectoAutomatron1 > 0) {
      setTotalKnCountOfThisRun(
        Math.floor((totalKnCountOfThisRun + efectoAutomatron1) * 100) / 100
      );
      setTotalKnOfAllTime(
        Math.floor((totalKnOfAllTime + 1 + efectoAutomatron1) * 100) / 100
      );
    }
    updateProgressBar();
  };

  return {
    knCount,
    increment,
    automatron1,
    multiplicador,
    incrementEverySecond,
  };
};
