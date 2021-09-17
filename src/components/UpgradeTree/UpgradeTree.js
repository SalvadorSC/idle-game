import React, { useContext } from "react";
import CounterContext from "../../context/CounterContext";
import { useUpgrades } from "../../hooks/useUpgrades";
import "./UpgradeTree.css";
export const Tree = () => {
  const { knCount, upgrades /* setUpgrades, baseUpgrades */ } = useContext(
    CounterContext
  );
  const { setNewUpgrade } = useUpgrades();

  const setDisabled = (
    price,
    field,
    upgrade,
    requirementField,
    requirement
  ) => {
    // Requisito
    if (requirement && requirementField) {
      // Requisito comprado
      if (upgrades[requirementField].includes(requirement)) {
        // Requisito comprado y Upgrade comprado
        if (upgrades[field].includes(upgrade)) {
          return true;
        }
        // Requisito comprado y Upgrade NO comprado
        else {
          // Requisito comprado y Upgrade NO comprada y knCount INsuficiente
          if (knCount.generalKn < price) {
            return true;
          } else return false;
        }
      } else return true;
    }
    // No requisito y Upgrade comprada
    else if (upgrades[field].includes(upgrade)) {
      return true;
    }
    // No requisito, No Upgrade
    else {
      // No requisito, No Upgrade, No Dinero
      if (knCount.generalKn < price) {
        return true;
      }
      // No requisito, No Upgrade, Si dinero
      else return false;
    }
  };

  const setClasses = (field, upgrade) => {
    if (upgrades[field].includes(upgrade)) {
      return "upgrade-name upgrade-bought";
    } else {
      return "upgrade-name";
    }
  };

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
            className={setClasses("multiplicador", "General Culture I")}
            disabled={setDisabled(50, "multiplicador", "General Culture I")}
            onClick={() =>
              setNewUpgrade("multiplicador", "General Culture I", 50)
            }
          >
            General Culture I <br /> 50
          </button>
        </div>
      </div>
      <div className="upgrade-tier-container">
        <div className="upgrade-box">
          <button
            className={setClasses("multiplicador", "General Culture II")}
            disabled={setDisabled(
              150,
              "multiplicador",
              "General Culture II",
              "multiplicador",
              "General Culture I"
            )}
            onClick={() =>
              setNewUpgrade("multiplicador", "General Culture II", 150)
            }
          >
            General Culture II <br /> 150
          </button>
        </div>
      </div>
      <div className="upgrade-tier-container">
        <div className="upgrade-box">
          <button
            className={setClasses("multiplicador", "General Culture III")}
            disabled={setDisabled(
              200,
              "multiplicador",
              "General Culture III",
              "multiplicador",
              "General Culture II"
            )}
            onClick={() =>
              setNewUpgrade("multiplicador", "General Culture III", 200)
            }
          >
            General Culture III <br /> 200
          </button>
        </div>
      </div>
      <div className="upgrade-tier-container">
        <div className="upgrade-box">
          <button
            className={setClasses("multiplicador", "Stuff 101")}
            onClick={() => {
              setNewUpgrade("multiplicador", "Stuff 101", 500);
            }}
            disabled={setDisabled(
              500,
              "multiplicador",
              "Stuff 101",
              "multiplicador",
              "General Culture III"
            )}
          >
            Stuff 101 <br /> 500
          </button>
        </div>
        <div className="upgrade-box">
          <button
            className={setClasses("culture", "Novel")}
            disabled={setDisabled(
              500,
              "culture",
              "Novel",
              "multiplicador",
              "General Culture III"
            )}
            onClick={() => setNewUpgrade("culture", "Novel", 500)}
          >
            Novel <br /> 500
          </button>
        </div>
      </div>
      <div className="upgrade-tier-container">
        <div className="w-25-flex">
          <div className="upgrade-box">
            <button
              className={setClasses("technology", "Technology for dummies")}
              disabled={setDisabled(
                450,
                "technology",
                "Technology for dummies",
                "multiplicador",
                "Stuff 101"
              )}
              onClick={() =>
                setNewUpgrade("technology", "Technology for dummies", 450)
              }
            >
              {`${
                upgrades.multiplicador.includes("Stuff 101")
                  ? `Technology for dummies | 450`
                  : "???"
              }`}
            </button>
          </div>
          <div className="upgrade-box">
            <button
              className={setClasses("nature", "Introduction to Nature")}
              disabled={setDisabled(
                650,
                "nature",
                "Introduction to Nature",
                "multiplicador",
                "Stuff 101"
              )}
              onClick={() =>
                setNewUpgrade("nature", "Introduction to Nature", 650)
              }
            >
              {`${
                upgrades.multiplicador.includes("Stuff 101")
                  ? `Introduction to Nature | 650`
                  : "???"
              }`}
            </button>
          </div>
        </div>
        <div className="upgrade-box w-25">
          <button
            className={setClasses("culture", "Poems of Rose")}
            disabled={setDisabled(
              650,
              "culture",
              "Poems of Rose",
              "culture",
              "Novel"
            )}
            onClick={() => {
              setNewUpgrade("culture", "Poems of Rose", 650);
            }}
          >
            {`${
              upgrades.culture.includes("Novel") ? `Poems of Rose | 650` : "???"
            }`}
          </button>
        </div>
      </div>
      <div className="upgrade-tier-container">
        <div className="w-25-flex">
          <div className="upgrade-box">
            <button
              className={setClasses("technology", "DIY at home")}
              disabled={setDisabled(
                2000,
                "technology",
                "DIY at home",
                "technology",
                "Technology for dummies"
              )}
              onClick={() => setNewUpgrade("technology", "DIY at home", 2000)}
            >
              {`${
                upgrades.technology.includes("Technology for dummies")
                  ? `DIY at home | 2000`
                  : "???"
              }`}
            </button>
          </div>
          <div className="upgrade-box">
            <button
              className={setClasses("nature", "Nature inside out")}
              disabled={setDisabled(
                4000,
                "nature",
                "Nature inside out",
                "nature",
                "Introduction to Nature"
              )}
              onClick={() => setNewUpgrade("nature", "Nature inside out", 4000)}
            >
              {`${
                upgrades.nature.includes("Introduction to Nature")
                  ? `Nature inside out | 4000`
                  : "???"
              }`}
            </button>
          </div>
        </div>
        <div className="upgrade-box w-15">
          <button
            className={setClasses("culture", "History about humanity I")}
            disabled={setDisabled(
              3000,
              "culture",
              "History about humanity I",
              "culture",
              "Poems of Rose"
            )}
            onClick={() => {
              setNewUpgrade("culture", "History about humanity I", 3000);
            }}
          >
            {`${
              upgrades.culture.includes("Poems of Rose")
                ? `History about humanity I | 3000`
                : "???"
            }`}
          </button>
        </div>
      </div>
    </div>
  );
};
