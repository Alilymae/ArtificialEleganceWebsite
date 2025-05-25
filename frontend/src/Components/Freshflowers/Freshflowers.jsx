import React from 'react'
import './Freshflowers.css'
import { Link } from "react-router-dom";

//DATA
import fresh from "../../assets/fresh";
import Item from "../Item/Item";

const Freshflowers = () => {
  return (
    <div className="fresh">
      <h1>Fresh Flowers</h1>
      <hr />
      <div className="freshitem">
        {fresh.map((item, i) => {
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
      <div className="freshbtn">
        <button><Link to="/fresh-flowers">Browse</Link></button>
      </div>
    </div>
  )
}

export default Freshflowers