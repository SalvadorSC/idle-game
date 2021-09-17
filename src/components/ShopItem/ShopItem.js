import React, { useContext } from "react";
import CounterContext from "../../context/CounterContext";
import { useIncrementItem } from "../../hooks/useIncrementItem";
import { useNumberParsing } from "../../hooks/useNumberParsing";
import { ShopItemName } from "../ShopItemName/ShopItemName";

export const ShopItem = ({
  name,
  item,
  setItem,
  setShowDetails,
  hasRequirements,
  requirement,
}) => {
  const { knCount, upgrades } = useContext(CounterContext);
  const { parseNumber } = useNumberParsing();
  const { setNewItemQuantity } = useIncrementItem();
  const handleDetails = () => {
    setShowDetails(true);
  };
  const itemPrice = Math.floor(10 * Math.pow(1.15, item));
  const disableItemButton = () => {
    // Tiene Requisitos
    if (hasRequirements) {
      if (requirement) {
        if (knCount.generalKn >= itemPrice) {
          return false;
        } else return true;
      } else {
        return true;
      }
    } else if (knCount.generalKn >= itemPrice) {
      return false;
    } else return true;
  };

  return (
    <div className="shop-item-container">
      <div>
        <p className="shop-item-name">
          {hasRequirements ? (
            requirement ? (
              <ShopItemName
                nameInfo={{
                  name: name,
                  item: item,
                  handleDetails: handleDetails,
                  setShowDetails: setShowDetails,
                }}
              />
            ) : (
              "???"
            )
          ) : (
            <ShopItemName
              nameInfo={{
                name: name,
                item: item,
                handleDetails: handleDetails,
                setShowDetails: setShowDetails,
              }}
            />
          )}
        </p>
      </div>
      <button
        className="shop-button"
        disabled={disableItemButton()}
        onClick={() => setNewItemQuantity(item, setItem, 1.15, 10)}
      >
        {hasRequirements
          ? requirement
            ? `Buy ${name} (${parseNumber(itemPrice)})`
            : "???"
          : `Buy ${name} (${parseNumber(itemPrice)})`}
      </button>
    </div>
  );
};
