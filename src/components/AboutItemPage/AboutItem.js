//import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Colors from "./Colors";
import Model from "./Model";
import Available from "./Available";
import AddToCartButton from "./AddToCartButton";
import Price from "./Price";
//import Photo from "./Photo";
import ItemPhotosSlider from "./ItemPhotosSlider";

import style from "./AboutItem.module.css";
function AboutItem(props) {
  const loaderData = props.loaderData;

  const [itemPrice, setItemPrice] = useState();
  const [itemColor, setItemColor] = useState();
  const [itemMemory, setItemMemory] = useState();

  const choseItemPrice = (price) => {
    setItemPrice(price);
  };

  const chosenItemColor = (color) => {
    setItemColor(color);
  }; //podigli smo iy color eache

  const chosenItemMemory = (memory) => {
    setItemMemory(memory);
  };

  return (
    <div className={style.container}>
      <div className={style.aboutItem}>
        <div className={style.img}>
          <ItemPhotosSlider colorChosen={itemColor} loaderData={loaderData} />
        </div>

        <div className={style.textData}>
          <h2 className={style.name}>{loaderData.Name}</h2>
          <h3 className={style.shortDescription}>
            {loaderData.ShortDescription}
          </h3>
          <div className={style.memory_color}>
            <Model
              loaderData={loaderData}
              choseItemPrice={choseItemPrice}
              chosenItemMemory={chosenItemMemory}
            />
          </div>
          <div className={style.memory_color}>
            <Colors chosenItemColor={chosenItemColor} loaderData={loaderData} />
          </div>
          <Price itemPrice={itemPrice} />
          <AddToCartButton
            itemPrice={itemPrice}
            itemColor={itemColor}
            itemName={loaderData.Name}
            photo={loaderData.MainPhoto}
            itemMemory={itemMemory}
            available={loaderData.Available}
          />
          <Available loaderData={loaderData} />
        </div>
      </div>
    </div>
  );
}

//console.log(itemColor);
// primili smo ga iz modela koji je primio iy model each i sada cemo ga poslati dole do sekcije koja ce prikayati cene

export default AboutItem;
