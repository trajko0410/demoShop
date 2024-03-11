import styles from "../pages/HomePage.module.css";
import { NavLink, useLoaderData } from "react-router-dom";

import Banner from "../components/HomePage/Banner";
import UredjajSlider from "../components/HomePage/Slider";
import RecomendedItemsComputer from "../components/RecomendedItems/RecomendedItemsComputer";
import RecomendedItemsPhone from "../components/RecomendedItems/RecomendedItemsPhone";

import errorFetching from "../img/no-results.png";

import { useState, useEffect } from "react";

function HomePage() {
  const dataItems = useLoaderData();

  //console.log(dataItems.isError, "dataitems");

  const [windowWith, setWindowWith] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWith(window.innerWidth);
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array ensures that this effect runs only once after mounting

  if (dataItems.isError) {
    //isError kreiramo tamo gde smo kreirari i loader
    return (
      <>
        <div className={styles.img_background}>
          <div className={styles.container}>
            <div className={styles.naslov}>
              <h1 className={styles.textfocusin}>Discover the elegance</h1>
              <NavLink className={styles.button} to="/shop">
                Shop Now
              </NavLink>
            </div>
          </div>
        </div>
        <Banner />
        <UredjajSlider />

        <div className={styles.recomended}>
          <h2>We recomend</h2>
          <h4>{dataItems.message}</h4>
          <div className={styles.imgContainer}>
            <img src={errorFetching} alt="error"></img>
          </div>
        </div>
      </>
    );

    //OVDE CEMO ERROR OVAKO OSTAVITI jer koristiomo samo deo loadera ya jedean deo saljta a u drugim stranicama napravicemo da se errori bubleupuju do error strane i na njoj ispisati error.
  } else {
    /*console.log("HOME", dataItems);*/

    //console.log(windowWith);

    let recomendedItems = [];
    for (let obj of dataItems) {
      if (obj.recomended) {
        recomendedItems.push(obj);
      }
    }
    //console.log(recomendedItems.length);

    return (
      <>
        <div className={styles.img_background}>
          <div className={styles.container}>
            <div className={styles.naslov}>
              <h1 className={styles.textfocusin}>Discover the elegance</h1>
              <NavLink className={styles.button} to="/shop">
                Shop Now
              </NavLink>
            </div>
          </div>
        </div>
        <Banner />
        <UredjajSlider />
        {recomendedItems.length > 0 ? (
          <div>
            {windowWith < 800 && (
              <RecomendedItemsPhone recomendedItems={recomendedItems} />
            )}
            {windowWith > 800 && (
              <RecomendedItemsComputer recomendedItems={recomendedItems} />
            )}
          </div>
        ) : undefined}
      </>
    );
  }
}

export default HomePage;
