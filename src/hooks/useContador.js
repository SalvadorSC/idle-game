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
}) => {
  const sounds = [soundUrl1, soundUrl2];
  const [play] = useSound(sounds[1], { volume: mute ? 0 : 0.05 });
  const { setChosenBookEffect } = useChosenKn();
  const totalKnOfThisRun =
    totalKnCountOfThisRun.generalKn +
    totalKnCountOfThisRun.bioKn +
    totalKnCountOfThisRun.technoKn +
    totalKnCountOfThisRun.cultureKn;
  const incrementEverySecond = () => {
    const {
      genrlKnCountWithEffects,
      bioKnCountWithEffects,
      technoKnCountWithEffects,
      // UNTIL THERE'S AUTOMATRON or SQUIRREL EQUIVALENT for CULTURE
      /* cultureKnCountWithEffects, */
    } = setChosenBookEffect(automatron1);

    setKnCount({
      ...knCount,
      generalKn:
        knCount.generalKn + Math.floor(genrlKnCountWithEffects * 100) / 100,
      bioKn:
        squirrels > 0
          ? knCount.bioKn + Math.floor(bioKnCountWithEffects * 100) / 100
          : knCount.bioKn,
      technoKn:
        automatron1 > 0
          ? knCount.technoKn + Math.floor(technoKnCountWithEffects * 100) / 100
          : knCount.technoKn,
      // UNTIL THERE'S AUTOMATRON or SQUIRREL EQUIVALENT for CULTURE
      /* cultureKn:
        knCount.cultureKn + Math.floor(cultureKnCountWithEffects * 100) / 100, */
    });
    setTotalKnCountOfThisRun({
      ...totalKnCountOfThisRun,
      generalKn:
        totalKnCountOfThisRun.generalKn +
        Math.floor(genrlKnCountWithEffects * 100) / 100,
      bioKn:
        squirrels > 0
          ? knCount.bioKn + Math.floor(bioKnCountWithEffects * 100) / 100
          : knCount.bioKn,
      technoKn:
        automatron1 > 0
          ? knCount.technoKn + Math.floor(technoKnCountWithEffects * 100) / 100
          : knCount.technoKn,
      // UNTIL THERE'S AUTOMATRON or SQUIRREL EQUIVALENT for CULTURE
      /* cultureKn:
        totalKnCountOfThisRun.cultureKn +
        Math.floor(cultureKnCountWithEffects * 100) / 100, */
    });
    setTotalKnOfAllTime({
      ...totalKnCountOfThisRun,
      generalKn:
        automatron1 > 0
          ? knCount.generalKn + Math.floor(technoKnCountWithEffects * 100) / 100
          : knCount.generalKn,
      bioKn:
        squirrels > 0
          ? knCount.bioKn + Math.floor(bioKnCountWithEffects * 100) / 100
          : knCount.bioKn,
      technoKn:
        automatron1 > 0
          ? knCount.technoKn + Math.floor(technoKnCountWithEffects * 100) / 100
          : knCount.technoKn,
      // UNTIL THERE'S AUTOMATRON or SQUIRREL EQUIVALENT for CUTURE
      /* cultureKn:
        totalKnCountOfThisRun.cultureKn +
        Math.floor(cultureKnCountWithEffects * 100) / 100, */
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
