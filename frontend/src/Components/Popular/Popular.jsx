import React, { useState } from "react";
import "./Popular.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

// CAROUSEL ASSETS
import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import f4 from "../../assets/f4.png";
import f5 from "../../assets/f5.png";
import f6 from "../../assets/f6.png";
import f7 from "../../assets/f7.jpeg";

const slides = [f1, f2, f3, f4, f5, f6, f7];
const titles = [
  "Pink Rose Bouquet Mix",
  "Purple Bouquet Mix",
  "White Rose Bouquet Mix",
  "Pink Surprise Bouquet",
  "Pink and Purple Bouquet Mix",
  "Fresh Red Rose Bouquet",
  "Multi-color Bouquet",
];

const slideWidth = 320; // width in px of each slide (20rem ~ 320px)

const Popular = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="trending">
      <div className="popmaincon">
        <div className="popcon">
          <h3 className="poptitle">What's Popular</h3>
          <hr id="popline" />
        </div>

        <div className="popcon" style={{ position: "relative" }}>
          <button className="navbtn navbtn-left" onClick={prevSlide}>
            &#8592;
          </button>

          <div
            className="slider-container"
          >
            <div
              className="slides-wrapper"
              style={{ transform: `translateX(-${current * slideWidth}px)` }}
            >
              {slides.map((slide, i) => (
                <div className="popslides" key={i}>
                  <div className="popimg">
                    <img src={slide} alt={`slide-${i}`} />
                  </div>
                  <div className="popcontent">
                    <div className="popheader">
                      <h2 className="poptext">{titles[i]}</h2>
                      <FontAwesomeIcon icon={faHeart} style={{ color: "#b41f77" }} />
                    </div>
                    <hr />
                    <div className="popbtn">
                      <button><Link to="/shop">Shop Now</Link></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="navbtn navbtn-right" onClick={nextSlide}>
            &#8594;
          </button>

          <div className="paginationbullets">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`bullet ${i === current ? "active" : ""}`}
                onClick={() => setCurrent(i)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
