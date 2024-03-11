import { useState } from "react";

import ItemsNavigation from "../components/ShopPage/ItemsNavigation";
import styles from "./Shop.module.css";
import ItemsOnShopPage from "../components/ShopPage/ItemsOnShopPage";

function Shop() {
  const [sortValue, setSortValue] = useState("");

  /*
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      const loadedItems = [];
      for (const key in dataItems) {
        loadedItems.push({
          id: key,
          name: dataItems[key].Name,
          description: dataItems[key].Description,
          price: dataItems[key].Price,
          color: dataItems[key].Color,
          category: dataItems[key].Category,
          memory: dataItems[key].Memory,
          shortDescription: dataItems[key].ShortDescription,
          mainPhoto: dataItems[key].MainPhoto,
        }); //napravi phones da se menja u zavisnosti na kojoj si stranici, napravi jos jedan podmeni sa izborom artikla ;)
      }
      setItems(loadedItems);
    };
    fetchItems();
  }, [dataItems]);
  Ovo sam prebacio u loader*/

  const itemSort = (sort) => {
    setSortValue(sort);
    //console.log(sortValue);
    //koristim za sortiranje itema
  };

  return (
    <>
      <div className={styles.img_background}>
        <div className={styles.back_drop}>
          <h1>Shop our items</h1>
        </div>
      </div>

      <ItemsNavigation itemValueSort={itemSort} />
      <div className={styles.itemsContainer}>
        <div className={styles.items}>
          <ItemsOnShopPage sortValue={sortValue} />
        </div>
      </div>
    </>
  );
}

export default Shop;

export async function loader() {
  const response = await fetch(
    "https://shop-4e5c6-default-rtdb.europe-west1.firebasedatabase.app/items.json"
  );

  if (!response.ok) {
    return { isError: true, message: "Coluld not fetch items!" }; //saljemo error
    //throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
    //status: 500,
    //});
  } else {
    const responseData = await response.json();
    const loadedItems = [];
    for (const key in responseData) {
      loadedItems.push({
        id: key,
        name: responseData[key].Name,
        description: responseData[key].Description,
        price: responseData[key].Price,
        color: responseData[key].Color,
        category: responseData[key].Category,
        memory: responseData[key].Memory,
        shortDescription: responseData[key].ShortDescription,
        mainPhoto: responseData[key].MainPhoto,
        recomended: responseData[key].Recomend,
      });
    }
    return loadedItems;
  }
}
//Posto loader vraca arrayeve a meni treba objedct [] posle da bih mapirao pushovao sam ga u ladadItems i to dobijam na drugim stanicama :}
//Ovaj loader cemo pozvatio u app!
