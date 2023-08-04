import { useContext, useEffect, useState } from "react";
import { Handle, Position } from "reactflow";
import "reactflow/dist/style.css";
import "./CustomNode.css";
import { useUpgrades } from "../../hooks/useUpgrades";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import StatsContext from "../../context/StatsContext";
import CounterContext from "../../context/CounterContext";

export default function BookNode({ data }) {
  const { maxKn } = useContext(StatsContext);
  let location = useLocation();
  const { price, field, upgrade, requirementField, requirement, description } =
    data.upgradeInfo;
  const {
    knCount,
    chosenBook,
    setChosenBook,
    potenciaClick,
    multiplicador,
    upgrades,
  } = useContext(CounterContext);
  const { setNewUpgrade } = useUpgrades();
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [cssClasses, setCssClasses] = useState([
    "",
    "bioKn",
    "technoKn",
    "cultureKn",
  ]);

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
          return false;
        }
        // Requisito comprado y Upgrade NO comprado
        else {
          // Requisito comprado y Upgrade NO comprada y knCount INsuficiente
          return !!(
            knCount.generalKn <= price.gKnPrice &&
            knCount.bioKn <= price.bKnPrice &&
            knCount.technoKn <= price.tKnPrice &&
            knCount.cultureKn <= price.cKnPrice
          );
        }
      } else return true;
    }
    // No requisito y Upgrade comprada
    else if (upgrades[field].includes(upgrade)) {
      return false;
    }
    // No requisito, No Upgrade
    else {
      // No requisito, No Upgrade, No Dinero
      return !!(
        knCount.generalKn <= price.gKnPrice &&
        knCount.bioKn <= price.bKnPrice &&
        knCount.technoKn <= price.tKnPrice &&
        knCount.cultureKn <= price.cKnPrice
      );
    }
  };

  const setClasses = (field, upgrade) => {
    if (upgrades[field].includes(upgrade) && chosenBook === upgrade) {
      return "upgrade-name chosen-book";
    } else if (upgrades[field].includes(upgrade)) {
      return "upgrade-name upgrade-bought";
    }
    if (cssClasses === []) {
      setCssClasses(["", "bioKn", "technoKn", "cultureKn"]);
    } else {
      return "upgrade-name";
    }
  };

  useEffect(() => {
    const toggleShowUpgrade = (
      price,
      field,
      upgrade,
      requirementField,
      requirement
    ) => {
      if (requirement && requirementField) {
        if (upgrades[requirementField].includes(requirement)) {
          if (upgrades[field].includes(upgrade)) {
            if (location.pathname === "/shelf") {
              setShowUpgrade(true);
            } else {
              setShowUpgrade(false);
            }
          } else {
            if (location.pathname === "/shelf") {
              setShowUpgrade(false);
            } else if (
              potenciaClick >= price[0] / 100 ||
              (maxKn.generalKn * 2 >= price[0] &&
                maxKn.bioKn * 2 >= price[1] &&
                maxKn.technoKn * 2 >= price[2] &&
                maxKn.cultureKn * 2 >= price[3])
            ) {
              setShowUpgrade(true);
            } else setShowUpgrade(false);
          }
        } else setShowUpgrade(false);
      } else if (upgrades[field].includes(upgrade)) {
        if (location.pathname === "/shelf") {
          setShowUpgrade(true);
        } else {
          setShowUpgrade(false);
        }
      }
      // si no hay requisitos y tampoco esta comprado (aún no pasa pero puede pasar mas adelante)
      else {
        if (
          potenciaClick >= price[0] / 100 ||
          (maxKn.generalKn * 2 > price[0] &&
            maxKn.bioKn * 2 > price[1] &&
            maxKn.technoKn * 2 > price[2] &&
            maxKn.cultureKn * 2 > price[3])
        ) {
          setShowUpgrade(true);
        }
      }
      return showUpgrade;
    };
    toggleShowUpgrade(price, field, upgrade, requirementField, requirement);
  }, [
    multiplicador,
    knCount,
    requirement,
    requirementField,
    upgrades,
    field,
    upgrade,
    showUpgrade,
    potenciaClick,
    price,
    location,
    maxKn.generalKn,
    maxKn.bioKn,
    maxKn.technoKn,
    maxKn.cultureKn,
  ]);

  return (
    <>
      {showUpgrade && (
        <div className="upgrade-box">
          {upgrade !== "General Culture I" && (
            <Handle type="target" position={Position.Top} />
          )}
          <button
            className={setClasses(field, upgrade)}
            disabled={setDisabled(
              price,
              field,
              upgrade,
              requirementField,
              requirement
            )}
            onClick={() =>
              upgrades[field].includes(upgrade)
                ? setChosenBook(upgrade)
                : setNewUpgrade(field, upgrade, price)
            }
          >
            {upgrade}
            <span>
              {!upgrades[field].includes(upgrade) &&
                price.map((price, i) => (
                  <>
                    {price > 0 && price}
                    {price > 0 && (
                      <span
                        key={price + cssClasses[i]}
                        className={cssClasses[i]}
                      >
                        kn
                      </span>
                    )}{" "}
                  </>
                ))}
            </span>
          </button>
          {description && (
            <div
              className={`description description-${upgrade.replace(
                / /g,
                "-"
              )} `}
            >
              {description}
            </div>
          )}
          <Handle type="source" position={Position.Bottom} />
        </div>
      )}
    </>
  );
}
