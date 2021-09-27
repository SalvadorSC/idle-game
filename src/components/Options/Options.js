import React, { useContext, useState } from "react";
import CounterContext from "../../context/CounterContext";
import MiscContext from "../../context/MiscContext";
import { useCheats } from "../../hooks/useCheats";
import "./Options.css";

export const Options = () => {
  const { resetGame, resetAllGame, cheat } = useCheats();
  const { stop, setStop } = useContext(CounterContext);
  const { mute, setMute } = useContext(MiscContext);
  let encodedSave = localStorage.getItem("encodedSave");
  const [showSave, setShowSave] = useState(false);
  const [rexport, setRexport] = useState(false);
  const [rimport, setRimport] = useState(false);
  const [buttonOptions, setButtonOptions] = useState("");
  const [clicked, setClicked] = useState(true);
  /* const handleSave = (action) => {
    setShowSave(true);
    if (action === "import") {
      setRimport(true);
      setButtonOptions("Import");
    } else {
      setRexport(true);
      setButtonOptions("Copy");
    }
  }; */
  const handleClick = () => {
    if (rimport) {
      localStorage.setItem(
        "encodedSave",
        document.querySelector(".save-textarea").value
      );
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
        {/* <button className="reset-button" onClick={() => handleSave("export")}>
          Export Save
        </button>
        <button className="reset-button" onClick={() => handleSave("import")}>
          Import Save
        </button> */}
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
            Backround vector created by upklyak - www.freepik.es
          </a>
        </p>
      </div>
    </div>
  );
};
