import React, { createContext, useState } from "react";

const StatsContext = createContext();

export const StatsProvider = ({ children }) => {
  let savegame = JSON.parse(localStorage.getItem("save"));

  const [totalKnCountOfThisRun, setTotalKnCountOfThisRun] = useState(
    savegame
      ? savegame.totalKnCountOfThisRun
      : { generalKn: 0, cultureKn: 0, bioKn: 0, technoKn: 0 }
  );
  const [clicks, setClicks] = useState(savegame ? savegame.clicks : 0);
  const [totalClicksOfAllTime, setTotalClicksOfAllTime] = useState(
    savegame ? savegame.totalClicksOfAllTime : 0
  );
  const [totalKnOfAllTime, setTotalKnOfAllTime] = useState(
    savegame
      ? savegame.totalKnOfAllTime
      : {
          generalKn: 0,
          cultureKn: 0,
          bioKn: 0,
          technoKn: 0,
        }
  );
  const [resets, setResets] = useState(savegame ? savegame.resets : 0);
  const [potenciaClick, setPotenciaClick] = useState(
    savegame ? savegame.potenciaClick : 0
  );
  const [knForfeitedAtReset, setKnForfeitedAtReset] = useState(
    savegame
      ? savegame.knForfeitedAtReset
      : {
          generalKn: 0,
          cultureKn: 0,
          bioKn: 0,
          technoKn: 0,
        }
  );
  const [maxKn, setMaxKn] = useState(
    savegame
      ? savegame.maxKn
      : {
          generalKn: 0,
          cultureKn: 0,
          bioKn: 0,
          technoKn: 0,
        }
  );
  const [goal, setGoal] = useState(savegame ? savegame.goal : 100);

  return (
    <StatsContext.Provider
      value={{
        goal,
        setGoal,
        clicks,
        setClicks,
        totalKnCountOfThisRun,
        setTotalKnCountOfThisRun,
        totalClicksOfAllTime,
        setTotalClicksOfAllTime,
        totalKnOfAllTime,
        setTotalKnOfAllTime,
        knForfeitedAtReset,
        setKnForfeitedAtReset,
        potenciaClick,
        setPotenciaClick,
        resets,
        setResets,
        maxKn,
        setMaxKn,
      }}
    >
      {children}
    </StatsContext.Provider>
  );
};

export default StatsContext;
