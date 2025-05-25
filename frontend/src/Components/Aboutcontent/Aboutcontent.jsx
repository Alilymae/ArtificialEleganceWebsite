import React from "react";
import "./Aboutcontent.css";

//COMPONENTS
import Maria from "../Maria/Maria";
import Banner from "../Banner/Banner";

//ASSETS
import flower1 from "../../assets/flowers1.jpg";
import flower2 from "../../assets/flowers2.jpg";
import flower3 from "../../assets/flowers3.jpg";

const Aboutcontent = () => {
  return (
    <>
      <div className="aboutmaincon">
        <video autoPlay loop muted playsInline className="about-bg-video">
          <source src={require("../../assets/aboutbg.mp4")} type="video/mp4" />
        </video>
        <div className="about-content-overlay">
          <h1>About the Business</h1>
        </div>
        <div className="aboutcon">
          <section className="about-intro">
            <h1>Artificial Elegance Flowers</h1>
            <p>
              Our passion is to bring beauty, joy, and a touch of nature’s
              elegance into every moment of your life. Discover our story, our
              values, and the team that makes it all bloom. Artificial Elegance
              began as a simple yet powerful vision in the heart of a passionate
              woman with an eye for beauty and a love for florals. What started
              as a dream to make flowers last forever quickly blossomed into a
              business built on dedication, creativity, and resilience.
            </p>
            <p>
              From late nights designing lifelike arrangements on her living
              room floor to sourcing the finest materials that mimic the grace
              of real blooms, she poured her heart into every petal and detail.
              Her mission was clear — to create floral pieces that never fade,
              that could light up a space and bring lasting joy.
            </p>
            <p>
              Through years of hard work, learning, and unwavering belief in her
              craft, she turned that dream into reality. Today, Artificial
              Elegance is not just a brand — it's a reflection of her journey,
              her artistry, and the values she holds dear: quality, longevity,
              and heartfelt expression. Each arrangement you see is more than
              decor — it's a piece of her story, thoughtfully designed to help
              you celebrate yours.
            </p>
          </section>
        </div>{" "}
      </div>
      <Maria />

      <div className="about-wrap">
        <section className="about-section">
          <div className="about-imgs">
            <div className="img-card">
              <img src={flower1} alt="Elegant flower arrangement" />
            </div>
            <div className="img-card">
              <img src={flower2} alt="Bouquet closeup" />
            </div>
            <div className="img-card">
              <img src={flower3} alt="Shop interior with flowers" />
            </div>
          </div>

          <div className="about-content">
            <h2>Our Story</h2>
            <p>
              Elegance Flowers began with a simple vision: to bring timeless
              beauty and joy to every occasion. Our team of passionate florists
              crafts each arrangement with care, blending creativity and quality
              to deliver lasting impressions.
            </p>
            <br />
            <p>
              We are committed to quality and sustainability, ensuring that
              every bouquet is a reflection of our commitment to excellence.
              Join us in celebrating life's simple joys and embracing the art of
              floral elegance.
            </p>
          </div>
        </section>
      </div>

      <hr className="abouthr" />

      <div className="values-section">
        <h2>Our Values</h2>
        <ul className="values-list">
          <li>
            Customers always come first—your happiness is our top priority
          </li>
          <li>We craft each floral design with care and creativity</li>
          <li>
            We are committed to quality and lasting beauty in every bouquet
          </li>
          <li>We value sustainability and support our local community</li>
          <li>We embrace innovation while honoring tradition</li>
          <li>Each creation tells a story with passion and purpose</li>
          <li>Integrity guides all our relationships and actions</li>
          <li>We celebrate life’s moments—big or small—with beauty</li>
        </ul>
      </div>

      <hr className="abouthr" />
      <Banner />

      <section className="contact-section">
        <h3>Connect with Us</h3>
        <p>
          For inquiries, feedback, or collaborations, reach out to us at{" "}
          <a href="artificial.eleganceflowers@gmail.com">artificial.eleganceflowers@gmail.com</a>
        </p>
      </section>
    </>
  );
};

export default Aboutcontent;
