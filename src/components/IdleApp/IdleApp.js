import React, { useContext } from "react";
import { Link, Route } from "react-router-dom";
import { Options } from "../Options/Options";
import { Shop } from "../Shop/Shop";
import { Stats } from "../Stats/Stats";
import CounterContext from "../../context/CounterContext";
import { useNumberParsing } from "../../hooks/useNumberParsing";
import "./IdleApp.css";
import BoopButton from "../BoopButton/BoopButton";
import { useIncrementByClick } from "../../hooks/useIncrementByClick";
import { Shelf } from "../Shelf/Shelf";
import soundUrl from "../../assets/page-flip-01a.mp3";
import useSound from "use-sound";
import buffer from "../../assets/Infinity.svg";
const IdleApp = () => {
  const dependencies = useContext(CounterContext);
  const { setMute, setShowGeneratedKnAlert, setRewardsTaken } = useContext(
    CounterContext
  );
  const [play] = useSound(soundUrl, { volume: dependencies.mute ? 0 : 0.1 });
  const { increment } = useIncrementByClick(dependencies);
  const { parseNumber } = useNumberParsing();
  const totalKn =
    dependencies.totalKnCountOfThisRun.generalKn +
    dependencies.totalKnCountOfThisRun.bioKn +
    dependencies.totalKnCountOfThisRun.technoKn +
    dependencies.totalKnCountOfThisRun.cultureKn;

  const handleClick = () => {
    increment(dependencies.upgrades);
    //Sound Effect
    play();
  };

  return (
    <>
      <div className="contador">
        {dependencies.showBuffer && (
          <div className="buffer">
            <img src={buffer} alt="loading infinite loop gif" />
          </div>
        )}
        {dependencies.showGeneratedKnAlert && (
          <div className="buffer">
            <p className="generatedKn-p">
              You have gained {dependencies.generatedKn.generatedGnKn}
              kN, {dependencies.generatedKn.generatedBioKn}
              <span className="bioKn">kN</span>,{" "}
              {dependencies.generatedKn.generatedTechnoKn}
              <span className="technoKn">kN</span> and{" "}
              {dependencies.generatedKn.generatedCultureKn}
              <span className="cultureKn">kN</span>, while offline.
              <button
                className="generatedKn-button"
                onClick={() => {
                  setShowGeneratedKnAlert(false);
                  setRewardsTaken(true);
                }}
              >
                &times;
              </button>
            </p>
          </div>
        )}

        <div className="first-half">
          <div className="header">
            <div className="music-div">
              <p className="music-tag">Music</p>
              {BoopButton()}
            </div>

            <button onClick={() => setMute(!dependencies.mute)}>
              {dependencies.mute ? "Unmute" : "Mute"}
            </button>
          </div>

          <div className="display-stats">
            <p>Goal: {parseNumber(dependencies.goal)} kN</p>
            <p>
              Progress:{" "}
              {Math.floor(
                (dependencies.totalKnCountOfThisRun.generalKn /
                  dependencies.goal) *
                  100 *
                  100
              ) / 100}
              %
            </p>
            <p>Total: {Math.floor(totalKn * 100) / 100} kN</p>
          </div>
          <div
            unselectable="on"
            onClick={handleClick}
            className="display-knCount unselectable"
          >
            <div className="kn-amount-display">
              <div>
                <p>
                  {dependencies.knCount.generalKn}
                  <span>kN</span>{" "}
                </p>
                <p>
                  {dependencies.knCount.bioKn}
                  <span className="bioKn">kN</span>{" "}
                </p>
              </div>
              <div>
                <p>
                  {dependencies.knCount.technoKn}
                  <span className="technoKn">kN</span>{" "}
                </p>
                <p>
                  {dependencies.knCount.cultureKn}
                  <span className="cultureKn">kN</span>{" "}
                </p>
              </div>
            </div>
            {/* <img
              className="character"
              src="https://via.placeholder.com/64"
              alt="personaje"
            /> */}
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
                <Link className="second-half-nav-button" to="/stats">
                  Stats
                </Link>
              </li>
              <li className="second-half-ul-li">
                <Link className="second-half-nav-button" to="/shelf">
                  Shelf
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
          <Route path="/shelf">
            <Shelf />
          </Route>
        </div>
      </div>
    </>
  );
};

export default IdleApp;
