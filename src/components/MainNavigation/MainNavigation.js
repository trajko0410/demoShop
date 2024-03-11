import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Cart from "./Cart/Cart";
import styles from "./MainNavigation.module.css";
import logo from "../../img/Logowhite.png";
import NumberOfItemsInCart from "./NumberOfItemsInCart";
import { AnimatePresence, motion } from "framer-motion";

function MainNavigation(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItemsLenght, setCartItems] = useState(0);
  //console.log("totalcartitemsLenght", cartItemsLenght);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false); // Close the navigation panel
  }, [pathname]);

  function cartHandler() {
    setCartOpen(!cartOpen);
  }

  function listenforwidty() {
    if (window.innerWidth > 800) {
      setMenuOpen(false);
    } else {
    }
  } //promeni stil ako je veci od 800

  window.addEventListener("resize", listenforwidty); //resize kada se menja velicina

  function menuHandler() {
    setMenuOpen(!menuOpen);
  }

  function totalCartItems(totalCartItems) {
    setCartItems(totalCartItems);
  }

  useEffect(() => {
    props.menuIsOppen(menuOpen);
  }, [props, menuOpen]);

  useEffect(() => {
    props.cartIsOppen(cartOpen);
  }, [props, cartOpen]);

  //console.log(cartOpen);

  return (
    <>
      <header
        className={`${styles.header}  ${menuOpen ? styles.bacgroundColor : ""}`}
      >
        <div className={styles.logo}>
          <NavLink to="/">
            <img src={logo} alt="logo"></img>
          </NavLink>
        </div>
        <div
          className={`${styles.menuIcon} ${
            menuOpen ? styles.rotate : ""
          } ${menuOpen}`}
          onClick={() => {
            menuHandler();
          }}
        >
          <span className={menuOpen ? styles.hamburgerActivated : ""}></span>
          <span className={menuOpen ? styles.hamburgerActivated : ""}></span>
          <span className={menuOpen ? styles.hamburgerActivated : ""}></span>
        </div>
        <ul
          className={`${styles.list} ${menuOpen ? styles.open : ""} ${
            menuOpen ? styles.bacgroundColor : ""
          } `}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <div className={styles.cartContainer}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 500 }}
                onClick={cartHandler}
                className={`${styles.cartIcon} ${
                  cartOpen ? styles.svgActive : styles.svgNotActive
                }`}
                //className={({ isActive }) =>
                // isActive ? styles.svgActive : styles.svgNotActive
                //}
              >
                <svg
                  height="25px"
                  width="25px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 279 279"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M262.421,270.339L246.466,72.896C246.151,69.001,242.898,66,238.99,66h-42.833v-9.495C196.157,25.348,171.143,0,139.985,0 h-0.99c-31.157,0-56.838,25.348-56.838,56.505V66H39.99c-3.908,0-7.161,3.001-7.476,6.896l-16,198 c-0.169,2.088,0.543,4.15,1.963,5.689S21.897,279,23.99,279h231c0.006,0,0.014,0,0.02,0c4.143,0,7.5-3.357,7.5-7.5 C262.51,271.105,262.48,270.717,262.421,270.339z M97.157,56.505C97.157,33.619,116.109,15,138.995,15h0.99 c22.886,0,41.172,18.619,41.172,41.505V66h-84V56.505z"></path>
                  </g>
                </svg>
              </motion.div>
              <div className={styles.numberCart}>
                <NumberOfItemsInCart totalCartItems={totalCartItems} />
              </div>
            </div>
          </li>
        </ul>
      </header>
      <div>
        <AnimatePresence>
          {cartOpen && (
            <Cart
              cartState={cartOpen}
              cartItemsLenght={cartItemsLenght}
              cartHandler={cartHandler}
            ></Cart>
          )}
        </AnimatePresence>
        {cartOpen && (
          <div className={styles.overlay} onClick={cartHandler}></div>
        )}
      </div>
    </>
  );
}

export default MainNavigation;
