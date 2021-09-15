import { useContext } from "react";
import CounterContext from "../context/CounterContext";

export const useIncrementItem = () => {
  const { count, setCount } = useContext(CounterContext);

  const setNewItemQuantity = (item, setItem, itemVar, precio) => {
    const costeItem = Math.floor(precio * Math.pow(itemVar, item));
    if (count >= costeItem) {
      const discount = costeItem;
      const newTotal = count - discount;
      setItem(item + 1);
      setCount(Math.floor(newTotal * 100) / 100);
    }
  };

  return {
    setNewItemQuantity,
  };
};
