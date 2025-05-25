import React from "react";
import "./Servicesintro.css";
import s1 from "../../assets/s1.jpg";
import s2 from "../../assets/s2.jpg";
import s3 from "../../assets/s3.jpg";
import s4 from "../../assets/s4.jpg";

const Servicesintro = () => {
  return (
    <section className="services-section">
  <div className="servleft">
    {/* TEXT FIRST, IMAGE SECOND */}
    <div className="services-text">
      <h2>Signature Services</h2>
      <p>
        At <strong>Artificial Elegance</strong>, we craft timeless moments
        with fresh floral bouquets, elegant artificial arrangements, stylish
        mugs, and bespoke decorations tailored to your events.
      </p>
      <button>Explore Services</button>
    </div>
    <div className="services-images">
      <img src={s1} alt="Custom Floral Mug" />
      <img src={s2} alt="Fresh Flower Arrangement" />
    </div>
  </div>

  <div className="servright">
    {/* IMAGE FIRST, TEXT SECOND */}
    <div className="services-images2">
      <img src={s3} alt="Custom Floral Mug" />
      <img src={s4} alt="Fresh Flower Arrangement" />
    </div>
    <div className="services-text2">
      <h2>Quality Products</h2>
      <p>
        At <strong>Artificial Elegance</strong>, we pride ourselves on
        offering high-quality products that bring beauty and elegance to
        every space. Our fresh flowers, artificial arrangements, and mugs
        are crafted with care, ensuring they last for generations.
      </p>
      <button>Explore Services</button>
    </div>
  </div>
</section>

  );
};

export default Servicesintro;
