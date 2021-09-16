import React, { useContext } from "react";
import CounterContext from "../../context/CounterContext";
import { useUpgrades } from "../../hooks/useUpgrades";
import "./UpgradeTree.css";
export const Tree = () => {
  const { knCount, upgrades /* setUpgrades, baseUpgrades */ } = useContext(
    CounterContext
  );
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
              upgrades.multiplicador.includes("General Culture I") &&
              "upgrade-bought"
            }`}
            disabled={
              knCount < 500 ||
              upgrades.multiplicador.includes("General Culture I")
            }
            onClick={() =>
              setNewUpgrade("multiplicador", "General Culture I", 500)
            }
          >
            General Culture I <br /> 500
          </button>
        </div>
      </div>
      <div className="upgrade-tier-container">
        <div className="upgrade-box">
          <button
            className={`upgrade-name ${
              upgrades.multiplicador.includes("General Culture I") &&
              "upgrade-bought"
            }`}
            disabled={
              knCount < 1000 ||
              //Requirements
              !upgrades.multiplicador.includes("General Culture I") ||
              //Propio upgrade
              upgrades.multiplicador.indexOf("General Culture II") > -1
            }
            onClick={() =>
              setNewUpgrade("multiplicador", "General Culture II", 500)
            }
          >
            General Culture II <br /> 500
          </button>
        </div>
      </div>
      <div className="upgrade-tier-container">
        <div className="upgrade-box">
          <button
            className={`upgrade-name ${
              upgrades.multiplicador.includes("General Culture II") &&
              "upgrade-bought"
            }`}
            disabled={
              knCount < 1000 ||
              //Requirements
              !upgrades.multiplicador.includes("General Culture II") ||
              //Propio upgrade
              upgrades.multiplicador.indexOf("General Culture III") > -1
            }
            onClick={() =>
              setNewUpgrade("multiplicador", "General Culture III", 500)
            }
          >
            General Culture III <br /> 500
          </button>
        </div>
      </div>
      <div className="upgrade-tier-container">
        <div className="upgrade-box">
          <button
            className={`upgrade-name ${
              upgrades.multiplicador.indexOf("Stuff 101") > -1 &&
              "upgrade-bought"
            }`}
            onClick={() => {
              setNewUpgrade("multiplicador", "Stuff 101", 5000);
            }}
            disabled={
              //Precio
              knCount < 5000 ||
              //Requirements
              !upgrades.multiplicador.includes("General Culture III") ||
              //Propio upgrade
              upgrades.multiplicador.indexOf("Stuff 101") > -1
            }
          >
            Stuff 101 <br /> 5000
          </button>
        </div>
        <div className="upgrade-box">
          <button
            className={`upgrade-name ${
              upgrades.culture.includes("Novel") && "upgrade-bought"
            }`}
            disabled={
              //Precio
              knCount < 10000 ||
              //Requirements
              !upgrades.multiplicador.includes("General Culture III") ||
              //Propio upgrade
              upgrades.culture.indexOf("Novel") > -1
            }
            onClick={() => setNewUpgrade("culture", "Novel", 10000)}
          >
            Novel <br /> 10.000
          </button>
        </div>
      </div>
      <div className="upgrade-tier-container">
        <div className="w-25-flex">
          <div className="upgrade-box">
            <button
              className={`upgrade-name ${
                upgrades.technology.includes("Technology for dummies") &&
                "upgrade-bought"
              }`}
              disabled={
                //Precio
                knCount < 10000 ||
                //Requirements
                !upgrades.multiplicador.includes("Stuff 101") ||
                //Propio upgrade
                upgrades.technology.indexOf("Technology for dummies") > -1
              }
              onClick={() =>
                setNewUpgrade("technology", "Technology for dummies", 10000)
              }
            >
              {`${
                upgrades.multiplicador.includes("Stuff 101")
                  ? `Technology for dummies | 10.000`
                  : "???"
              }`}
            </button>
          </div>
          <div className="upgrade-box">
            <button
              className={`upgrade-name ${
                upgrades.nature.includes("Introduction to Nature") &&
                "upgrade-bought"
              }`}
              disabled={
                //Precio
                knCount < 10000 ||
                //Requirements
                !upgrades.multiplicador.includes("Stuff 101") ||
                //Propio upgrade
                upgrades.nature.indexOf("Introduction to Nature") > -1
              }
              onClick={() =>
                setNewUpgrade("nature", "Introduction to Nature", 10000)
              }
            >
              {`${
                upgrades.multiplicador.includes("Stuff 101")
                  ? `Introduction to Nature | 10.000`
                  : "???"
              }`}
            </button>
          </div>
        </div>
        <div className="upgrade-box w-25">
          <button
            className={`upgrade-name ${
              upgrades.culture.indexOf("Poems of Rose") === 1 &&
              "upgrade-bought"
            }`}
            disabled={
              //Precio
              knCount < 50000 ||
              //Requirements
              !upgrades.culture.includes("Novel") ||
              //Propio upgrade
              upgrades.culture.indexOf("Poems of Rose") === 1
            }
            onClick={() => {
              setNewUpgrade("culture", "Poems of Rose", 50000);
            }}
          >
            {`${
              upgrades.culture.includes("Novel")
                ? `Poems of Rose | 100.000`
                : "???"
            }`}
          </button>
        </div>
      </div>
      <div className="upgrade-tier-container">
        <div className="w-25-flex">
          <div className="upgrade-box">
            <button
              className={`upgrade-name ${
                upgrades.technology.includes("DIY at home") && "upgrade-bought"
              }`}
              disabled={
                //Precio
                knCount < 10000 ||
                //Requirements
                !upgrades.technology.includes("Technology for dummies") ||
                //Propio upgrade
                upgrades.technology.indexOf("DIY at home") > -1
              }
              onClick={() => setNewUpgrade("technology", "DIY at home", 10000)}
            >
              {`${
                upgrades.technology.includes("Technology for dummies")
                  ? `DIY at home | 100.000`
                  : "???"
              }`}
            </button>
          </div>
          <div className="upgrade-box">
            <button
              className={`upgrade-name ${
                upgrades.nature.includes("Nature inside out") &&
                "upgrade-bought"
              }`}
              disabled={
                //Precio
                knCount < 10000 ||
                //Requirements
                !upgrades.nature.includes("Introduction to Nature") ||
                //Propio upgrade
                upgrades.nature.indexOf("Nature inside out") > -1
              }
              onClick={() =>
                setNewUpgrade("nature", "Nature inside out", 10000)
              }
            >
              {`${
                upgrades.nature.includes("Introduction to Nature")
                  ? `Nature inside out | 100.000`
                  : "???"
              }`}
            </button>
          </div>
        </div>
        <div className="upgrade-box w-25">
          <button
            className={`upgrade-name ${
              upgrades.culture.indexOf("History about humanity I") === 2 &&
              "upgrade-bought"
            }`}
            disabled={
              //Precio
              knCount < 50000 ||
              //Requirements
              !upgrades.culture.includes("Poems of Rose") ||
              //Propio upgrade
              upgrades.culture.indexOf("History about humanity I") === 2
            }
            onClick={() => {
              setNewUpgrade("culture", "History about humanity I", 50000);
            }}
          >
            {`${
              upgrades.culture.indexOf("Poems of Rose") === 1
                ? `History about humanity I | 50.000`
                : "???"
            }`}
          </button>
        </div>
      </div>
    </div>
  );
};
