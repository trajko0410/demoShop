import { Outlet, ScrollRestoration } from "react-router-dom";
import NavBarMain from "../components/MainNavigation/MainNavBar";
import Footer from "../components/Footer/Footer";

function Root() {
  return (
    <>
      <NavBarMain></NavBarMain>
      <main>
        <Outlet />
        <ScrollRestoration />
      </main>
      <Footer />
    </>
  );
} //An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.

export default Root;

//Ovde mogu da kreiram element koji ce se pojavljivati na svakoj stranici shoopa.

//ScrollRESTAURATION radi ono sto i sam kaye
