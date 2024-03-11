import NewsletterSignup from "../components/Footer/NewsLetterForm";

function NewsletterPage() {
  return <NewsletterSignup />;
}

export default NewsletterPage;

export async function action({ request }) {
  const data = await request.formData();
  console.log(data);
  const email = data.get("email");

  async function send() {
    const response = await fetch(
      "https://shop-4e5c6-default-rtdb.europe-west1.firebasedatabase.app/NewsLetter.json",
      {
        method: "POST",
        body: JSON.stringify({
          email,
        }),
        headers: {
          "Content-Type": "application/js",
        },
      }
    );

    const data = await response.json();
  }

  let text = "";
  if (email === "") {
    text = "Empty email";
  } else {
    text = "Welcome to out newsletter";
    send();
  }

  // send to backend newsletter server ...
  console.log(email, "NewsLetterEmail");
  return { message: text };
}
