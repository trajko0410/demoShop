import { Link } from "react-router-dom";

import facebook from "../../img/facebook.png";
import instagram from "../../img/instagram.png";
import linkedin from "../../img/linkedin.png";
import github from "../../img/github.png";

import style from "./SocialMedia.module.css";

function SocialMedia() {
  return (
    <div className={style.icons}>
      <ul>
        <li>
          <a href="facebook.com">
            <img src={facebook} alt="Facebook logo"></img>
            <h3>Facebook</h3>
          </a>
        </li>
        <li>
          <Link to="https://facebook.com">
            <img src={instagram} alt="Instagram logo"></img>

            <h3>Instagram</h3>
          </Link>
        </li>
        <li>
          <a href="facebook.com">
            <img src={github} alt="GitHub logo"></img>
            <h3>GitHub</h3>
          </a>
        </li>
        <li>
          <a href="facebook.com">
            <img src={linkedin} alt="Linkedin logo"></img>
            <h3>Linkedin</h3>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialMedia;
