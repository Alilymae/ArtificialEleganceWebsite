import React, { useContext } from "react";
import "./Productdisplay.css";
import { ShopContext } from "../../context/ShopContext";

import star from "../../assets/star.png";
import nostar from "../../assets/nostar.png";

const Productdisplay = (props) => {

  const {product} = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className="productdisplay">
      {/* LEFT: Image Thumbnails + Main Image */}
      <div className="productleft">
        <div className="pdlist">
          <img src={product.image} alt="product thumbnail" />
          <img src={product.image} alt="product thumbnail" />
          <img src={product.image} alt="product thumbnail" />
          <img src={product.image} alt="product thumbnail" />
        </div>
        <div className="productimg">
          <img className="mainimg" src={product.image} alt="main product" />
        </div>
      </div>

      {/* RIGHT: Details */}
      <div className="productright">
        <h1>{product.name}</h1>

        <div className="productrightstar">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={nostar} alt="no star" />
          <p>(122)</p>
        </div>

        <div className="displayprices">
          <div className="displayoldprice">{product.oldprice}د. إ</div>
          <div className="displaynewprice">{product.newprice}د. إ</div>
        </div>

        <div className="displaydescription">
          {product.description}
        </div>

        <div className="displaysize">
          <h1>Select Size</h1>
          <div className="productsize">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>

        <button onClick={() => {addToCart(product.id)}} className="addtocart">Add to Cart</button>

        <p className="displaycategory">
          <span>Category: {product.category}</span>
        </p>
        <p className="displaycategory">
          <span>Tags: Long lasting, Flower, Bouquet</span>
        </p>
      </div>
    </div>
  );
};

export default Productdisplay;
