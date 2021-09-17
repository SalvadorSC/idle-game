import React from "react";
import { UpgradeItem } from "../UpgradeItem/UpgradeItem";
import "./UpgradeTree.css";
export const Tree = () => {
  return (
    <div className="tree-item-container">
      <div className="upgrade-tier-container">
        <UpgradeItem
          price={50}
          field={"multiplicador"}
          upgrade={"General Culture I"}
        />
      </div>
      <div className="upgrade-tier-container">
        <UpgradeItem
          price={150}
          field={"multiplicador"}
          upgrade={"General Culture II"}
          requirementField={"multiplicador"}
          requirement={"General Culture I"}
        />
      </div>
      <div className="upgrade-tier-container">
        <UpgradeItem
          price={200}
          field={"multiplicador"}
          upgrade={"General Culture III"}
          requirementField={"multiplicador"}
          requirement={"General Culture II"}
        />
      </div>
      <div className="upgrade-tier-container">
        <UpgradeItem
          price={500}
          field={"multiplicador"}
          upgrade={"Stuff 101"}
          requirementField={"multiplicador"}
          requirement={"General Culture III"}
        />
        <UpgradeItem
          price={500}
          field={"culture"}
          upgrade={"Novel"}
          requirementField={"multiplicador"}
          requirement={"General Culture III"}
        />
      </div>
      <div className="upgrade-tier-container">
        <div className="w-25-flex">
          <UpgradeItem
            price={450}
            field={"technology"}
            upgrade={"Technology for dummies"}
            requirementField={"multiplicador"}
            requirement={"Stuff 101"}
          />
          <UpgradeItem
            price={650}
            field={"nature"}
            upgrade={"Introduction to Nature"}
            requirementField={"multiplicador"}
            requirement={"Stuff 101"}
          />
        </div>
        <div className="w-25">
          <UpgradeItem
            price={650}
            field={"culture"}
            upgrade={"Poems of Rose"}
            requirementField={"culture"}
            requirement={"Novel"}
          />
        </div>
      </div>
      <div className="upgrade-tier-container">
        <div className="w-25-flex">
          <UpgradeItem
            price={2000}
            field={"technology"}
            upgrade={"DIY at home"}
            requirementField={"technology"}
            requirement={"Technology for dummies"}
          />
          <UpgradeItem
            price={2000}
            field={"nature"}
            upgrade={"Nature inside out"}
            requirementField={"nature"}
            requirement={"Introduction to Nature"}
          />
        </div>
        <div className="w-25">
          <UpgradeItem
            price={2000}
            field={"culture"}
            upgrade={"History about humanity I"}
            requirementField={"culture"}
            requirement={"Poems of Rose"}
          />
        </div>
      </div>
    </div>
  );
};
