import React, { useContext } from "react";
import CounterContext from "../../context/CounterContext";
import "./Stats.css";
export const Stats = () => {
  const {
    goal,
    totalCountOfAllTime,
    automatron1,
    multiplicador,
    clicks,
    resets,
  } = useContext(CounterContext);
  return (
    <>
      <div className="statistics-section">
        <div className="stats-section">
          <p className="stats-section-title">Statistics</p>
          <div className="stats-container">
            <p>Number of clicks:</p>
            <p>Total clicks of all time: {clicks} clicks</p>
            <p>Total clicks of this run:</p>
            <p>Total Knowledge of this run: {totalCountOfAllTime}</p>
            <p>Total Knowledge of all time:</p>
            <p>Longest run time:</p>
            <p>Current run time:</p>
            <p>Number of resets: {resets}</p>
            <p>Number of clicks forfeited by reset:</p>
          </div>
        </div>
        <div className="achievements-section">
          <p className="stats-section-title">Achievements </p>
          <div className="achievement-container">
            <p className="achievement-box">{goal > 100 && "100 "}</p>
            <p className="achievement-box">{goal > 1000 && "1.000 "}</p>
            <p className="achievement-box">{goal > 100000 && "100.000 "}</p>
            <p className="achievement-box">{goal > 1000000 && "1.000.000 "}</p>
            <p className="achievement-box">{clicks > 500 && "500 clicks"}</p>
            <p className="achievement-box">
              {clicks > 10000 && "10.000 clicks"}
            </p>
            <p className="achievement-box">
              {clicks > 100000 && "100.000 clicks"}
            </p>
            <p className="achievement-box">
              {goal > 1000000000 && "1.000.000.000"}
            </p>

            <p className="achievement-box">
              {goal > 10000000000 && "10.000.000.000"}
            </p>

            <p className="achievement-box">
              {goal > 100000000000 && "100.000.000.000"}
            </p>
          </div>
          <div className="achievement-container">
            {multiplicador > 1 && <p className="achievement-box">1 MX</p>}
            <p className="achievement-box">{multiplicador > 10 && "10 MX"}</p>
            <p className="achievement-box">{multiplicador > 100 && "100 MX"}</p>

            <p className="achievement-box">
              {multiplicador > 1000 && "1000 MX"}
            </p>

            <p className="achievement-box">
              {multiplicador > 100000 && "100000 MX"}
            </p>
            <p className="achievement-box">{automatron1 > 1 && "1 AuM1"}</p>
            <p className="achievement-box"> {automatron1 > 10 && "10 AuM1"}</p>
            <p className="achievement-box">{automatron1 > 100 && "100 AuM1"}</p>
            <p className="achievement-box">
              {automatron1 > 1000 && "1000 AuM1"}
            </p>

            <p className="achievement-box">
              {automatron1 > 100000 && "100000 AuM1"}
            </p>
            <p className="achievement-box">{resets > 0 && "Reset once"}</p>
          </div>
        </div>
      </div>
    </>
  );
};
