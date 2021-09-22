import React, { useContext, useState } from "react";
import CounterContext from "../../context/CounterContext";
import { DetailsBox } from "../DetailsBox/DetailsBox";
import { NewBooks } from "../NewBooks/NewBooks";
import { ShopItem } from "../ShopItem/ShopItem";
import "./Shop.css";
import buildingsInformation from "../../data/buildings.json";

export const Shop = () => {
  const { buildingsInfo } = buildingsInformation;
  const {
    automatron1,
    multiplicador,
    upgrades,
    setMultiplicador,
    setAutomatron1,
    squirrels,
    setSquirrels,
    trees,
    setTrees,
  } = useContext(CounterContext);

  const [showDetails, setShowDetails] = useState(false);
  const buildingItems = [multiplicador, automatron1, squirrels, trees];
  const buildingSetItems = [
    setMultiplicador,
    setAutomatron1,
    setSquirrels,
    setTrees,
  ];
  const buildingRequirements = [
    null,
    upgrades.technology.length >= 1,
    upgrades.nature.length >= 3 && upgrades.culture.length >= 4,
    upgrades.nature.length >= 4 && upgrades.technology.length >= 4,
  ];
  return (
    <>
      <div className="shop">
        <NewBooks />
        {showDetails && <DetailsBox />}
        {buildingsInfo.map((building, i) => {
          return (
            <ShopItem
              setShowDetails={setShowDetails}
              name={building.name}
              item={buildingItems[i]}
              setItem={buildingSetItems[i]}
              hasRequirements={building.hasRequirements}
              requirement={buildingRequirements[i]}
              priceGkn={building.priceGkn}
              priceTkn={building.priceTkn}
              priceBkn={building.priceBkn}
              priceCkn={building.priceCkn}
              detailsInfo={building.detailsInfo}
            />
          );
        })}
      </div>
    </>
  );
};
