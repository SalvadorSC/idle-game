import React, { useContext, useState } from "react";
import CounterContext from "../../context/CounterContext";
import { useCheats } from "../../hooks/useCheats";
import "./Options.css";
import { decode } from "base-64";
import StatsContext from "../../context/StatsContext";
export const Options = ({ showPrimaryView }) => {
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
  const [showCheats, setShowCheats] = useState(false);
  let encodedSave = localStorage.getItem("encodedSave");
  const [showSave, setShowSave] = useState(false);
  const [action, setAction] = useState("");
  const [buttonOptions, setButtonOptions] = useState("");
  const [clicked, setClicked] = useState(true);
  const handleSave = (action) => {
    setShowSave(true);
    setAction(action);
    setButtonOptions(action);
  };
  const handleClick = () => {
    if (document.querySelector(".save-textarea")) {
      const newSave = document.querySelector(".save-textarea").valueJSON
        ? document
            .querySelector(".save-textarea")
            .valueJSON.parse(
              decode(document.querySelector(".save-textarea").value)
            )
        : undefined;
      if (action === "Import" && newSave) {
        resetAllGame();
        localStorage.setItem(
          "encodedSave",
          document.querySelector(".save-textarea").value
        );
        localStorage.setItem("save", newSave);
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
      }
    } else if (action === "Copy") {
      navigator.clipboard.writeText(encodedSave);
    } else if (action === "Cheat") {
      cheat();
    } else if (action === "Reset") {
      resetGame();
    } else if (action === "Reset All") {
      resetAllGame();
    } else if (clicked) {
      setShowSave(false);
    }
    setAction("");
    setButtonOptions("Close");
    setClicked(true);
  };

  return (
    <div
      className="options-item-container"
      onClick={(e) => {
        if (e.altKey && e.shiftKey) {
          setShowCheats(true);
        }
      }}
    >
      {showSave && (
        <div
          className={`${
            !showPrimaryView ? "save-container-cc" : "save-container"
          }`}
        >
          {(action === "Import" || action === "Copy") && (
            <textarea
              defaultValue={action === "Copy" ? encodedSave : ""}
              name=""
              id=""
              cols="30"
              rows="10"
              className="save-textarea"
            />
          )}
          <div>
            <button className="copy-button" onClick={() => handleClick()}>
              {buttonOptions}
            </button>
          </div>
        </div>
      )}
      <div className="buttons-container">
        <button className="reset-button" onClick={() => handleSave("Reset")}>
          Reset
        </button>

        {showCheats && (
          <button className="reset-button" onClick={() => handleSave("Cheat")}>
            Cheat
          </button>
        )}

        {/* <button className="mute-button" onClick={() => setMute(!mute)}>
          {mute ? "Unmute" : "Mute"}
        </button> */}
      </div>
      <div className="buttons-container">
        <button
          className="reset-button"
          onClick={() => (stop ? setStop(false) : setStop(true))}
        >
          {stop ? "Start" : "Stop"} autoproduction
        </button>
        <button
          className="reset-button"
          onClick={() => handleSave("Reset All")}
        >
          Reset All
        </button>
      </div>
      <div className="buttons-container">
        <button className="reset-button" onClick={() => handleSave("Copy")}>
          Export Save
        </button>
        <button className="reset-button" onClick={() => handleSave("Import")}>
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
        {/* <a className="my-credits-link" href="https://www.github.com/salvadorsc">
          Patreon
        </a> */}
        <p>
          The best way to support this project is to share it or give feedback!
        </p>
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
