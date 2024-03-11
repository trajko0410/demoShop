import style from "../HomePage/Banner.module.css";
import delivery from "../../img/shipping.png";
import cheap from "../../img/pricing.png";
import reliability from "../../img/reliability.png";

function Banner() {
  return (
    <>
      <div className={style.container}>
        <h2 className={style.maintitle}>Our servieces</h2>
        <div className={style.row}>
          <div className={style.icons}>
            <div>
              <img src={delivery} alt="delivery"></img>
              <h2>Fast delivery</h2>
              <p>We ship our orders in two to tree working days!</p>
            </div>
            <div>
              <img src={cheap} alt="Low prices"></img>
              <h2>Lowest prices</h2>
              <p>We have the lowest prices compering to the our competiton!</p>
            </div>
            <div>
              <img src={reliability} alt="Reliability"></img>
              <h2>Reliability</h2>
              <p>Reliability and custumer suport is our main foucuse!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
