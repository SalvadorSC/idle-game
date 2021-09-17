import { useChosenKn } from "./useChosenKn";

export const useContador = ({
  goal,
  setGoal,
  knCount,
  setKnCount,
  automatron1,
  multiplicador,
  setTotalKnOfAllTime,
  totalKnCountOfThisRun,
  setTotalKnCountOfThisRun,
}) => {
  const { setChosenBookEffect } = useChosenKn();

  const totalKnOfThisRun =
    totalKnCountOfThisRun.generalKn +
    totalKnCountOfThisRun.bioKn +
    totalKnCountOfThisRun.technoKn +
    totalKnCountOfThisRun.cultureKn;
  const incrementEverySecond = (upgrades) => {
    let efectoAutomatron1;
    if (upgrades.technology.length === 0) {
      efectoAutomatron1 = automatron1 * 1.5;
    } else if (upgrades.technology.includes("DIY at home")) {
      efectoAutomatron1 = automatron1 * 2.5;
    } else {
      efectoAutomatron1 = automatron1 * 1;
    }
    const {
      genrlKnCountWithEffects,
      bioKnCountWithEffects,
      technoKnCountWithEffects,
      cultureKnCountWithEffects,
    } = setChosenBookEffect(efectoAutomatron1);

    setKnCount({
      ...knCount,
      generalKn:
        knCount.generalKn + Math.floor(genrlKnCountWithEffects * 100) / 100,
      bioKn: knCount.bioKn + Math.floor(bioKnCountWithEffects * 100) / 100,
      technoKn:
        knCount.technoKn + Math.floor(technoKnCountWithEffects * 100) / 100,
      cultureKn:
        knCount.cultureKn + Math.floor(cultureKnCountWithEffects * 100) / 100,
    });
    if (efectoAutomatron1 > 0) {
      setTotalKnCountOfThisRun({
        ...totalKnCountOfThisRun,
        generalKn:
          totalKnCountOfThisRun.generalKn +
          Math.floor(genrlKnCountWithEffects * 100) / 100,
        bioKn:
          totalKnCountOfThisRun.bioKn +
          Math.floor(bioKnCountWithEffects * 100) / 100,
        technoKn:
          totalKnCountOfThisRun.technoKn +
          Math.floor(technoKnCountWithEffects * 100) / 100,
        cultureKn:
          totalKnCountOfThisRun.cultureKn +
          Math.floor(cultureKnCountWithEffects * 100) / 100,
      });
      setTotalKnOfAllTime({
        ...totalKnCountOfThisRun,
        generalKn:
          totalKnCountOfThisRun.generalKn +
          Math.floor(genrlKnCountWithEffects * 100) / 100,
        bioKn:
          totalKnCountOfThisRun.bioKn +
          Math.floor(bioKnCountWithEffects * 100) / 100,
        technoKn:
          totalKnCountOfThisRun.technoKn +
          Math.floor(technoKnCountWithEffects * 100) / 100,
        cultureKn:
          totalKnCountOfThisRun.cultureKn +
          Math.floor(cultureKnCountWithEffects * 100) / 100,
      });
    }
    // Update Progress Bar
    if (totalKnOfThisRun >= goal) {
      setGoal(goal * 10);
    }
  };

  return {
    knCount,
    automatron1,
    multiplicador,
    incrementEverySecond,
  };
};
