import { useContext } from "react";
import CounterContext from "../context/CounterContext";

export const useIncrementItem = () => {
  const { knCount, setKnCount } = useContext(CounterContext);

  const setNewItemQuantity = (
    item,
    setItem,
    precioGKn,
    precioTKn,
    precioBkn,
    precioCkn
  ) => {
    if (
      knCount.generalKn >= precioGKn &&
      knCount.technoKn >= precioTKn &&
      knCount.bioKn >= precioBkn &&
      knCount.cultureKn >= precioCkn
    ) {
      const newGeneralKn = knCount.generalKn - precioGKn;
      const newTechnoKn = knCount.technoKn - precioTKn;
      const newBioKn = knCount.bioKn - precioBkn;
      const newCultureKn = knCount.cultureKn - precioCkn;
      setItem(item + 1);
      setKnCount({
        ...knCount,
        generalKn: Math.floor(newGeneralKn * 100) / 100,
        technoKn: Math.floor(newTechnoKn * 100) / 100,
        bioKn: Math.floor(newBioKn * 100) / 100,
        cultureKn: Math.floor(newCultureKn * 100) / 100,
      });
    }
  };

  return {
    setNewItemQuantity,
  };
};
