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
  multiplicador,
  setMultiplicador,
  totalCountOfAllTime,
  setTotalCountOfAllTime,
  save,
  resetGame
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

  const increment = () => {
    const efectMultiplicador = multiplicador * 0.1;
    const countWithEffects = count + 1 + efectMultiplicador;
    setCount(Math.floor(countWithEffects * 100) / 100);
    setTotalCountOfAllTime(
      Math.floor((totalCountOfAllTime + 1 + efectMultiplicador) * 100) / 100
    );
    setClicks(clicks + 1);
    updateProgressBar();
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      incrementEverySecond();
    }, 1e3);
    return () => clearTimeout(timer);
  });

  // save function
  useEffect(() => {
    localStorage.setItem("save", JSON.stringify(save));
  }, [save]);

  const incrementEverySecond = () => {
    const efectoAutomatron1 = automatron1 * 1.5;
    const countWithEffects = count + efectoAutomatron1;
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
    const costeAutomatron1 = Math.floor(20 * Math.pow(1.2, automatron1));
    if (count >= costeAutomatron1) {
      const discount = costeAutomatron1;
      const newTotal = count - discount;
      setAutomatron1(automatron1 + 1);
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
    incrementEverySecond,
  };
};
