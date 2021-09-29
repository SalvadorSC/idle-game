import React, { createContext, useReducer } from "react";

const MiscContext = createContext();
const initialState = {
  mute: true,
  isPlaying: true,
  detailsInfo: "hehe",
  volume: 0,
  buffMessage: "Extreme Focus",
  buffClass: "",
};

const actions = {
  SET_MUTE: "SET_MUTE",
  SET_ISPLAYING: "SET_ISPLAYING",
  SET_VOLUME: "SET_VOLUME",
  SET_buffMessage: "SET_buffMessage",
  SET_DETAILSINFO: "SET_DETAILSINFO",
  SET_buffClass: "SET_buffClass",
};

function reducer(state, action) {
  switch (action.type) {
    case actions.SET_MUTE:
      return { ...state, mute: action.value };
    case actions.SET_ISPLAYING:
      return { ...state, isPlaying: action.value };
    case actions.SET_VOLUME:
      return { ...state, volume: action.value };
    case actions.SET_DETAILSINFO:
      return { ...state, detailsInfo: action.value };
    case actions.SET_buffMessage:
      return { ...state, buffMessage: action.value };
    case actions.SET_buffClass:
      return { ...state, buffClass: action.value };
    default:
      return state;
  }
}
export const MiscProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    mute: state.mute,
    volume: state.volume,
    isPlaying: state.isPlaying,
    detailsInfo: state.detailsInfo,
    buffMessage: state.buffMessage,
    buffClass: state.buffClass,
    setMute: (value) => {
      dispatch({ type: actions.SET_MUTE, value });
    },
    setIsPlaying: (value) => {
      dispatch({ type: actions.SET_ISPLAYING, value });
    },
    setVolume: (value) => {
      dispatch({ type: actions.SET_VOLUME, value });
    },
    setBuffMessage: (value) => {
      dispatch({ type: actions.SET_buffMessage, value });
    },
    setBuffClass: (value) => {
      dispatch({ type: actions.SET_buffClass, value });
    },
    setDetailsInfo: (value) => {
      dispatch({ type: actions.SET_DETAILSINFO, value });
    },
  };

  return <MiscContext.Provider value={value}>{children}</MiscContext.Provider>;
};

export default MiscContext;
