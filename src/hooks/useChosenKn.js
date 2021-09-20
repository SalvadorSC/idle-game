import { useContext } from "react";
import CounterContext from "../context/CounterContext";

export const useChosenKn = () => {
  const { chosenBook } = useContext(CounterContext);
  const setChosenBookEffect = (multiplicador) => {
    let genrlKnCountWithEffects;
    let bioKnCountWithEffects;
    let technoKnCountWithEffects;
    let cultureKnCountWithEffects;
    switch (chosenBook) {
      case "General Culture I":
        genrlKnCountWithEffects = multiplicador * 100;
        bioKnCountWithEffects = multiplicador * 0;
        technoKnCountWithEffects = multiplicador * 0;
        cultureKnCountWithEffects = multiplicador * 0;
        break;
      case "General Culture II":
        genrlKnCountWithEffects = multiplicador * 1.25;
        bioKnCountWithEffects = multiplicador * 0;
        technoKnCountWithEffects = multiplicador * 0;
        cultureKnCountWithEffects = multiplicador * 0;
        break;
      case "General Culture III":
        genrlKnCountWithEffects = multiplicador * 1.5;
        bioKnCountWithEffects = multiplicador * 0;
        technoKnCountWithEffects = multiplicador * 0;
        cultureKnCountWithEffects = multiplicador * 0;
        break;
      case "Stuff 101":
        genrlKnCountWithEffects = multiplicador * 0;
        bioKnCountWithEffects = multiplicador * 0.5;
        technoKnCountWithEffects = multiplicador * 0.5;
        cultureKnCountWithEffects = multiplicador * 0;
        break;
      case "Technology for dummies":
        genrlKnCountWithEffects = multiplicador * 0.5;
        bioKnCountWithEffects = multiplicador * 0;
        technoKnCountWithEffects = multiplicador * 0.5;
        cultureKnCountWithEffects = multiplicador * 0;
        break;
      case "DIY at home":
        genrlKnCountWithEffects = multiplicador * 0.6;
        bioKnCountWithEffects = multiplicador * 0;
        technoKnCountWithEffects = multiplicador * 0.8;
        cultureKnCountWithEffects = multiplicador * 0;
        break;
      case "Introduction to Nature":
        genrlKnCountWithEffects = multiplicador * 0.5;
        bioKnCountWithEffects = multiplicador * 0.5;
        technoKnCountWithEffects = multiplicador * 0;
        cultureKnCountWithEffects = multiplicador * 0;
        break;
      case "Nature inside out":
        genrlKnCountWithEffects = multiplicador * 0.6;
        bioKnCountWithEffects = multiplicador * 0.8;
        technoKnCountWithEffects = multiplicador * 0;
        cultureKnCountWithEffects = multiplicador * 0;
        break;
      case "Novel":
        genrlKnCountWithEffects = multiplicador * 0.5;
        technoKnCountWithEffects = multiplicador * 0;
        bioKnCountWithEffects = multiplicador * 0;
        cultureKnCountWithEffects = multiplicador * 0.5;
        break;
      case "Poems of Rose":
        genrlKnCountWithEffects = multiplicador * 0;
        bioKnCountWithEffects = multiplicador * 0;
        technoKnCountWithEffects = multiplicador * 0;
        cultureKnCountWithEffects = multiplicador * 1;
        break;
      case "History about humanity I":
        genrlKnCountWithEffects = multiplicador * 0.5;
        bioKnCountWithEffects = multiplicador * 0;
        technoKnCountWithEffects = multiplicador * 0;
        cultureKnCountWithEffects = multiplicador * 1;
        break;
      default:
        genrlKnCountWithEffects = multiplicador * 0.25;
        bioKnCountWithEffects = multiplicador * 0.25;
        technoKnCountWithEffects = multiplicador * 0.25;
        cultureKnCountWithEffects = multiplicador * 0.25;
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
