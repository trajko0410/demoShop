import style from "./ItemOnRecomended.module.css";

import { NavLink } from "react-router-dom";

function ItemOnRecomended(props) {
  return (
    <div
      className={
        props.id >= props.beginingSliderIndex &&
        props.id <= props.endSliderIndex
          ? style.container
          : style.notActive
      }
    >
      <div className={style.info}>
        <h3>{props.name}</h3>
        <img src={props.mainPhoto} alt="ItemImage"></img>
        <h4>Price starts at:</h4>
        <h5>{props.price}$</h5>
        <NavLink
          to={`/shop/${props.navigationID}`}
          className={style.BuyItemButton}
        >
          Buy Item
        </NavLink>
      </div>
    </div>
  );
}

export default ItemOnRecomended;
