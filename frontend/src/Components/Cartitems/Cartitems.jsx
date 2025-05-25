import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import "./Cartitems.css";

//ASSETS
import remove from "../../assets/remove.png";

const Cartitems = () => {
  const { getTotalAmount, allproducts, cartItems, addToCart, removeFromCart } =
    useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitemsmain">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
        {allproducts.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div>
                <div className="cartitemsmain cartitemsformat">
                  <img src={e.image} alt="" className="cartitmeicon" />
                  <p>{e.name}</p>
                  <p>{e.newprice} د. إ</p>
                  <button className="cartitemsquantity">{cartItems[e.id]}</button>
                  <p>{e.newprice*cartItems[e.id]} د. إ</p>
                  <img className="removeicon" src={remove} onClick={() => removeFromCart(e.id)} alt="" />
                </div>
                <hr />
              </div>
            );
          }
          return null
        })}
        <div className="cartitemsdown">
            <div className="cartitemstotal">
                <h1>Cart Total:</h1>
                <div>
                    <div className="cartitemstotalitem">
                        <p>Subtotal</p>
                        <p>{getTotalAmount()}د. إ</p>
                    </div>
                    <hr />
                    <div className="cartitemstotalitem">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitemstotalitem">
                        <h3>Total</h3>
                        <h3>{getTotalAmount()}د. إ</h3>
                    </div>
                </div>
                <button>Proceed to Checkout</button>
            </div>
            <div className="cartitemspromo">
                <p>if you have a coupon code, Enter it here</p>
                <div className="promobox">
                    <input type="text" placeholder="promo code" />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Cartitems;
