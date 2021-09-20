import React, { useContext, useEffect, useState } from "react";
import CounterContext from "../../context/CounterContext";
import { useUpgrades } from "../../hooks/useUpgrades";
import { useLocation } from "react-router-dom";
import "./UpgradeItem.css";
export const UpgradeItem = ({
  price,
  field,
  upgrade,
  requirementField,
  requirement,
  description,
}) => {
  const { setNewUpgrade } = useUpgrades();
  const [showUpgrade, setShowUpgrade] = useState(false);
  let location = useLocation();
  const {
    knCount,
    upgrades,
    chosenBook,
    setChosenBook,
    potenciaClick,
    multiplicador,
  } = useContext(CounterContext);

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
          if (knCount.generalKn < price) {
            return true;
          } else return false;
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
      if (knCount.generalKn < price) {
        return true;
      }
      // No requisito, No Upgrade, Si dinero
      else return false;
    }
  };

  const setClasses = (field, upgrade) => {
    if (upgrades[field].includes(upgrade) && chosenBook === upgrade) {
      return "upgrade-name chosen-book";
    } else if (upgrades[field].includes(upgrade)) {
      return "upgrade-name upgrade-bought";
    } else {
      return "upgrade-name ";
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
            } else if (potenciaClick >= price / 100) {
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
        if (potenciaClick >= price / 100 || knCount.generalKn * 2 > price) {
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
  ]);

  return (
    <>
      {showUpgrade && (
        <div className="upgrade-box">
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
            {`${
              upgrades[field].includes(upgrade)
                ? `${upgrade}`
                : `${upgrade} | ${price}`
            }`}
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
        </div>
      )}
    </>
  );
};
