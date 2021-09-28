import React, { createContext, useReducer } from "react";

const MiscContext = createContext();
const initialState = {
  mute: true,
  isPlaying: true,
  detailsInfo: "hehe",
  volume: 0,
  pomodoroMessage: "Start Pomodoro",
  pomodoroClass: "unactive-pomodoro",
};

const actions = {
  SET_MUTE: "SET_MUTE",
  SET_ISPLAYING: "SET_ISPLAYING",
  SET_VOLUME: "SET_VOLUME",
  SET_POMODOROMESSAGE: "SET_POMODOROMESSAGE",
  SET_DETAILSINFO: "SET_DETAILSINFO",
  SET_POMODOROCLASS: "SET_POMODOROCLASS",
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
    case actions.SET_POMODOROMESSAGE:
      return { ...state, pomodoroMessage: action.value };
    case actions.SET_POMODOROCLASS:
      return { ...state, pomodoroClass: action.value };
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
    pomodoroMessage: state.pomodoroMessage,
    pomodoroClass: state.pomodoroClass,
    setMute: (value) => {
      dispatch({ type: actions.SET_MUTE, value });
    },
    setIsPlaying: (value) => {
      dispatch({ type: actions.SET_ISPLAYING, value });
    },
    setVolume: (value) => {
      dispatch({ type: actions.SET_VOLUME, value });
    },
    setPomodoroMessage: (value) => {
      dispatch({ type: actions.SET_POMODOROMESSAGE, value });
    },
    setPomodoroClass: (value) => {
      dispatch({ type: actions.SET_POMODOROCLASS, value });
    },
    setDetailsInfo: (value) => {
      dispatch({ type: actions.SET_DETAILSINFO, value });
    },
  };

  return <MiscContext.Provider value={value}>{children}</MiscContext.Provider>;
};

export default MiscContext;
