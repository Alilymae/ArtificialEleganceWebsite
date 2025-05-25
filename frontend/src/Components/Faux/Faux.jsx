import React from "react";
import "./Faux.css";
import { Link } from "react-router-dom";

//DATA
import fauxflowers from "../../assets/fauxflowers";
import Item from "../Item/Item";

const Faux = () => {
  return (
    <div className="faux">
      <h1>Artificial Flowers</h1>
      <hr />
      <div className="fauxitem">
        {fauxflowers.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              newprice={item.newprice}
              oldprice={item.oldprice}
            />
          );
        })}
      </div>
      <div className="fauxbtn">
        <button><Link to="/artificials">Browse</Link></button>
      </div>
    </div>
  );
};

export default Faux;
