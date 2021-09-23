import useSound from "use-sound";
import { useChosenKn } from "./useChosenKn";
import soundUrl1 from "../assets/page-flip-01a.mp3";
import soundUrl2 from "../assets/page-flip-03.mp3";

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
  mute,
  squirrels,
  maxKn,
  setMaxKn,
  chosenBook,
  pageTrees,
}) => {
  const sounds = [soundUrl1, soundUrl2];
  const [play] = useSound(sounds[1], { volume: mute ? 0 : 0.05 });
  const { setChosenBookEffect } = useChosenKn(chosenBook);
  const totalKnOfThisRun =
    totalKnCountOfThisRun.generalKn +
    totalKnCountOfThisRun.bioKn +
    totalKnCountOfThisRun.technoKn +
    totalKnCountOfThisRun.cultureKn;
  const incrementEverySecond = () => {
    setMaxKn({
      generalKn:
        maxKn.generalKn < knCount.generalKn
          ? knCount.generalKn
          : maxKn.generalKn,
      cultureKn:
        maxKn.cultureKn < knCount.cultureKn
          ? knCount.cultureKn
          : maxKn.cultureKn,
      bioKn: maxKn.bioKn < knCount.bioKn ? knCount.bioKn : maxKn.bioKn,
      technoKn:
        maxKn.technoKn < knCount.technoKn ? knCount.technoKn : maxKn.technoKn,
    });
    const {
      genrlKnCountWithEffects,
      technoKnCountWithEffects,
    } = setChosenBookEffect(automatron1);
    const {
      genrlKnCountWithEffects: genrlKnCountWithSquirrelEffects,
      bioKnCountWithEffects,
    } = setChosenBookEffect(squirrels);
    const {
      bioKnCountWithEffects: bioKnCountWithPageTreeEffects,
      technoKnCountWithEffects: technoKnCountWithPageTreeEffects,
    } = setChosenBookEffect(pageTrees);
    setKnCount({
      ...knCount,
      generalKn:
        knCount.generalKn +
        Math.floor(
          (genrlKnCountWithEffects + genrlKnCountWithSquirrelEffects) * 100
        ) /
          100,
      bioKn:
        knCount.bioKn +
        Math.floor(
          (bioKnCountWithEffects + bioKnCountWithPageTreeEffects * 2) * 100
        ) /
          100,
      technoKn:
        knCount.technoKn +
        Math.floor(
          (technoKnCountWithEffects + technoKnCountWithPageTreeEffects * 2) *
            100
        ) /
          100,
    });
    setTotalKnCountOfThisRun({
      ...totalKnCountOfThisRun,
      generalKn:
        totalKnCountOfThisRun.generalKn +
        Math.floor(
          (genrlKnCountWithEffects + genrlKnCountWithSquirrelEffects) * 100
        ) /
          100,
      bioKn:
        knCount.bioKn +
        Math.floor(
          (bioKnCountWithEffects + bioKnCountWithPageTreeEffects * 2) * 100
        ) /
          100,
      technoKn:
        knCount.technoKn +
        Math.floor(
          (technoKnCountWithEffects + technoKnCountWithPageTreeEffects * 2) *
            100
        ) /
          100,
    });
    setTotalKnOfAllTime({
      ...totalKnCountOfThisRun,
      generalKn:
        knCount.generalKn +
        Math.floor(
          (genrlKnCountWithEffects + genrlKnCountWithSquirrelEffects) * 100
        ) /
          100,
      bioKn:
        knCount.bioKn +
        Math.floor(
          (bioKnCountWithEffects + bioKnCountWithPageTreeEffects * 2) * 100
        ) /
          100,
      technoKn:
        knCount.technoKn +
        Math.floor(
          (technoKnCountWithEffects + technoKnCountWithPageTreeEffects * 2) *
            100
        ) /
          100,
    });

    // Update Progress Bar
    if (totalKnOfThisRun >= goal) {
      setGoal(goal * 10);
    }
    // Sound Effect
    play();
  };

  return {
    knCount,
    automatron1,
    multiplicador,
    incrementEverySecond,
  };
};
