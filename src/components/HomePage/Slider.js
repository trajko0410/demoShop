import { useState } from "react";
import { Link } from "react-router-dom";

import space1 from "../../img/vecteezy_nebula-space-wallpaper_8114541_215.jpg";
import space2 from "../../img/vecteezy_nebula-space-wallpaper_8114533_704.jpg";
import space3 from "../../img/vecteezy_nebula-space-wallpaper_8114540_992.jpg";

import style from "../HomePage/Slider.module.css";

const UredjajiSlider = () => {
  const items = [
    {
      id: 0,
      title: "iPad",
      description:
        "The all-new iPad is colorfully reimagined to be more capable, more intuitive, and even more fun. With a new all‑screen design, 10.9-inch Liquid Retina display, and four gorgeous colors, iPad delivers a powerful way to get things done, create, and stay connected.1 Add on essential accessories designed just for iPad and enjoy endless versatility for everything you love to do.",
      photo: space1,
    },
    {
      id: 1,
      title: "iPhone",
      description:
        "Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else. You can track your next ride, see who’s calling, check your flight status, and so much more. ",
      photo: space2,
    },
    {
      id: 2,
      title: "Mac",
      description:
        "MacBook Air with M1 is an incredibly portable laptop — it’s nimble and quick, with a silent, fanless design and a beautiful Retina display. Thanks to its slim profile and all‑day battery life, this Air moves at the speed of lightness. ",
      photo: space3,
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <div className={style.slider}>
      <ul>
        {items.map((item, id) => (
          <li
            key={id}
            style={{ backgroundImage: `url(${item.photo})` }}
            className={active === id ? style.active : ""}
            role="button"
            onClick={() => setActive(id)}
          >
            <div className={style.overlay}>
              <h3>{item.title}</h3>
              <div className={style.sectionContent}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <div className={style.buttons}>
                  <div className={style.reedmore}>Reed More</div>
                  <Link to="/Shop">
                    <div className={style.buynow}>Shop</div>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}; //Ovde na liku mogu da stavim navlik i da prosledim params gde bi mi setovao bas taj item u shopu.

export default UredjajiSlider;
