import NavBarMain from "../components/MainNavigation/MainNavBar";
import Footer from "../components/Footer/Footer";

import style from "./ErrorPage.module.css";

import errorFetching from "../img/no-results.png";

//import { useRouteError } from "react-router-dom";

function ErrorPage() {
  //const error = useRouteError();

  let title = "An error has ocured!";
  let message = "Could not find this page!";

  //const location = useLocation();

  //if (error.status === 500) {
  //message = JSON.parse(error.data).message; ///ovo je ona poruka koju smo napravili tako gde i erro i status 500
  //}

  //if (error.status === 404) {
  //title = "Not found!";
  //message = "Could not find resource or page";
  //}

  return (
    <>
      <NavBarMain></NavBarMain>

      <main className={style.container}>
        <div className={style.error}>
          <h2>{title}</h2>
          <h4>{message}</h4>
          <div className={style.imgContainer}>
            <img src={errorFetching} alt="error"></img>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ErrorPage;
