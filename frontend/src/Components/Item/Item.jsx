import React from 'react'
import "./Item.css"
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <>
        <div className="item">
            <Link to= {`/product/${props.id}`}><img onClick={window.scrollTo(0, 0)} src={props.image} alt="" /></Link>
            <p>{props.name}</p>
            <div className="itemsprices">
                <div className="items-price-new">
                    {props.newprice} د. إ 
                </div>
                <div className="items-price-old">
                    {props.oldprice} د. إ 
                </div>
            </div>
        </div>
    </>
  )
}

export default Item