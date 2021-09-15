import { useEffect } from "react";

export const useContador = (
  goal,
  setGoal,
  count,
  setCount,
  clicks,
  setClicks,
  automatron1,
  automatron2,
  multiplicador,
  totalCountOfAllTime,
  setTotalCountOfAllTime,
  upgrades,
  save
) => {
  const updateProgressBar = () => {
    if (Math.floor((totalCountOfAllTime / goal) * 10000) / 100 > 100) {
      document.querySelector(".progressL").style.transform = `rotate(180deg)`;
      document.querySelector(".progressR").style.transform = `rotate(180deg)`;
    } else if ((totalCountOfAllTime / goal) * 100 > 50) {
      document.querySelector(".progressL").style.transform = `rotate(180deg)`;
      document.querySelector(".progressR").style.transform = `rotate(${
        Math.floor(((3.6 * totalCountOfAllTime) / goal) * 10000) / 100 - 180
      }deg)`;
    } else {
      document.querySelector(".progressL").style.transform = `rotate(${
        Math.floor(((3.6 * totalCountOfAllTime) / goal) * 10000) / 100
      }deg)`;
      document.querySelector(".progressR").style.transform = `rotate(0deg)`;
    }
    if (totalCountOfAllTime >= goal) {
      setGoal(goal * 10);
    }
  };

  const increment = (upgrades) => {
    let efectoMultiplicador;

    if (upgrades.multiplicador.length === 0) {
      efectoMultiplicador = multiplicador * 0.1;
    } else if (upgrades.multiplicador.includes("Multiplicador++")) {
      efectoMultiplicador = multiplicador * 1.25;
    } else if (upgrades.multiplicador.includes("Multiplicador+")) {
      efectoMultiplicador = multiplicador * 0.75;
    }
    const countWithEffects = count + 1 + efectoMultiplicador;
    setCount(Math.floor(countWithEffects * 100) / 100);
    setTotalCountOfAllTime(
      Math.floor((totalCountOfAllTime + 1 + efectoMultiplicador) * 100) / 100
    );
    setClicks(clicks + 1);
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
    let efectoAutomatron2;
    if (upgrades.automatron1.length === 0) {
      efectoAutomatron1 = automatron1 * 1.5;
    } else if (upgrades.automatron1.includes("Automatron v1.2")) {
      efectoAutomatron1 = automatron1 * 5;
    } else if (upgrades.automatron1.includes("Automatron v1.1")) {
      efectoAutomatron1 = automatron1 * 2.5;
    } else {
      efectoAutomatron1 = automatron1 * 1;
    }
    if (upgrades.automatron2.length === 0) {
      efectoAutomatron2 = 0;
    } else if (upgrades.automatron2.length === 1) {
      efectoAutomatron2 = automatron2 * 10;
    }

    const countWithEffects = count + efectoAutomatron1 + efectoAutomatron2;
    setCount(Math.floor(countWithEffects * 100) / 100);
    if (efectoAutomatron1 > 0) {
      setTotalCountOfAllTime(
        Math.floor((totalCountOfAllTime + efectoAutomatron1) * 100) / 100
      );
    }
    updateProgressBar();
  };

  return {
    count,
    increment,
    automatron1,
    multiplicador,
    incrementEverySecond,
  };
};
