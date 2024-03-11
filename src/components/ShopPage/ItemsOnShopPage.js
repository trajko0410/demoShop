import { useLoaderData } from "react-router-dom";
import style from "../ShopPage/ItemsOnShopPage.module.css";

import Item from "../ShopPage/Item";

import errorFetching from "../../img/no-results.png";

function ItemsOnShopPage(props) {
  const dataItems = useLoaderData();
  if (dataItems.isError) {
    return (
      <div className={style.error}>
        <h4>{dataItems.message}</h4>
        <div className={style.imgContainer}>
          <img src={errorFetching} alt="error"></img>
        </div>
      </div>
    );
  }

  ///console.log(dataItems);
  //console.log(props.sortValue);
  const itemsList = dataItems.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
      color={item.color}
      category={item.category}
      memory={item.memory}
      shortDescription={item.shortDescription}
      mainPhoto={item.mainPhoto}
      sortValue={props.sortValue}
    />
  ));
  return (
    <>
      <div className={style.container}>
        <div className={style.item}>{itemsList}</div>
      </div>
    </>
  );
}

export default ItemsOnShopPage;

//mapiram da dobijem ya svaki item
