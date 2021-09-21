import { useContext } from "react";
import CounterContext from "../context/CounterContext";

export const useIncrementItem = () => {
  const { knCount, setKnCount } = useContext(CounterContext);

  const setNewItemQuantity = (
    item,
    setItem,
    itemVar,
    precioGKn,
    precioTKn,
    precioBkn,
    precioCkn
  ) => {
    debugger;
    const costeItemGkn = Math.floor(precioGKn * Math.pow(itemVar, item));
    const costeItemTkn = Math.floor(precioTKn * Math.pow(itemVar, item));
    const costeItemBkn = Math.floor(precioBkn * Math.pow(itemVar, item));
    const costeItemCkn = Math.floor(precioCkn * Math.pow(itemVar, item));
    if (
      knCount.generalKn >= costeItemGkn &&
      knCount.technoKn >= costeItemTkn &&
      knCount.bioKn >= costeItemBkn &&
      knCount.cultureKn >= costeItemCkn
    ) {
      const newGeneralKn = knCount.generalKn - costeItemGkn;
      const newTechnoKn = knCount.technoKn - costeItemTkn;
      const newBioKn = knCount.bioKn - costeItemBkn;
      const newCultureKn = knCount.cultureKn - costeItemCkn;
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
