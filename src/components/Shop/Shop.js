import React, { useContext, useState } from "react";
import CounterContext from "../../context/CounterContext";
import { DetailsBox } from "../DetailsBox/DetailsBox";
import { NewBooks } from "../NewBooks/NewBooks";
import { ShopItem } from "../ShopItem/ShopItem";
import "./Shop.css";

export const Shop = (props) => {
  const {
    automatron1,
    multiplicador,
    upgrades,
    setMultiplicador,
    setAutomatron1,
  } = useContext(CounterContext);

  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div className="shop">
        <NewBooks />
        {showDetails && <DetailsBox />}
        <ShopItem
          setShowDetails={setShowDetails}
          name={"Multiplicador"}
          item={multiplicador}
          setItem={setMultiplicador}
          hasRequirements={false}
        />
        <ShopItem
          setShowDetails={setShowDetails}
          name={"Automatron v1"}
          item={automatron1}
          setItem={setAutomatron1}
          hasRequirements={true}
          requirement={upgrades.technology.length >= 1}
        />
      </div>
    </>
  );
};
