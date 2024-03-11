import AboutItemRoot from "../components/AboutItemPage/AboutItemRoot";

function AboutItemPage(props) {
  return (
    <>
      <AboutItemRoot />
    </>
  );
}
// Ovde imas i primer kako da mapujes object id je c1 i c2 dok colors[color] su bela, crna tj. boje
export default AboutItemPage;

export async function loader({ request, params }) {
  const id = params.itemId;

  const response = await fetch(
    `https://shop-4e5c6-default-rtdb.europe-west1.firebasedatabase.app/items/${id}.json
    
    `
  );

  if (!response.ok) {
    return {
      isError: true,
      message: "Coluld not fetch data about items! Sory try again later!",
    }; //saljemo error
    // throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
    //status: 500,
    //});
  } else {
    const resData = await response.json();
    return resData;
  }
}
//Ovde pravim loader koji ce poslati zahtev firebasu i on ce mi poslati nayad info sa id, a id smo dobili od paramsa koji je poveyan sa :itemId tj onako kako smo nayvali dinamican deo na app.js
