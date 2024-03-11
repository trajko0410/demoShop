import { useState } from "react";
import { Link } from "react-router-dom";

import ItemsInCart from "../MainNavigation/Cart/ItemsInCart";
import TotalPrice from "../MainNavigation/Cart/TotalPrice";
import CartContext from "../../context/shopContextProvider";

import { useContext } from "react";

import whiteBag from "../../img/whiteBag.png";
import continueImage from "../../img/arrow-right-white.png";
import emptyCartImage from "../../img/emptyshopingbag.png";

import style from "../CheckOutPage/ItemsOverview.module.css";

function ItemsOverview(props) {
  const [total, setTotal] = useState(0);
  const cartCtx = useContext(CartContext);
  const items = cartCtx.items;
  //console.log(items.length);

  const totalPrice = (totalPrice) => {
    setTotal(totalPrice);
  };
  return (
    <div className={style.containerForShopingBag}>
      <h2>Your shoping bag</h2>
      <div className={style.ship}>
        {items.length === 0 ? <h3>Cart is empty!</h3> : <h3>Greate Choice!</h3>}
      </div>
      <ItemsInCart
        className={style.itemsInCart}
        totalPrice={totalPrice}
      ></ItemsInCart>
      {items.length > 0 && (
        <div className={style.totalPrice}>
          <TotalPrice totalPrice={total} />
        </div>
      )}
      {items.length === 0 && (
        <div className={style.emptybagContainer}>
          <div className={style.cartIsEmpty}>
            <div className={style.cartIsEmptyImage}>
              <img src={emptyCartImage} alt="emptyBag"></img>
            </div>
          </div>
        </div>
      )}
      <div className={style.buttons}>
        <Link to="/shop" className={style.editShopingBag}>
          <p>Back to shoping page</p>
          <div className={style.backgroundOfIcon}>
            <img src={whiteBag} alt="backToShopingPage"></img>
          </div>
        </Link>
        {items.length > 0 && (
          <div className={style.continue} onClick={props.continue}>
            <p>Continue</p>
            <img src={continueImage} alt="continue"></img>
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemsOverview;
