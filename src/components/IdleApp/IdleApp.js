import React, { useContext } from "react";
import { Link, Redirect, Route } from "react-router-dom";
import { Options } from "../Options/Options";
import { Shop } from "../Shop/Shop";
import { Stats } from "../Stats/Stats";
import { Tree } from "../UpgradeTree/UpgradeTree";
import CounterContext from "../../context/CounterContext";
import { useContador } from "../../hooks/useContador";
import { useNumberParsing } from "../../hooks/useNumberParsing";

const IdleApp = () => {
  const dependencies = useContext(CounterContext);
  const { increment } = useContador(dependencies);
  const { parseNumber } = useNumberParsing();
  return (
    <>
      <div className="contador">
        <div className="first-half">
          <h1>BookBok</h1>
          <div className="display-stats">
            <p>Goal: {parseNumber(dependencies.goal)}</p>
            <p>
              Progress:{" "}
              {parseNumber(
                Math.floor(
                  (dependencies.totalKnCountOfThisRun / dependencies.goal) *
                    100 *
                    100
                ) / 100
              )}
              %
            </p>
            <p>Total: {parseNumber(dependencies.totalKnCountOfThisRun)}</p>
          </div>
          <div
            unselectable="on"
            onClick={() => increment(dependencies.upgrades)}
            className="display-knCount unselectable"
          >
            <div className="circular">
              <div className="inner"></div>
              <div className="number">{parseNumber(dependencies.knCount)}</div>
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

export default IdleApp;
