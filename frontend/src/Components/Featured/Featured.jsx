import React from "react";
import "./Featured.css";
import dataproducts from "../../assets/data";
import Item from "../Item/Item";

const Featured = () => {
  return (
    <>
      <div className="featured">
        <h1>Featured in Artificials</h1>
        <hr />
        <div className="featureditem">
          {dataproducts.map((item,i)=> {
            return <Item key={i} id={item.id} name={item.name} image={item.image} newprice={item.newprice} oldprice={item.oldprice}/>
          })}
        </div>
      </div>
    </>
  );
};

export default Featured;
