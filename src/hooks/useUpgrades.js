import { useContext } from "react";
import CounterContext from "../context/CounterContext";

export const useUpgrades = () => {
  const { upgrades, setUpgrades, count, setCount } = useContext(CounterContext);

  const setNewUpgrade = (field, newUpgrade, price) => {
    if (!upgrades[field].includes(newUpgrade)) {
      setUpgrades({
        ...upgrades,
        [field]: [...upgrades[field], newUpgrade],
      });
      setCount(count - price);
    }
  };

  return {
    setNewUpgrade,
  };
};
