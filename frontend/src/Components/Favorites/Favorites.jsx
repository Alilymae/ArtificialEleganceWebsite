import React from 'react';
import './Favorites.css';

// Images
import artificial from '../../assets/card1.png';
import teasets from '../../assets/card2.png';
import vases from '../../assets/card3.png';
import fresh from '../../assets/card4.png';

const Favorites = () => {
  return (
    <div className="favourites-container">
      <h4>Proudly Presenting</h4>
      <h1>Our Favourites</h1>

      <div className="favourites-grid">
        <div className="card card-large">
          <img src={artificial} alt="Artificial Bouquets" />
        </div>
        <div className="card card-small">
          <img src={teasets} alt="Tea-sets" />
        </div>
        <div className="card card-vertical">
          <img src={vases} alt="Vases" />
        </div>
        <div className="card card-wide">
          <img src={fresh} alt="Fresh Bouquets" />
        </div>
      </div>
    </div>
  );
};

export default Favorites;
