import React from "react";
import "./Descriptionbox.css";

const Descriptionbox = () => {
  return (
    <div className="descriptionbox">
      <div className="descripnav">
        <div className="descripnavbox">Description</div>
        <div className="descripnavbox fade">Reviews (122)</div>
      </div>
      <div className="description">
        <p>
          Artificial Elegance – where timeless beauty meets thoughtful design.
          We specialize in artificial and fresh flowers, curated to bring color
          and charm into every space. Whether you're looking for lifelike blooms
          that never fade or fresh bouquets for a special occasion, our
          collection offers elegance for every moment.
        </p>
        <p>
          Explore our handpicked glassware, vases, mugs, teasets, and decorative
          accents that elevate your home with style and grace. From minimalist
          centerpieces to statement floral arrangements, every item is chosen
          with care to reflect beauty that lasts. At Artificial Elegance, it's
          not just about flowers—it's about creating memories, elevating
          interiors, and celebrating life's simple joys.
        </p>
      </div>
    </div>
  );
};

export default Descriptionbox;
