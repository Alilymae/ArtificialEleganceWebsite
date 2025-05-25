import React from 'react'
import './Glass.css'
import { Link } from "react-router-dom";

//DATA
import glasscateg from "../../assets/glasscateg"
import Item from "../Item/Item";

const Glass = () => {
  return (
    <div className="glass">
      <h1>Glassware</h1>
      <hr />
      <div className="glassitem">
        {glasscateg.map((item, i) => {
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
      <div className="glassbtn">
        <button><Link to="/glassware">Browse</Link></button>
      </div>
    </div>
  )
}

export default Glass