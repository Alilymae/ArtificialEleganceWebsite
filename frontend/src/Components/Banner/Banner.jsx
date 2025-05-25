import React from "react";
import "./Banner.css";

//ASSETS
import logo from "../../assets/logo.png";

const Banner = () => {
  return (
    <>
      {/* QUOTE */}
      <div className="bannerquote">
        <div className="bannerimg">
            <img src={logo} alt="logo" />
        </div>
        <div className="bannertext">
          <h2>"Bringing Blooms to Life, One Petal at a Time." </h2>
          <p>- Artificial Elegance</p>
        </div>
      </div>
    </>
  );
};

export default Banner;
