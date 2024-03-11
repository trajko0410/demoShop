import { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./MainNavBar.module.css";

import MainNavigation from "./MainNavigation";

function NavBarMain(props) {
  const [headerColor, setHeaderColor] = useState();
  const [menuOppen, setMenuOppen] = useState(false);
  const [cartOppen, setCartOppen] = useState(false);

  function menuIsOppen(menu) {
    setMenuOppen(menu);
  }

  const cartIsOppen = (cart) => {
    setCartOppen(cart);
  };
  //console.log(cartOppen);
  const location = useLocation();
  let isOnHomePage = false;
  if (location.pathname === "/" && cartOppen === false) {
    isOnHomePage = true;
  }
  //mozes staviti || window.oterWidth < 600 ako hoces da main menu ima boju

  function listenforscroll() {
    if (window.scrollY > 100) {
      setHeaderColor(
        `${styles.bacground_Color_Black} ${styles.bacground_Color_Black_Animation}`
      );
    } else
      setHeaderColor(
        `${styles.bacground_Color_Transparent} ${styles.bacground_Color_Transparent_Animation}`
      );
  }

  window.addEventListener("scroll", listenforscroll);
  //kada scrolujemo checkuje svaki kput

  return (
    <>
      {!menuOppen && (
        <div
          className={`${styles.main_navigation_animation} ${
            isOnHomePage ? headerColor : styles.bacground_Color_Black
          }`}
        ></div>
      )}

      <MainNavigation
        menuIsOppen={menuIsOppen}
        cartIsOppen={cartIsOppen}
        //ovde nam kart treba da bi ynali dal da ostavimo main navigation sa crnom bojojm
      ></MainNavigation>
    </>
  );
}

export default NavBarMain;

//ovo sam ovako uradio zato sto mi je lakse bilo nego da izdvajam ceo div za animaciju!
//animacije kada se otvvara meni treba dodati

//moras ugasiti animaciju kada prvi put redejus sajt !!!!!!!!!!!!!!!!!!!!!!!!!!!
