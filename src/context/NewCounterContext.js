import React, { createContext, useEffect, useReducer } from "react";
import { useOfflineProduction } from "../hooks/useOfflineProduction";
let savegame = JSON.parse(localStorage.getItem("save"));

const CounterContext = createContext();
const baseUpgrades = {
  multiplicador: ["General Culture I"],
  technology: [],
  nature: [],
  culture: [],
};
const initialState = {
  multiplicador: savegame ? savegame.multiplicador : 1,
  automatron1: savegame ? savegame.automatron1 : 0,
  squirrels: savegame ? savegame.squirrels : 0,
  pageTrees: savegame ? savegame.pageTrees : 0,
  knCount: savegame
    ? savegame.knCount
    : { generalKn: 0, cultureKn: 0, bioKn: 0, technoKn: 0 },
  upgrades: savegame ? savegame.upgrades : baseUpgrades,
  chosenBook: savegame ? savegame.chosenBook : "General Culture I",
  lastLogin: savegame ? savegame.lastLogin : 0,
};

///Calculate OFFLINE PRODUCTION

const actions = {
  SET_MULTIPLICADOR: "SET_MULTIPLICADOR",
  SET_AUTOMATRON1: "SET_AUTOMATRON1",
  SET_SQUIRRELS: "SET_SQUIRRELS",
  SET_PAGETREES: "SET_PAGETREES",
  SET_KNCOUNT: "SET_KNCOUNT",
  SET_UPGRADES: "SET_UPGRADES",
  SET_CHOSENBOOK: "SET_CHOSENBOOK",
  SET_LASTLOGIN: "SET_LASTLOGIN",
  SET_VOLUME: "SET_VOLUME",
};

function reducer(state, action) {
  switch (action.type) {
    case actions.SET_MULTIPLICADOR:
      return { ...state, mute: action.value };
    case actions.SET_AUTOMATRON1:
      return { ...state, isPlaying: action.value };
    case actions.SET_SQUIRRELS:
      return { ...state, volume: action.value };
    case actions.SET_PAGETREES:
      return { ...state, detailsInfo: action.value };
    case actions.SET_KNCOUNT:
      return { ...state, detailsInfo: action.value };
    case actions.SET_UPGRADES:
      return { ...state, detailsInfo: action.value };
    case actions.SET_CHOSENBOOK:
      return { ...state, detailsInfo: action.value };
    case actions.SET_LASTLOGIN:
      return { ...state, detailsInfo: action.value };
    case actions.SET_VOLUME:
      return { ...state, detailsInfo: action.value };
    default:
      return state;
  }
}
export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const dependencies = {
    knCount: state.knCount,
    chosenBook: state.chosenBook,
    multiplicador: state.multiplicador,
    lastLogin: state.lastLogin,
    setKnCount: (value) => {
      dispatch({ type: actions.SET_KNCOUNT, value });
    },
    setLastLogin: (value) => {
      dispatch({ type: actions.SET_LASTLOGIN, value });
    },
  };

  const {
    showBuffer,
    generatedKn,
    showGeneratedKnAlert,
    setShowBuffer,
    setGeneratedKn,
    setRewardsTaken,
    setShowGeneratedKnAlert,
    calculateOfflineProduction,
  } = useOfflineProduction(dependencies);
  useEffect(() => {
    calculateOfflineProduction();
  }, [calculateOfflineProduction]);
  ///
  const value = {
    knCount: state.knCount,
    chosenBook: state.chosenBook,
    automatron1: state.automatron1,
    multiplicador: state.multiplicador,
    volume: state.volume,
    pageTrees: state.pageTrees,
    upgrades: state.upgrades,
    squirrels: state.squirrels,
    lastLogin: state.lastLogin,
    setKnCount: (value) => {
      dispatch({ type: actions.SET_KNCOUNT, value });
    },
    setChosenBook: (value) => {
      dispatch({ type: actions.SET_CHOSENBOOK, value });
    },
    setAutomatron1: (value) => {
      dispatch({ type: actions.SET_AUTOMATRON1, value });
    },
    setMultiplicador: (value) => {
      dispatch({ type: actions.SET_MULTIPLICADOR, value });
    },
    setVolume: (value) => {
      dispatch({ type: actions.SET_VOLUME, value });
    },
    setSquirrels: (value) => {
      dispatch({ type: actions.SET_SQUIRRELS, value });
    },
    setPageTrees: (value) => {
      dispatch({ type: actions.SET_PAGETREES, value });
    },
    setUpgrades: (value) => {
      dispatch({ type: actions.SET_UPGRADES, value });
    },
    setLastLogin: (value) => {
      dispatch({ type: actions.SET_LASTLOGIN, value });
    },
    generatedKn,
    setGeneratedKn,
    showBuffer,
    setShowBuffer,
    setShowGeneratedKnAlert,
    showGeneratedKnAlert,
    setRewardsTaken,
    baseUpgrades,
  };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

export default CounterContext;
