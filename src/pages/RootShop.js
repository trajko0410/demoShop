import { Outlet, useLoaderData } from "react-router-dom";

function RootShop() {
  const itemsLoader = useLoaderData();
  return <Outlet context={itemsLoader} />;
  //SALEMO ITEMES SVE KAKO BI VIDELI DA LI ONAJ U PARAMSU POSTOJI
}

export default RootShop;
//Ovd mogu stavitii elemente koji ce biti vidljivi na svakoj strani shoopa a posto ih nemamo nisam ih stavio
//outlet samo kreira sve sto se nalayi u grani ispod
