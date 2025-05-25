import React from 'react'
import './Decor.css'
import { Link } from "react-router-dom";

//DATA
import decor from "../../assets/decor"
import Item from "../Item/Item";

const Decor = () => {
  return (
    <div className="decor">
      <h1>Decorations</h1>
      <hr />
      <div className="decoritem">
        {decor.map((item, i) => {
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
      <div className="decorbtn">
        <button><Link to="/decorations">Browse</Link></button>
      </div>
    </div>
  )
}

export default Decor