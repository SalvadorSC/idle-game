export const useChosenKn = (libro) => {
  const setChosenBookEffect = (multiplicador) => {
    let genrlKnCountWithEffects;
    let bioKnCountWithEffects;
    let technoKnCountWithEffects;
    let cultureKnCountWithEffects;

    switch (libro) {
      case "General Culture I":
        genrlKnCountWithEffects = multiplicador * 1;
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
        genrlKnCountWithEffects = multiplicador * 1;
        bioKnCountWithEffects = multiplicador * 0;
        technoKnCountWithEffects = multiplicador * 1;
        cultureKnCountWithEffects = multiplicador * 0;
        break;
      case "Introduction to Nature":
        genrlKnCountWithEffects = multiplicador * 0.5;
        bioKnCountWithEffects = multiplicador * 0.5;
        technoKnCountWithEffects = multiplicador * 0;
        cultureKnCountWithEffects = multiplicador * 0;
        break;
      case "Nature inside out":
        genrlKnCountWithEffects = multiplicador * 1;
        bioKnCountWithEffects = multiplicador * 1;
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
      case "Nature's secrets":
        genrlKnCountWithEffects = multiplicador * 0;
        bioKnCountWithEffects = multiplicador * 1.25;
        technoKnCountWithEffects = multiplicador * 0;
        cultureKnCountWithEffects = multiplicador * 0;
        break;
      case "Learning how to teach":
        genrlKnCountWithEffects = multiplicador * 0;
        bioKnCountWithEffects = multiplicador * 0;
        technoKnCountWithEffects = multiplicador * 0;
        cultureKnCountWithEffects = multiplicador * 1.25;
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
