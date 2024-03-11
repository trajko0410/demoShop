import style from "./PaymentForm.module.css";

import continueImage from "../../img/arrow-right-white.png";
import shippingInfo from "../../img/delivery-truck.png";

function PaymentForm(props) {
  return (
    <div className={style.container}>
      <h3>Payment</h3>
      <p>Implement strype or some other payment method!</p>
      <div className={style.buttons}>
        <div className={style.editShipping} onClick={props.back}>
          <p>Back to shipping info</p>
          <img src={shippingInfo} alt="shippingTruck"></img>
        </div>
        <div className={style.continue} onClick={props.continue}>
          <p>Continue</p>
          <img src={continueImage} alt="continue"></img>
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;
