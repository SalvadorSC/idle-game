import { useContext } from "react";
import CounterContext from "../context/CounterContext";

export const useUpgrades = () => {
  const { upgrades, setUpgrades, knCount, setKnCount } = useContext(
    CounterContext
  );

  const setNewUpgrade = (field, newUpgrade, price) => {
    if (!upgrades[field].includes(newUpgrade)) {
      setUpgrades({
        ...upgrades,
        [field]: [...upgrades[field], newUpgrade],
      });
      setKnCount(knCount - price);
    }
  };

  return {
    setNewUpgrade,
  };
};
