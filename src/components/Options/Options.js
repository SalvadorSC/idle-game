import React, { useContext, useState } from "react";
import CounterContext from "../../context/CounterContext";
// import MiscContext from "../../context/MiscContext";
import { useCheats } from "../../hooks/useCheats";
import "./Options.css";
import { decode } from "base-64";
import StatsContext from "../../context/StatsContext";
export const Options = () => {
  const { resetGame, resetAllGame, cheat } = useCheats();
  const {
    stop,
    setStop,
    setUpgrades,
    setChosenBook,
    setPageTrees,
    setSquirrels,
    setAutomatron1,
    setMultiplicador,
    setKnCount,
  } = useContext(CounterContext);
  const {
    setGoal,
    setTotalClicksOfAllTime,
    setTotalKnCountOfThisRun,
    setTotalKnOfAllTime,
    setMaxKn,
    setPotenciaClick,
    setClicks,
    setResets,
    setKnForfeitedAtReset,
  } = useContext(StatsContext);
  // const { mute, setMute } = useContext(MiscContext);
  let encodedSave = localStorage.getItem("encodedSave");
  const [showSave, setShowSave] = useState(false);
  const [rexport, setRexport] = useState(false);
  const [rimport, setRimport] = useState(false);
  const [buttonOptions, setButtonOptions] = useState("");
  const [clicked, setClicked] = useState(true);
  const handleSave = (action) => {
    setShowSave(true);
    if (action === "import") {
      setRimport(true);
      setButtonOptions("Import");
    } else {
      setRexport(true);
      setButtonOptions("Copy");
    }
  };
  const handleClick = () => {
    if (rimport) {
      debugger;
      resetAllGame();
      const newSave = JSON.parse(
        decode(document.querySelector(".save-textarea").value)
      );
      localStorage.setItem(
        "encodedSave",
        document.querySelector(".save-textarea").value
      );
      localStorage.setItem("save", newSave);
      console.log(newSave);
      setGoal(newSave.goal);
      setChosenBook(newSave.chosenBook);
      setMultiplicador(newSave.multiplicador);
      setTotalKnOfAllTime(newSave.total);
      setMaxKn(newSave.maxKn);
      setPotenciaClick(newSave.setPotenciaClick);
      setTotalKnCountOfThisRun(newSave.totalKnCountOfThisRun);
      setTotalClicksOfAllTime(newSave.totalClicksOfAllTime);
      setKnCount(newSave.knCount);
      setAutomatron1(newSave.automatron1);
      setSquirrels(newSave.squirrels);
      setClicks(newSave.clicks);
      setResets(newSave.resets);
      setUpgrades(newSave.upgrades);
      setKnForfeitedAtReset(newSave.knForfeitedAtReset);
      setPageTrees(newSave.pageTrees);
      setRimport(false);
      setButtonOptions("Close");
      setClicked(true);
    } else if (rexport) {
      navigator.clipboard.writeText(encodedSave);
      setRexport(false);
      setButtonOptions("Close");
      setClicked(true);
    } else if (clicked) {
      setShowSave(false);
    }
  };
  return (
    <div className="options-item-container">
      {showSave && (
        <div className="save-container">
          <textarea
            defaultValue={rexport ? encodedSave : ""}
            name=""
            id=""
            cols="30"
            rows="10"
            className="save-textarea"
          />
          <div>
            <button className="copy-button" onClick={() => handleClick()}>
              {buttonOptions}
            </button>
          </div>
        </div>
      )}
      <div className="buttons-container">
        <button className="reset-button" onClick={resetGame}>
          Reset
        </button>
        <button className="reset-button" onClick={cheat}>
          Cheat
        </button>
        <button
          className="reset-button"
          onClick={() => (stop ? setStop(false) : setStop(true))}
        >
          {stop ? "Start" : "Stop"} auto production
        </button>
        <button className="reset-button" onClick={resetAllGame}>
          Reset All
        </button>
        {/* <button className="mute-button" onClick={() => setMute(!mute)}>
          {mute ? "Unmute" : "Mute"}
        </button> */}
        <button className="reset-button" onClick={() => handleSave("export")}>
          Export Save
        </button>
        <button className="reset-button" onClick={() => handleSave("import")}>
          Import Save
        </button>
      </div>
      <div className="credits-container">
        <p>Credits</p>
        <hr />
        <p>Developer: Salvador Sánchez </p>
        <a className="my-credits-link" href="https://www.github.com/salvadorsc">
          Github
        </a>{" "}
        <a className="my-credits-link" href="https://www.github.com/salvadorsc">
          Patreon
        </a>
        <p>Assets credits:</p>
        <hr></hr>
        <p>Artist: @sansh_pixel on Fiverr and @sanshpixel on Instagram</p>
        <p>
          Library asset:{" "}
          <a
            className="credits-link"
            href="https://www.freepik.es/vectores/fondo"
          >
            Background vector created by upklyak - www.freepik.es
          </a>
        </p>
      </div>
    </div>
  );
};
