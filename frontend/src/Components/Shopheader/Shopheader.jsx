import React from "react";
import "./Shopheader.css";

//ASSETS
import shopbg from "../../assets/shopbg.jpg";

const Shopheader = () => {
  return (
    <>
      <div className="shopmaincon">
        <div className="shopbg">
          <img src={shopbg} alt="flowerbg" />
        </div>
        <div className="shopheadertext">
          <h1>Shop without Worry</h1>
          <p>
            Whether it’s love, gratitude, sympathy, or celebration, find flowers
            that say it all.
          </p>
          <button>Latest Collection &gt;</button>
        </div>
      </div>
    </>
  );
};

export default Shopheader;
