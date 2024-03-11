import ItemsOverview from "../components/CheckOutPage/ItemsOverview";
import OrientalSlider from "../components/CheckOutPage/OrientalSlider";
import OverviewOfOrder from "../components/CheckOutPage/OverviewOfOrder";
import PaymentForm from "../components/CheckOutPage/PaymentForm";
import ShipingForm from "../components/CheckOutPage/ShipingForm";

import style from "./CheckOutPage.module.css";

import { useState } from "react";

function CheckOutPage() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [shippingInfo, setShippingInfo] = useState({});

  //const indexValue = (index) => {
  // setActiveIndex(index);
  //};
  //console.log("activeind", activeIndex);
  const personData = (data) => {
    setShippingInfo(data);
  }; //podigli smo iy color eache

  //continue button gde svaki put kada stisnemo dodamo 1 na indx i na osnovu toga prikayujemo dtugaciji element
  function continueHandler() {
    if (activeIndex < 4) {
      setActiveIndex(activeIndex + 1);
    } else {
      console.log("sybmit form moglismo odvde da stavimo submit cod ya POST");
    }
  }

  function backHandler() {
    setActiveIndex(activeIndex - 1);
  }

  return (
    <div className={style.maincontainer}>
      <OrientalSlider activeIndex={activeIndex} />

      {activeIndex === 1 && <ItemsOverview continue={continueHandler} />}
      {activeIndex === 2 && (
        <ShipingForm
          personData={personData}
          continue={continueHandler}
          back={backHandler}
        />
      )}
      {activeIndex === 3 && (
        <PaymentForm continue={continueHandler} back={backHandler} />
      )}
      {activeIndex === 4 && (
        <OverviewOfOrder shippingInfo={shippingInfo} back={backHandler} />
      )}
    </div>
  );
}

export default CheckOutPage;
