import React, { useContext } from "react";
import { Link, Redirect, Route } from "react-router-dom";
import { Options } from "./components/Options/Options";
import { Shop } from "./components/Shop/Shop";
import { Stats } from "./components/Stats/Stats";
import { Tree } from "./components/Tree/Tree";
import CounterContext from "./context/CounterContext";
import { useContador } from "./hooks/useContador";

const Contador = () => {
  const {
    goal,
    setGoal,
    count,
    setCount,
    clicks,
    setClicks,
    automatron1,
    setAutomatron1,
    automatron2,
    setAutomatron2,
    multiplicador,
    setMultiplicador,
    totalCountOfAllTime,
    setTotalCountOfAllTime,
    upgrades,
    setUpgrades,
    save,
    resetGame,
    resetAllGame,
  } = useContext(CounterContext);
  const { increment } = useContador(
    goal,
    setGoal,
    count,
    setCount,
    clicks,
    setClicks,
    automatron1,
    automatron2,
    multiplicador,
    totalCountOfAllTime,
    setTotalCountOfAllTime,
    upgrades,
    save
  );

  return (
    <>
      <div className="contador">
        <div className="first-half">
          <h1>CountBox</h1>
          <div className="display-stats">
            <p>Goal: {goal}</p>
            <p>
              Progress:{" "}
              {Math.floor((totalCountOfAllTime / goal) * 100 * 100) / 100}%
            </p>
            <p>Total: {totalCountOfAllTime} Kn</p>
          </div>
          <div
            unselectable="on"
            onClick={() => increment(upgrades)}
            className="display-count unselectable"
          >
            <div className="circular">
              <div className="inner"></div>
              <div className="number">{count}</div>
              <div className="circle">
                <div className="bar left">
                  <div className="progressL"></div>
                </div>
                <div className="bar right">
                  <div className="progressR"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second-half">
          <nav className="second-half-nav">
            <ul className="second-half-ul">
              <li className="second-half-ul-li">
                <Link className="second-half-nav-button" to="/">
                  Shop
                </Link>
              </li>
              <li className="second-half-ul-li">
                <Link className="second-half-nav-button" to="/tree">
                  Tree
                </Link>
              </li>
              <li className="second-half-ul-li">
                <Link className="second-half-nav-button" to="/stats">
                  Stats
                </Link>
              </li>
              <li className="second-half-ul-li">
                <Link className="second-half-nav-button" to="/options">
                  Options
                </Link>
              </li>
            </ul>
          </nav>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route path="/options">
            <Options />
          </Route>
          <Route path="/stats">
            <Stats />
          </Route>
          <Route path="/tree">
            <Tree />
          </Route>
          <Redirect to="/" />
        </div>
      </div>
    </>
  );
};

export default Contador;
