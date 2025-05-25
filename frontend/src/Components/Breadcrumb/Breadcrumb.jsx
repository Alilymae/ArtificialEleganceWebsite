import React from 'react'
import "./Breadcrumb.css"
import arrow from "../../assets/arrow.png"

const Breadcrumb = (props) => {
    const {product} = props;

  return (
    <>
     <div className="breadcrum">
        Home <img src={arrow} alt="" /> Shop <img src={arrow} alt="" /> {product.category} <img src={arrow} alt="" /> {product.name}
     </div>
    </>
  )
}

export default Breadcrumb