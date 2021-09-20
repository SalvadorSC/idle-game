import { useContext } from "react";
import CounterContext from "../context/CounterContext";

export const useUpgrades = () => {
  const { upgrades, setUpgrades, knCount, setKnCount } = useContext(
    CounterContext
  );

  const setNewUpgrade = (field, newUpgrade, price) => {
    if (!upgrades[field].includes(newUpgrade) && knCount.generalKn >= price) {
      setUpgrades({
        ...upgrades,
        [field]: [...upgrades[field], newUpgrade],
      });
      setKnCount({ ...knCount, generalKn: knCount.generalKn - price });
      // console.log(knCount.generalKn - price);
      // console.log(knCount);
    }
  };

  return {
    setNewUpgrade,
  };
};
