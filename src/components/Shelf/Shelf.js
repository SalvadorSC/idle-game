import React from "react";
import upgradesInformation from "../../data/upgradesInfo.json";
import { UpgradeItem } from "../UpgradeItem/UpgradeItem";
import "./Shelf.css";
export const Shelf = () => {
  const { upgradesInfo } = upgradesInformation;

  return (
    <div className="shelf-container">
      {upgradesInfo.map((upgradeInfo) => (
        <UpgradeItem
          price={upgradeInfo.price}
          field={upgradeInfo.field}
          upgrade={upgradeInfo.upgrade}
          requirementField={upgradeInfo.requirementField}
          requirement={upgradeInfo.requirement}
        />
      ))}
    </div>
  );
};
