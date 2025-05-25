import React from "react";
import "./CSS/Shopcategory.css";

//COMPONENT
import Favorites from "../Components/Favorites/Favorites";
import Faux from "../Components/Faux/Faux";
import Freshflowers from "../Components/Freshflowers/Freshflowers";
import Glass from "../Components/Glass/Glass";
import Decor from "../Components/Decor/Decor";

const Shopcategory = () => {
  return (
    <>
      <div className="categmaincon">
        <div className="categbanner">
          <div className="overlay">{/* OVERLAY DUH*/}</div>
          <div className="categcontent">
            <div className="categtitle">
              <h2>Explore our Varieties</h2>
              <p>"Everything you'll ever need in one place"</p>
            </div>
          </div>
        </div>
      </div>
      {/* FAVORITES SECTION */}
      <Favorites />
      <Faux />
      <Freshflowers />
      <Glass />
      <Decor />
    </>
  );
};

export default Shopcategory;
