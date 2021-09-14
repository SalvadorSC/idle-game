import { useEffect, useState } from "react";

export const useContador = () => {
  const [multiplicador, setMultiplicador] = useState(0);
  const [automatron1, setAutomatron1] = useState(0);
  const [count, setCount] = useState(0);
  const increment = () => {
    const efectMultiplicador = multiplicador * 0.1;
    const countWithEffects = count + 1 + efectMultiplicador;
    setCount(Math.floor(countWithEffects * 100) / 100);
  };
  useEffect(() => {
    const timer = setTimeout(() => incrementEverySecond(), 1e3);
    return () => clearTimeout(timer);
  });

  const incrementEverySecond = () => {
    const efectoAutomatron1 = automatron1 * 1.5;
    const countWithEffects = count + efectoAutomatron1;
    setCount(Math.floor(countWithEffects * 100) / 100);
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
