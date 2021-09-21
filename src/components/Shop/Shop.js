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
    squirrels,
    setSquirrels,
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
          priceGkn={10}
          priceTkn={0}
          priceBkn={0}
          priceCkn={0}
        />
        <ShopItem
          setShowDetails={setShowDetails}
          name={"Automatron v1"}
          item={automatron1}
          setItem={setAutomatron1}
          hasRequirements={true}
          requirement={upgrades.technology.length >= 1}
          priceGkn={100}
          priceTkn={10}
          priceBkn={0}
          priceCkn={0}
        />
        <ShopItem
          setShowDetails={setShowDetails}
          name={"Squirrels"}
          item={squirrels}
          setItem={setSquirrels}
          hasRequirements={true}
          requirement={
            upgrades.nature.length >= 2 && upgrades.culture.length >= 3
          }
          priceGkn={100}
          priceTkn={0}
          priceBkn={10}
          priceCkn={0}
        />
      </div>
    </>
  );
};
