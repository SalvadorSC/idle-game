import React, { useContext } from "react";
import CounterContext from "../../context/CounterContext";
import StatsContext from "../../context/StatsContext";
import "./Stats.css";

export const Stats = () => {
  const { automatron1, multiplicador, squirrels, pageTrees } = useContext(
    CounterContext
  );
  const {
    goal,
    totalKnCountOfThisRun,
    clicks,
    resets,
    totalClicksOfAllTime,
    totalKnOfAllTime,
    knForfeitedAtReset,
  } = useContext(StatsContext);

  const totalKnOfThisRun =
    totalKnCountOfThisRun.generalKn +
    totalKnCountOfThisRun.bioKn +
    totalKnCountOfThisRun.technoKn +
    totalKnCountOfThisRun.cultureKn;
  const totalKnOfAllRuns =
    totalKnOfAllTime.generalKn +
    totalKnOfAllTime.bioKn +
    totalKnOfAllTime.technoKn +
    totalKnOfAllTime.cultureKn;

  return (
    <>
      <div className="statistics-section">
        <div className="stats-section">
          <p className="stats-section-title">Statistics</p>
          <div className="stats-container">
            <p>Total clicks of this run: {clicks} clicks</p>
            <p>Total clicks of all time: {totalClicksOfAllTime} clicks</p>
            <p>Total Knowledge of this run: {totalKnOfThisRun} kN</p>
            <p>Total Knowledge of all time: {totalKnOfAllRuns} kN</p>
            <p>
              Total kN forfeited by reset: {knForfeitedAtReset.generalKn} kN
            </p>
          </div>
        </div>
        <div className="achievements-section">
          <p className="stats-section-title">Achievements </p>
          <div className="achievement-container">
            <p className="achievement-box">{goal > 100 && "100kN"}</p>
            <p className="achievement-box">{goal > 1000 && "1.000kN"}</p>
            <p className="achievement-box">{goal > 100000 && "100.000kN"}</p>
            <p className="achievement-box">{goal > 1000000 && "1.000.000kN"}</p>
            <p className="achievement-box">{clicks >= 500 && "500 clicks"}</p>
            <p className="achievement-box">
              {clicks >= 10000 && "10.000 clicks"}
            </p>
            <p className="achievement-box">
              {clicks >= 100000 && "100.000 clicks"}
            </p>
            <p className="achievement-box">
              {goal >= 1000000000 && "1.000.000.000"}
            </p>

            <p className="achievement-box">
              {goal > 10000000000 && "10.000.000.000"}
            </p>

            <p className="achievement-box">
              {goal >= 100000000000 && "100.000.000.000"}
            </p>
            {multiplicador > 1 && <p className="achievement-box">1 MX</p>}
            <p className="achievement-box">{multiplicador >= 10 && "10 MX"}</p>
            <p className="achievement-box">
              {multiplicador >= 100 && "100 MX"}
            </p>

            <p className="achievement-box">
              {multiplicador >= 1000 && "1000 MX"}
            </p>

            <p className="achievement-box">
              {multiplicador >= 100000 && "100000 MX"}
            </p>
            <p className="achievement-box">{automatron1 >= 1 && "1 AuM1"}</p>
            <p className="achievement-box"> {automatron1 >= 10 && "10 AuM1"}</p>
            <p className="achievement-box">
              {automatron1 >= 100 && "100 AuM1"}
            </p>
            <p className="achievement-box">
              {automatron1 >= 1000 && "1000 AuM1"}
            </p>
            <p className="achievement-box">
              {automatron1 >= 100000 && "100000 AuM1"}
            </p>
            <p className="achievement-box">{squirrels >= 1 && "1 Sqrr"}</p>
            <p className="achievement-box"> {squirrels >= 10 && "10 Sqrr"}</p>
            <p className="achievement-box">{squirrels >= 100 && "100 Sqrr"}</p>
            <p className="achievement-box">
              {squirrels >= 1000 && "1000 Sqrr"}
            </p>
            <p className="achievement-box">
              {squirrels >= 100000 && "100000 Sqrr"}
            </p>
            <p className="achievement-box">{pageTrees >= 1 && "1 PgTr"}</p>
            <p className="achievement-box"> {pageTrees >= 10 && "10 PgTr"}</p>
            <p className="achievement-box">{pageTrees >= 100 && "100 PgTr"}</p>
            <p className="achievement-box">
              {pageTrees >= 1000 && "1000 PgTr"}
            </p>
            <p className="achievement-box">
              {pageTrees >= 100000 && "100000 PgTr"}
            </p>
            <p className="achievement-box">{resets >= 1 && "Reset once"}</p>
          </div>
        </div>
      </div>
    </>
  );
};
