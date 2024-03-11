import ContactUs from "./ContactUs";
import style from "./Footer.module.css";

import NewsletterForm from "./NewsLetterForm";
import SocialMedia from "./SocialMedia";

import logo from "../../img/Logowhite.png";

function Footer() {
  return (
    <>
      <footer>
        <div className={style.footer}>
          <div className={style.container}>
            <ContactUs />
            <div className={style.smnwContainer}>
              <SocialMedia />
              <NewsletterForm />
            </div>
            <div className={style.logo}>
              <img src={logo} alt="logo"></img>
            </div>
          </div>
        </div>
        <div className={style.credential}>
          <p>This is just an Demo WebSite, created by Filip Trajkovic.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
