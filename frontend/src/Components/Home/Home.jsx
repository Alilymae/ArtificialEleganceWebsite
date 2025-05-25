import React, { useEffect, useRef, useCallback } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

//COMPONENTS
import Favorites from "../Favorites/Favorites";
import Popular from "../Popular/Popular";
import Maria from "../Maria/Maria"
import Banner from "../Banner/Banner";
import NewsLetter from "../NewsLetter/NewsLetter";

// CAROUSEL ASSETS
import flower1 from "../../assets/12.png";
import flower2 from "../../assets/13.png";
import flower3 from "../../assets/14.png";
import flower4 from "../../assets/15.png";
import flower0 from "../../assets/11.png";

const Home = () => {
  const nextBtnRef = useRef(null);
  const prevBtnRef = useRef(null);
  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const animTimeout = useRef(null);
  const isAnimating = useRef(false);

  const moveitemcarousel = useCallback((type) => {
    if (
      !listRef.current ||
      !carouselRef.current ||
      !nextBtnRef.current ||
      !prevBtnRef.current
    )
      return;

    const itemcarousels = listRef.current.querySelectorAll(".itemcarousel");

    if (type === "next") {
      // Move forward: remove first itemcarousel and append to end
      listRef.current.appendChild(itemcarousels[0]);
    } else if (type === "prev") {
      // Move backward: take last itemcarousel and insert at start
      listRef.current.insertBefore(itemcarousels[itemcarousels.length - 1], itemcarousels[0]);
    }

    carouselRef.current.classList.remove("next", "prev");
    isAnimating.current = false;
    nextBtnRef.current.style.pointerEvents = "auto";
    prevBtnRef.current.style.pointerEvents = "auto";
  }, []);

  useEffect(() => {
    const nextBtn = nextBtnRef.current;
    const prevBtn = prevBtnRef.current;
    const carousel = carouselRef.current;
    const list = listRef.current;

    if (!nextBtn || !prevBtn || !carousel || !list) return;

    let unAcceptClick;

    const showSlider = (type) => {
      nextBtn.style.pointerEvents = "none";
      prevBtn.style.pointerEvents = "none";

      // Clear existing animation classes
      carousel.classList.remove("next", "prev");

      const itemcarousels = list.querySelectorAll(".itemcarousel");
      if (type === "next") {
        // Immediately append first itemcarousel
        list.appendChild(itemcarousels[0]);
        carousel.classList.add("next");
      } else if (type === "prev") {
        // Immediately prepend last itemcarousel
        list.prepend(itemcarousels[itemcarousels.length - 1]);
        carousel.classList.add("prev");
      }

      clearTimeout(unAcceptClick);
      unAcceptClick = setTimeout(() => {
        nextBtn.style.pointerEvents = "auto";
        prevBtn.style.pointerEvents = "auto";
      }, 2000);
    };

    const handleNext = () => showSlider("next");
    const handlePrev = () => showSlider("prev");

    nextBtn.addEventListener("click", handleNext);
    prevBtn.addEventListener("click", handlePrev);

    return () => {
      nextBtn.removeEventListener("click", handleNext);
      prevBtn.removeEventListener("click", handlePrev);
      clearTimeout(unAcceptClick);
    };
  }, []);

  return (
    <div className="homemaincon">
      <div className="bg">
        <div className="header">
          <h1>Timeless Artistry</h1>
          <h2>
            Your one-stop destination for all things floral — where elegance
            blooms, petals speak, and every arrangement tells a story. Welcome
            to a world where petals speak, elegance lives on, and your floral
            dreams come to life.
          </h2>
          <div className="readmorebtn">
            <button>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                Read More
              </Link>
            </button>
          </div>
        </div>

        {/* CAROUSEL */}
        <div className="carousel" ref={carouselRef}>
          <div className="list" ref={listRef}>
            <div className="itemcarousel">
              <img src={flower0} alt="flower 0" />
            </div>
            <div className="itemcarousel">
              <img src={flower1} alt="flower 1" />
            </div>
            <div className="itemcarousel">
              <img src={flower2} alt="flower 2" />
            </div>
            <div className="itemcarousel">
              <img src={flower3} alt="flower 3" />
            </div>
            <div className="itemcarousel">
              <img src={flower4} alt="flower 4" />
            </div>
          </div>
        </div>

        {/* BUTTONS CONTROL */}
        <div className="arrows">
          <button id="prev" ref={prevBtnRef}>
            &lt;
          </button>
          <button id="next" ref={nextBtnRef}>
            &gt;
          </button>
        </div>
      </div>

      {/* FAVORITES SECTION */}
      <Favorites />
      {/* POPULAR SECTION */}
      <Popular />
      {/*MARIA MONTERO*/}
      <Maria />
      {/*BANNER*/}
      <Banner />
      {/*NEWSLETTER*/}
      <NewsLetter />
    </div>
  );
};

export default Home;
