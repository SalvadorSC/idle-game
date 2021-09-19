import { useContext } from "react";
import CounterContext from "../context/CounterContext";

export const useChosenKn = () => {
  const { chosenBook } = useContext(CounterContext);
  const setChosenBookEffect = (efecto) => {
    let genrlKnCountWithEffects;
    let bioKnCountWithEffects;
    let technoKnCountWithEffects;
    let cultureKnCountWithEffects;
    switch (chosenBook) {
      case "General Culture I":
        genrlKnCountWithEffects = efecto * 1.5;
        bioKnCountWithEffects = efecto * 0;
        technoKnCountWithEffects = efecto * 0;
        cultureKnCountWithEffects = efecto * 0;
        break;
      case "General Culture II":
        genrlKnCountWithEffects = efecto * 1.75;
        bioKnCountWithEffects = efecto * 0;
        technoKnCountWithEffects = efecto * 0;
        cultureKnCountWithEffects = efecto * 0;
        break;
      case "General Culture III":
        genrlKnCountWithEffects = efecto * 2;
        bioKnCountWithEffects = efecto * 0;
        technoKnCountWithEffects = efecto * 0;
        cultureKnCountWithEffects = efecto * 0;
        break;
      case "Stuff 101":
        genrlKnCountWithEffects = efecto * 0;
        bioKnCountWithEffects = efecto * 0.5;
        technoKnCountWithEffects = efecto * 0.5;
        cultureKnCountWithEffects = efecto * 0;
        break;
      case "Technology for dummies":
        genrlKnCountWithEffects = efecto * 0.5;
        bioKnCountWithEffects = efecto * 0;
        technoKnCountWithEffects = efecto * 0.5;
        cultureKnCountWithEffects = efecto * 0;
        break;
      case "DIY at home":
        genrlKnCountWithEffects = efecto * 0.6;
        bioKnCountWithEffects = efecto * 0;
        technoKnCountWithEffects = efecto * 0.8;
        cultureKnCountWithEffects = efecto * 0;
        break;
      case "Introduction to Nature":
        genrlKnCountWithEffects = efecto * 0.5;
        bioKnCountWithEffects = efecto * 0.5;
        technoKnCountWithEffects = efecto * 0;
        cultureKnCountWithEffects = efecto * 0;
        break;
      case "Nature inside out":
        genrlKnCountWithEffects = efecto * 0.6;
        bioKnCountWithEffects = efecto * 0.8;
        technoKnCountWithEffects = efecto * 0;
        cultureKnCountWithEffects = efecto * 0;
        break;
      case "Novel":
        genrlKnCountWithEffects = efecto * 0.5;
        technoKnCountWithEffects = efecto * 0;
        bioKnCountWithEffects = efecto * 0;
        cultureKnCountWithEffects = efecto * 0.5;
        break;
      case "Poems of Rose":
        genrlKnCountWithEffects = efecto * 0;
        bioKnCountWithEffects = efecto * 0;
        technoKnCountWithEffects = efecto * 0;
        cultureKnCountWithEffects = efecto * 1;
        break;
      case "History about humanity I":
        genrlKnCountWithEffects = efecto * 0.5;
        bioKnCountWithEffects = efecto * 0;
        technoKnCountWithEffects = efecto * 0;
        cultureKnCountWithEffects = efecto * 1;
        break;
      default:
        genrlKnCountWithEffects = efecto * 10;
        bioKnCountWithEffects = efecto * 0;
        technoKnCountWithEffects = efecto * 0;
        cultureKnCountWithEffects = efecto * 0;
    }
    return {
      genrlKnCountWithEffects,
      bioKnCountWithEffects,
      technoKnCountWithEffects,
      cultureKnCountWithEffects,
    };
  };

  return {
    setChosenBookEffect,
  };
};
