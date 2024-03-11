import { useState } from "react";

import style from "../components/Slider.module.css";
import space1 from "../img/vecteezy_milky-way-galaxy-with-stars-and-space-dust-in-the-universe_11247099_991.jpg";
import space2 from "../img/vecteezy_nebula-space-wallpaper_8114533_704.jpg";
import space3 from "../img/vecteezy_nebula-space-wallpaper_8114540_992.jpg";

import SliderItems from "./SliderItems";

function Slider() {
  const items = [
    {
      id: 0,
      title: "iPod",
      description:
        "The all-new iPad is colorfully reimagined to be more capable, more intuitive, and even more fun. With a new all‑screen design, 10.9-inch Liquid Retina display, and four gorgeous colors, iPad delivers a powerful way to get things done, create, and stay connected.1 Add on essential accessories designed just for iPad and enjoy endless versatility for everything you love to do.",
      photo: space1,
    },
    {
      id: 1,
      title: "iPhone",
      description:
        "Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else. You can track your next ride, see who’s calling, check your flight status, and so much more.",
      photo: space2,
    },
    {
      id: 2,
      title: "Mac",
      description:
        "MacBook Air with M1 is an incredibly portable laptop — it’s nimble and quick, with a silent, fanless design and a beautiful Retina display. Thanks to its slim profile and all‑day battery life, this Air moves at the speed of lightness.",
      photo: space3,
    },
  ];
  const [slideIndex, setSlideIndex] = useState(0);

  function goToSlide(slideIndex) {
    setSlideIndex(slideIndex);
  }

  function nextSliderHandler() {
    const isLastSlide = slideIndex === items.length - 1;
    if (isLastSlide) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  }
  function prevSliderHandler() {
    const isFirstSlide = slideIndex === 0;
    if (isFirstSlide) {
      setSlideIndex(items.length - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  }

  return (
    <>
      <div className={style.sections}>
        {/* <div className={style.prevSlide} onClick={prevSliderHandler}>
          ❰
        </div>*/}

        {items.map((item, idx) => {
          return (
            <div
              key={idx}
              className={
                slideIndex === item.id ? style.slide : style.slidehidden
              }
            >
              <SliderItems itemdata={item} />
            </div>
          );
        })}

        {/*<div className={style.nextSlide} onClick={nextSliderHandler}>
          ❱
      </div>*/}
      </div>
      <div className={style.dotsContainer}>
        {items.map((item, idx) => (
          <div
            className={
              slideIndex === item.id ? style.dotStyle : style.dotStylenotactive
            }
            key={idx}
            onClick={() => goToSlide(item.id)}
          >
            ●
          </div>
        ))}
      </div>
    </>
  );
}
export default Slider;
