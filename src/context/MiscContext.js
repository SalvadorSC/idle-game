import React, { createContext, useState } from "react";

const MiscContext = createContext();

export const MiscProvider = ({ children }) => {
  // MISCELANEAOUS/USEFUL
  const [mute, setMute] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [detailsInfo, setDetailsInfo] = useState("Hehe");
  const [volume, setVolume] = useState(0);

  return (
    <MiscContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        volume,
        setVolume,
        mute,
        setMute,
        detailsInfo,
        setDetailsInfo,
      }}
    >
      {children}
    </MiscContext.Provider>
  );
};

export default MiscContext;
