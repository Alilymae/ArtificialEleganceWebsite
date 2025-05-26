import React from "react";
import "./Maria.css";

//IMAGES
import maria from "../../assets/maria.png";
import name from "../../assets/name.png";
import mm from "../../assets/mm.png";

const Maria = () => {
  return (
    <>
      <div className="mariamaincon">
        <div className="mariabg">
          <div className="flexcon">
            <div className="mpic">
              <img src={maria} alt="Maria Montero" />
            </div>
            <div className="mcontent">
              <h1>Hey There!</h1>
              <hr id="mariahr" />
              <p>
                Welcome to Artificial Elegance, where flowers never fade. I’m
                thrilled to share our passion for everlasting beauty with you.
                Every arrangement is designed with care, blending charm and
                elegance to suit any space or celebration. Our faux florals
                offer lasting joy without the upkeep. We believe in making life
                a little lovelier—one petal at a time. Thank you for supporting
                our floral journey and helping our small business bloom.
              </p>
              <img src={name} alt="Maria Montero Name" />
              <br />
              <button id="rm">Read More</button>
            </div>
          </div>
        
        </div>
        <div className="signature">
            <img src={mm} alt="Maria Montero MM" />
          </div>
      </div>
    </>
  );
};

export default Maria;
