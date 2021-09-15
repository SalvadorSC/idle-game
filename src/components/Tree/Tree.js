import React, { useContext } from "react";
import CounterContext from "../../context/CounterContext";
import { useUpgrades } from "../../hooks/useUpgrades";
import "./Tree.css";
export const Tree = () => {
  const { count, upgrades /* , setUpgrades */ } = useContext(CounterContext);
  const { setNewUpgrade } = useUpgrades();

  return (
    <div className="tree-item-container">
      <div className="upgrade-tier-container">
        <div className="upgrade-box">
          {/* <button
            className="upgrade-name upgrade-bought"
            onClick={() => setUpgrades(baseUpgrades)}
          >
            Reset upgrades
          </button> */}
          <button
            className={`upgrade-name ${
              upgrades.multiplicador.includes("Multiplicador+") &&
              "upgrade-bought"
            }`}
            disabled={
              count < 500 || upgrades.multiplicador.includes("Multiplicador+")
            }
            onClick={() =>
              setNewUpgrade("multiplicador", "Multiplicador+", 500)
            }
          >
            Multiplicador+ <br /> 500
          </button>
        </div>
      </div>
      <div className="upgrade-tier-container">
        <div className="upgrade-box">
          <button
            className={`upgrade-name ${
              upgrades.multiplicador.indexOf("Multiplicador++") > -1 &&
              "upgrade-bought"
            }`}
            onClick={() => {
              setNewUpgrade("multiplicador", "Multiplicador++", 5000);
            }}
            disabled={
              //Precio
              count < 5000 ||
              //Requirements
              !upgrades.multiplicador.includes("Multiplicador+") ||
              //Propio upgrade
              upgrades.multiplicador.indexOf("Multiplicador++") > -1
            }
          >
            Multiplicador++ <br /> 5000
          </button>
        </div>
        <div className="upgrade-box">
          <button
            className={`upgrade-name ${
              upgrades.automatron1.includes("Automatron v1.1") &&
              "upgrade-bought"
            }`}
            disabled={
              //Precio
              count < 10000 ||
              //Requirements
              !upgrades.multiplicador.includes("Multiplicador+") ||
              //Propio upgrade
              upgrades.automatron1.indexOf("Automatron v1.1") > -1
            }
            onClick={() =>
              setNewUpgrade("automatron1", "Automatron v1.1", 10000)
            }
          >
            Automatron v1.1 <br /> 10.000
          </button>
        </div>
      </div>
      <div className="upgrade-tier-container">
        <div className="upgrade-box"></div>
        <div className="upgrade-box">
          <button
            className={`upgrade-name ${
              upgrades.automatron1.indexOf("Automatron v1.2") === 1 &&
              "upgrade-bought"
            }`}
            disabled={
              //Precio
              count < 50000 ||
              //Requirements
              !upgrades.automatron1.includes("Automatron v1.1") ||
              //Propio upgrade
              upgrades.automatron1.indexOf("Automatron v1.2") === 1
            }
            onClick={() => {
              setNewUpgrade("automatron1", "Automatron v1.2", 50000);
            }}
          >
            Automatron v1.2 <br /> 50.000
          </button>
        </div>
      </div>
      <div className="upgrade-tier-container">
        <div className="upgrade-box"></div>
        <div className="upgrade-box">
          <button
            className={`upgrade-name ${
              upgrades.automatron2.indexOf("Unlock Automatron v2") === 0 &&
              "upgrade-bought"
            }`}
            disabled={
              //Precio
              count < 250000 ||
              //Requirements
              !upgrades.automatron1.includes("Automatron v1.2") ||
              //Propio upgrade
              upgrades.automatron2.indexOf("Unlock Automatron v2") > -1
            }
            onClick={() => {
              setNewUpgrade("automatron2", "Unlock Automatron v2", 250000);
            }}
          >
            {`${
              upgrades.automatron1.indexOf("Automatron v1.2") === 1
                ? "Unlock Automatron v2 250.000"
                : "???"
            }`}
          </button>
        </div>
      </div>
    </div>
  );
};
