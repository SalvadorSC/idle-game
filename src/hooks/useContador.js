import { useEffect } from "react";

export const useContador = (
  goal,
  setGoal,
  count,
  setCount,
  clicks,
  setClicks,
  automatron1,
  setAutomatron1,
  automatron2,
  setAutomatron2,
  multiplicador,
  setMultiplicador,
  totalCountOfAllTime,
  setTotalCountOfAllTime,
  upgrades,
  setUpgrades,
  save,
  resetGame,
  resetAllGame
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

  const incrementMultiplicador = () => {
    const costeMultiplicador = Math.floor(10 * Math.pow(1.1, multiplicador));
    if (count >= costeMultiplicador) {
      const discount = costeMultiplicador;
      const newTotal = count - discount;
      setMultiplicador(multiplicador + 1);
      setCount(Math.floor(newTotal * 100) / 100);
    }
  };
  const incrementAutomatron1 = () => {
    debugger;
    const costeAutomatron1 = Math.floor(20 * Math.pow(1.2, automatron1));
    if (count >= costeAutomatron1) {
      const discount = costeAutomatron1;
      const newTotal = count - discount;
      setAutomatron1(automatron1 + 1);
      setCount(Math.floor(newTotal * 100) / 100);
    }
  };
  const incrementAutomatron2 = () => {
    debugger;
    const costeAutomatron2 =
      count < Math.floor(1000 * Math.pow(1.3, automatron2));
    if (count >= costeAutomatron2) {
      const discount = costeAutomatron2;
      const newTotal = count - discount;
      setAutomatron2(automatron2 + 1);
      setCount(Math.floor(newTotal * 100) / 100);
    }
  };

  return {
    count,
    increment,
    automatron1,
    multiplicador,
    incrementMultiplicador,
    incrementAutomatron1,
    incrementAutomatron2,
    incrementEverySecond,
  };
};
