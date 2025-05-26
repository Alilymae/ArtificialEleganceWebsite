import React from "react";
import "./Addproducts.css";
import uploadimg from "../../assets/uploadimg.png";
import { useState } from "react";

const Addproducts = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    oldprice: "",
    newprice: "",
    category: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const addProduct = async () => {
    console.log(productDetails);
    let responseDat;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("https://backend-lvd9.onrender.com/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseDat = data;
      });

    if (responseDat.success) {
      product.image = responseDat.image_url;
      console.log(product);
      await fetch("https://backend-lvd9.onrender.com/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          data.success ? alert("Product added") : alert("Product not added");
        });
    }
  };

  return (
    <div className="addproducts">
      <div className="addproductfield">
        <p>Product title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Type here"
        />
      </div>
      <div className="addproductprice">
        <div className="addproductfield">
          <p>Price</p>
          <input
            value={productDetails.oldprice}
            onChange={changeHandler}
            type="text"
            name="oldprice"
            placeholder="Type here"
          />
        </div>
        <div className="addproductfield">
          <p>Offer Price</p>
          <input
            value={productDetails.newprice}
            onChange={changeHandler}
            type="text"
            name="newprice"
            placeholder="Type here"
          />
        </div>
      </div>
      <div className="addproductfield">
        <p>Product Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className="addproductselector"
        >
          <option value="" disabled>
            -- Select category --
          </option>
          <option value="Artificials">Artificials</option>
          <option value="Fresh Flowers">Fresh Flowers</option>
          <option value="Glassware">Glassware</option>
          <option value="Decorations">Decorations</option>
        </select>
      </div>
      <div className="addproductfield">
        <label htmlFor="fileinput">
          <img
            src={image ? URL.createObjectURL(image) : uploadimg}
            className="addthumbnail"
            alt=""
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="fileinput"
          hidden
        />
      </div>
      <button onClick={addProduct} className="addproductbtn">
        Add
      </button>
    </div>
  );
};

export default Addproducts;
