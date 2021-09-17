import React, { useContext } from "react";
import CounterContext from "../../context/CounterContext";
import { useUpgrades } from "../../hooks/useUpgrades";

export const UpgradeItem = ({
  price,
  field,
  upgrade,
  requirementField,
  requirement,
  isSelectedBook,
}) => {
  const { setNewUpgrade } = useUpgrades();
  const { knCount, upgrades } = useContext(CounterContext);
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

  const setClasses = (field, upgrade, isSelectedBook) => {
    if (isSelectedBook) {
      return "chosen-book";
    }
    if (upgrades[field].includes(upgrade)) {
      return "upgrade-name upgrade-bought";
    } else {
      return "upgrade-name ";
    }
  };

  return (
    <div className="upgrade-box">
      <button
        className={setClasses(field, upgrade, isSelectedBook)}
        disabled={setDisabled(
          price,
          field,
          upgrade,
          requirementField,
          requirement
        )}
        onClick={() => setNewUpgrade(field, upgrade, price)}
      >
        {`${
          requirement
            ? upgrades[requirementField].includes(requirement)
              ? `${upgrade} | ${price}`
              : "???"
            : `${upgrade} | ${price}`
        }`}
      </button>
    </div>
  );
};
