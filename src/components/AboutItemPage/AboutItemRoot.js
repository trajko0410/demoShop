import { useLoaderData, useOutletContext, useParams } from "react-router-dom";

import style from "./AboutItemRoot.module.css";
import AboutItem from "./AboutItem";

import errorFetching from "../../img/no-results.png";
import emptyBox from "../../img/box.png";

function RootAboutItem() {
  const loaderData = useLoaderData();
  const params = useParams();

  const context = useOutletContext();
  //KROZ KONTEKST I OUTLET SMO POSLALI SVE ITEME I ONDA UPOREDILI DA LI POSTOJI ONAJ KOJI JE U PARAMS AKO NE ONDA IZBACUJEEMO ERROR
  //console.log(context, "context");
  //console.log(loaderData, "er");
  const idToCheck = params.itemId; //dobili smo id iy url i sada cemo proveriti da li je u loaderu imano takav id ako ne onda cemo izbaciti error!
  //console.log(id, "paramsroot");

  //console.log(loaderData);
  const checkIfIdExists = (idToCheck) => {
    return context.some((item) => item.id === idToCheck);
  };

  // Check if ID exists in the array
  const idExists = checkIfIdExists(idToCheck);
  //console.log(idExists);
  if (!idExists) {
    return (
      <div className={style.error}>
        <h4>Sory item does not exist!</h4>
        <div className={style.imgContainer}>
          <img src={emptyBox} alt="error"></img>
        </div>
      </div>
    );
  } else if (loaderData.isError) {
    return (
      <div className={style.error}>
        <h4>{loaderData.message}</h4>
        <div className={style.imgContainer}>
          <img src={errorFetching} alt="error"></img>
        </div>
      </div>
    );
  } else {
    return <AboutItem loaderData={loaderData} />;
  }
}

export default RootAboutItem;
