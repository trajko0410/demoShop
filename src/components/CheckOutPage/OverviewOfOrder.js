import ItemsInCart from "../MainNavigation/Cart/ItemsInCart";
import TotalPrice from "../MainNavigation/Cart/TotalPrice";
import CartContext from "../../context/shopContextProvider";
import { useEffect, useState, useContext } from "react";
import emptyCartImage from "../../img/emptyshopingbag.png";
import whiteBag from "../../img/whiteBag.png";
import FailedModal from "./FailedModal";

import style from "../CheckOutPage/OverviewOfOrder.module.css";
import SuccesModal from "./SuccesModal";

import checked from "../../img/checked.png";
import { Link } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

function OverviwOfOrder(props) {
  const cartCtx = useContext(CartContext);
  const items = cartCtx.items; //cart itemi dolazi iy ctx
  const resetCart = cartCtx.clearCart; //resetovanje carta iy cart ctx

  const itemsCartLength = items.length;
  //console.log(itemsCartLength);

  const [total, setTotal] = useState(0);
  const [shippingData, setData] = useState({});
  const [modalSuccess, setSuccesModal] = useState(false);
  const [modalFailed, setModalFaild] = useState(false);

  const shipping = props.shippingInfo;
  const timestamp = new Date().toISOString();
  //console.log(timestamp);

  function modalHandler() {
    setSuccesModal(false);
    setModalFaild(false);
    resetCart();
  }

  useEffect(() => {
    setData(shipping);
  }, [props, shipping]); //moramo ovo da bi se updatovali info o shipingu svaki put kada ih promenimo

  const totalPrice = (totalPrice) => {
    setTotal(totalPrice);
  };

  const [error, setError] = useState(null);

  const addOrderToServer = async () => {
    try {
      //async function addOrderToServer() {
      //saljemo post firebasu u Orders tabelu
      const response = await fetch(
        "https://shop-4e5c6-default-rtdb.europe-west1.firebasedatabase.app/Orders.json",
        {
          method: "POST",
          body: JSON.stringify({
            orderedItems: items, //pazi kako prosledjujes // 1. key predstavalja tabelu u kojoj ce se pisati ove info
            shippingInfo: shippingData,
            timeStamp: timestamp,
          }),
          headers: {
            "Content-Type": "application/js",
          },
        }
      );
      const data = await response.json();
      //resetCart();
      //console.log(data);
      //console.log(response, "post response");

      if (response.ok) {
        setSuccesModal(true);
      } else {
        setModalFaild(true);
        throw new Error("Failed to post data to the server!");

        //console.log("greska");
      } //ako uspe modal postavicemo ga
    } catch (error) {
      setError(error.message);
      setModalFaild(true);
    }
  };

  //console.log(modal);

  //console.log("ime", shippingData.name);
  //console.log(error);
  //console.log(modalFailed);

  return (
    <>
      <div className={style.containerForShopingBag}>
        <h2>Overview of your order!</h2>
        <div className={style.ship}>
          <h3>Almost done!</h3>
          <img src={checked} alt="free"></img>
        </div>
        {itemsCartLength > 0 && (
          <>
            <ItemsInCart totalPrice={totalPrice} itemsInCart={items} />
            <div className={style.totalPrice}>
              <TotalPrice totalPrice={total} />
            </div>
            <div className={style.shippingInfo}>
              <h3>Shipping Info</h3>
              <h4>Name: {shippingData.name}</h4>
              <h4>Email: {shippingData.email}</h4>
              <h4>Address: {shippingData.address}</h4>
              <h4>City: {shippingData.city}</h4>
              <h4>Zip: {shippingData.zip}</h4>
              <h4>Phone number: {shippingData.phone}</h4>
            </div>
            <div className={style.buttons}>
              <div onClick={props.back} className={style.editShopingBag}>
                <p>Back to payment info</p>
              </div>
              <div className={style.continue} onClick={addOrderToServer}>
                <p>Submit</p>
              </div>
            </div>
          </>
        )}
        {itemsCartLength === 0 && (
          <>
            <div className={style.emptybagContainer}>
              <div className={style.cartIsEmpty}>
                <div className={style.cartIsEmptyImage}>
                  <img src={emptyCartImage} alt="emptyBag"></img>
                </div>
              </div>
              <h3>Your cart is empty!</h3>
            </div>
            <div className={style.buttons}>
              <Link to="/shop" className={style.editShopingBag}>
                <p>Back to shoping page</p>
                <div className={style.backgroundOfIcon}>
                  <img src={whiteBag} alt="backToShopingPage"></img>
                </div>
              </Link>
            </div>
          </>
        )}
      </div>

      {modalFailed && <FailedModal modalHandler={modalHandler} error={error} />}
      <AnimatePresence>
        {modalSuccess && <SuccesModal modalHandler={modalHandler} />}
      </AnimatePresence>
    </>
  ); //modal mozemo staviti u posebni element
}

export default OverviwOfOrder;
