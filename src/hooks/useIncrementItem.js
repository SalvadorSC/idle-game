import { useContext } from "react";
import CounterContext from "../context/CounterContext";

export const useIncrementItem = () => {
  const { knCount, setKnCount } = useContext(CounterContext);

  const setNewItemQuantity = (item, setItem, itemVar, precio) => {
    const costeItem = Math.floor(precio * Math.pow(itemVar, item));
    if (knCount >= costeItem) {
      const discount = costeItem;
      const newTotal = knCount - discount;
      setItem(item + 1);
      setKnCount(Math.floor(newTotal * 100) / 100);
    }
  };

  return {
    setNewItemQuantity,
  };
};
