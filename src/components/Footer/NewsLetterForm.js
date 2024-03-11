import { useEffect, useState } from "react";
import style from "./NewsLetterForm.module.css";
import { useFetcher } from "react-router-dom";

function NewsletterForm() {
  const fetcher = useFetcher();
  const { data, state } = fetcher;
  // console.log("dddddd", data, state);
  //console.log(state);

  const [email, setEmail] = useState("");

  function emailHandler(event) {
    setEmail(event.target.value);
  }

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
      setEmail("");
    }
  }, [data, state]);

  return (
    <fetcher.Form
      className={style.newsletter}
      method="post"
      action="/newsletter"
    >
      <input
        onChange={emailHandler}
        type="email"
        name="email"
        value={email}
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
} //fetcher ce zaustaviti relodovanje

export default NewsletterForm;
