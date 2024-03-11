import { NavLink } from "react-router-dom";
import style from "./Cart.module.css";
import { createPortal } from "react-dom";

import ItemsInCart from "./ItemsInCart";
import TotalPrice from "./TotalPrice";
import { useEffect, useState } from "react";

import closeImage from "../../../img/close.png";
import emptyCartImage from "../../../img/emptyshopingbag.png";

import { motion } from "framer-motion";

function Cart(props) {
  const cartState = props.cartState;
  const cartItemsLenght = props.cartItemsLenght;
  const [total, setTotal] = useState(0);
  const [isPhone, setIsPhone] = useState(false);
  const [isCartEmpty, setIsCartEmpty] = useState(false);
  //console.log("PRAZNOILINE", props.cartItemsLenght);

  const withofScreen = window.innerWidth;
  const closeModal = props.cartHandler;

  useEffect(() => {
    if (withofScreen <= 800) {
      setIsPhone(true);
    }
  }, [withofScreen]);

  //console.log("isphone", isPhone);

  useEffect(() => {
    if (cartItemsLenght === 0) {
      setIsCartEmpty(true);
    } else {
      setIsCartEmpty(false);
    }
  }, [cartItemsLenght]);

  const totalPrice = (totalPrice) => {
    setTotal(totalPrice);
  };

  //console.log("cart", total)
  return createPortal(
    <motion.div
      variants={{
        hidden: { opacity: 0, x: 1000 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, x: 1000 }}
      transition={{ stiffness: 200 }}
      className={`${style.cart}`}
    >
      <div className={style.overlay}>
        {isPhone && (
          <div className={style.closeBtnImage}>
            <img src={closeImage} alt="closeModal" onClick={closeModal}></img>
          </div>
        )}
        <div className={style.cartNaslov}>
          <h2>Your Cart</h2>
        </div>

        {isCartEmpty && (
          <div className={style.cartIsEmpty}>
            <div className={style.cartIsEmptyImage}>
              <img src={emptyCartImage} alt="emptyBag"></img>
            </div>
            <h4>Cart is empty!</h4>
            <NavLink to="/shop" onClick={closeModal} className={style.shopBtn}>
              Shop Now
            </NavLink>
          </div>
        )}
        {!isCartEmpty && (
          <div className={style.containerIfCartNotEmpty}>
            <ItemsInCart totalPrice={totalPrice} />
            <div className={style.centeredBotom}>
              <TotalPrice totalPrice={total} /> {/* ide dole*/}
              <div className={style.buttonNotNow} onClick={closeModal}>
                <h4>Not Now</h4>
              </div>
              <NavLink
                to="/checkoutPage"
                onClick={closeModal}
                className={style.buttonAddToCart}
              >
                <h4>Check Out</h4>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </motion.div>,
    document.getElementById("modalCart")
  );
} //nalayimo portal ovako i tu se orvara

export default Cart;
