import React, { useContext } from "react";
import CounterContext from "../../context/CounterContext";
import MiscContext from "../../context/MiscContext";
import { useIncrementItem } from "../../hooks/useIncrementItem";
import { ShopItemName } from "../ShopItemName/ShopItemName";

export const ShopItem = ({
  name,
  item,
  setItem,
  setShowDetails,
  hasRequirements,
  requirement,
  priceGkn,
  priceTkn,
  priceBkn,
  priceCkn,
  detailsInfo,
}) => {
  const { knCount } = useContext(CounterContext);
  const { setDetailsInfo } = useContext(MiscContext);
  const { setNewItemQuantity } = useIncrementItem();
  const handleDetails = () => {
    setShowDetails(true);
    setDetailsInfo(detailsInfo ? detailsInfo : "hehe");
  };
  const itemPriceGkn = Math.floor(priceGkn * Math.pow(1.2, item));
  const itemPriceTkn = Math.floor(priceTkn * Math.pow(1.2, item));
  const itemPriceBkn = Math.floor(priceBkn * Math.pow(1.2, item));
  const itemPriceCkn = Math.floor(priceCkn * Math.pow(1.2, item));
  const disableItemButton = () => {
    const priceCondition =
      knCount.generalKn >= itemPriceGkn &&
      knCount.technoKn >= itemPriceTkn &&
      knCount.bioKn >= itemPriceBkn &&
      knCount.cultureKn >= itemPriceCkn;
    if (hasRequirements) {
      if (requirement) {
        if (priceCondition) {
          return false;
        } else return true;
      } else {
        return true;
      }
    } else if (priceCondition) {
      return false;
    } else return true;
  };

  const setName = () => {
    const prepareReturn = (itemPrice, className) => {
      const cosas = (
        <>
          {itemPrice}
          <span className={className}>kN</span>{" "}
        </>
      );
      return cosas;
    };
    return (
      <>
        Buy {name} {itemPriceGkn > 0 && prepareReturn(itemPriceGkn)}
        {itemPriceTkn > 0 && prepareReturn(itemPriceTkn, "technoKn")}
        {itemPriceBkn > 0 && prepareReturn(itemPriceBkn, "bioKn")}
        {itemPriceCkn > 0 && prepareReturn(itemPriceCkn, "cultureKn")}
      </>
    );
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
        onClick={() =>
          setNewItemQuantity(
            item,
            setItem,
            itemPriceGkn,
            itemPriceTkn,
            itemPriceBkn,
            itemPriceCkn
          )
        }
      >
        {hasRequirements ? (requirement ? setName() : "???") : setName()}
      </button>
    </div>
  );
};
