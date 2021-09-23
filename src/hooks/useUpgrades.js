import { useContext } from "react";
import CounterContext from "../context/CounterContext";

export const useUpgrades = () => {
  const { knCount, setKnCount, upgrades, setUpgrades } = useContext(
    CounterContext
  );

  const setNewUpgrade = (field, newUpgrade, price) => {
    if (
      !upgrades[field].includes(newUpgrade) &&
      knCount.generalKn >= price[0] &&
      knCount.bioKn >= price[1] &&
      knCount.technoKn >= price[2] &&
      knCount.cultureKn >= price[3]
    ) {
      setUpgrades({
        ...upgrades,
        [field]: [...upgrades[field], newUpgrade],
      });
      setKnCount({
        ...knCount,
        generalKn: knCount.generalKn - price[0],
        bioKn: knCount.bioKn - price[1],
        technoKn: knCount.technoKn - price[2],
        cultureKn: knCount.cultureKn - price[3],
      });
    }
  };

  return {
    setNewUpgrade,
  };
};
