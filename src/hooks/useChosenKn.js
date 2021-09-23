export const useChosenKn = (libro) => {
  const setChosenBookEffect = (item) => {
    let genrlKnCountWithEffects;
    let bioKnCountWithEffects;
    let technoKnCountWithEffects;
    let cultureKnCountWithEffects;
    switch (libro) {
      case "General Culture I":
        genrlKnCountWithEffects = item * 1;
        bioKnCountWithEffects = item * 0;
        technoKnCountWithEffects = item * 0;
        cultureKnCountWithEffects = item * 0;
        break;
      case "General Culture II":
        genrlKnCountWithEffects = item * 1.25;
        bioKnCountWithEffects = item * 0;
        technoKnCountWithEffects = item * 0;
        cultureKnCountWithEffects = item * 0;
        break;
      case "General Culture III":
        genrlKnCountWithEffects = item * 1.5;
        bioKnCountWithEffects = item * 0;
        technoKnCountWithEffects = item * 0;
        cultureKnCountWithEffects = item * 0;
        break;
      case "Stuff 101":
        genrlKnCountWithEffects = item * 0;
        bioKnCountWithEffects = item * 0.5;
        technoKnCountWithEffects = item * 0.5;
        cultureKnCountWithEffects = item * 0;
        break;
      case "Technology for dummies":
        genrlKnCountWithEffects = item * 0.5;
        bioKnCountWithEffects = item * 0;
        technoKnCountWithEffects = item * 0.5;
        cultureKnCountWithEffects = item * 0;
        break;
      case "DIY at home":
        genrlKnCountWithEffects = item * 1;
        bioKnCountWithEffects = item * 0;
        technoKnCountWithEffects = item * 1;
        cultureKnCountWithEffects = item * 0;
        break;
      case "Introduction to Nature":
        genrlKnCountWithEffects = item * 0.5;
        bioKnCountWithEffects = item * 0.5;
        technoKnCountWithEffects = item * 0;
        cultureKnCountWithEffects = item * 0;
        break;
      case "Nature inside out":
        genrlKnCountWithEffects = item * 1;
        bioKnCountWithEffects = item * 1;
        technoKnCountWithEffects = item * 0;
        cultureKnCountWithEffects = item * 0;
        break;
      case "Novel":
        genrlKnCountWithEffects = item * 0.5;
        technoKnCountWithEffects = item * 0;
        bioKnCountWithEffects = item * 0;
        cultureKnCountWithEffects = item * 0.5;
        break;
      case "Poems of Rose":
        genrlKnCountWithEffects = item * 0;
        bioKnCountWithEffects = item * 0;
        technoKnCountWithEffects = item * 0;
        cultureKnCountWithEffects = item * 1;
        break;
      case "History about humanity I":
        genrlKnCountWithEffects = item * 0.5;
        bioKnCountWithEffects = item * 0;
        technoKnCountWithEffects = item * 0;
        cultureKnCountWithEffects = item * 1;
        break;
      case "The grand book of animals":
        genrlKnCountWithEffects = item * 0;
        bioKnCountWithEffects = item * 1.25;
        technoKnCountWithEffects = item * 0;
        cultureKnCountWithEffects = item * 0;
        break;
      case "Learning how to teach":
        genrlKnCountWithEffects = item * 0;
        bioKnCountWithEffects = item * 0;
        technoKnCountWithEffects = item * 0;
        cultureKnCountWithEffects = item * 1.25;
        break;
      case "The secret life of trees":
        genrlKnCountWithEffects = item * 0.25;
        bioKnCountWithEffects = item * 1.5;
        technoKnCountWithEffects = item * 0;
        cultureKnCountWithEffects = item * 0;
        break;
      case "Steps into robotics":
        genrlKnCountWithEffects = item * 0.25;
        bioKnCountWithEffects = item * 0;
        technoKnCountWithEffects = item * 1.5;
        cultureKnCountWithEffects = item * 0;
        break;
      default:
        genrlKnCountWithEffects = item * 0.25;
        bioKnCountWithEffects = item * 0.25;
        technoKnCountWithEffects = item * 0.25;
        cultureKnCountWithEffects = item * 0.25;
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
