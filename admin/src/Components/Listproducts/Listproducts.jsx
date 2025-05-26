import React from "react";
import "./Listproducts.css";
import { useState } from "react";
import { use } from "react";
import { useEffect } from "react";
import remove from "../../assets/remove.png";

const Listproducts = () => {
  const [allproducts, setAllproducts] = useState([]);

  const fetchInfo = async () => {
    await fetch('https://backend-lvd9.onrender.com/allproducts')
      .then((res) => res.json())
      .then((data) => {
        setAllproducts(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    await fetch('https://backend-lvd9.onrender.com/removeproduct', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id:id}),
    });
    await fetchInfo();
  };

  return (
    <div className="listproducts">
      <h1>All Products List</h1>
      <div className="listproducts2">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproducts-allproducts">
        <hr />
        {allproducts.map((product, index) => {
          return (
            <>
              <div key={index} className="listproducts-format-main">
                <img
                  src={product.image}
                  alt=""
                  className="listproduct-product-icon"
                />
                <p>{product.name}</p>
                <p>{product.oldprice}د. إ</p>
                <p>{product.newprice}د. إ</p>
                <p>{product.category}</p>
                <img onClick={() => removeProduct(product.id)} src={remove} alt="" className="removeproduct" />
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Listproducts;
