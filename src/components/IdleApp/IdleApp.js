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
import personajeOneLoop from "../../assets/lecteur-oneloop-2.gif";
import StatsContext from "../../context/StatsContext";
import MiscContext from "../../context/MiscContext";
import { Pomodoro } from "../Pomodoro/Pomodoro";
const IdleApp = () => {
  const dependencies = useContext(CounterContext);
  const statDependencies = useContext(StatsContext);
  const { setShowGeneratedKnAlert, setRewardsTaken } = useContext(
    CounterContext
  );
  const { mute, setMute } = useContext(MiscContext);
  const [play] = useSound(soundUrl, { volume: mute ? 0 : 0.1 });
  const { increment } = useIncrementByClick(dependencies);
  const { parseNumber } = useNumberParsing();
  /* const totalKn =
    statDependencies.totalKnCountOfThisRun.generalKn +
    statDependencies.totalKnCountOfThisRun.bioKn +
    statDependencies.totalKnCountOfThisRun.technoKn +
    statDependencies.totalKnCountOfThisRun.cultureKn; */
  const resetAnimation = () => {
    const characterGif = document.querySelector(".character");
    if (
      !dependencies.automatron1 ||
      !dependencies.squirrels ||
      !dependencies.pageTrees
    ) {
      characterGif.src = personajeOneLoop;
      // eslint-disable-next-line no-self-assign
      characterGif.src = characterGif.src;
    } else {
      // eslint-disable-next-line no-self-assign
      characterGif.src = characterGif.src;
    }
  };
  const handleClick = () => {
    increment(dependencies.upgrades);
    resetAnimation();
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
              <span className="cultureKn">kN</span>, while lucid dreaming.
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
            <form className="music-div">
              <label className="music-tag">Music</label>
              {BoopButton()}
            </form>

            <button className="mute-button" onClick={() => setMute(!mute)}>
              {mute ? "Unmute" : "Mute"}
            </button>
          </div>

          <div className="display-stats">
            <p>Goal: {parseNumber(statDependencies.goal)} kN</p>
            <Pomodoro />
            <p>
              Progress:{" "}
              {Math.floor(
                (statDependencies.totalKnCountOfThisRun.generalKn /
                  statDependencies.goal) *
                  100 *
                  100
              ) / 100}
              %
            </p>
            {/* <p>Total: {parseNumber(Math.floor(totalKn * 100) / 100)} kN</p> */}
          </div>
          <div
            unselectable="on"
            onClick={handleClick}
            className="display-knCount unselectable"
          >
            <div className="kn-amount-display">
              <div>
                <p>
                  {/* parseNumber( */ dependencies.knCount.generalKn /* ) */}
                  <span>kN</span>{" "}
                </p>
                <p>
                  {/* parseNumber( */ dependencies.knCount.bioKn /* ) */}
                  <span className="bioKn">kN</span>{" "}
                </p>
              </div>
              <div>
                <p>
                  {/* parseNumber( */ dependencies.knCount.technoKn /* ) */}
                  <span className="technoKn">kN</span>{" "}
                </p>
                <p>
                  {/* parseNumber( */ dependencies.knCount.cultureKn /* ) */}
                  <span className="cultureKn">kN</span>{" "}
                </p>
              </div>
            </div>
            <img className="character" src={personajeOneLoop} alt="personaje" />
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
