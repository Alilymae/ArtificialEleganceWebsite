import React from 'react'
import './Relatedproducts.css'
import dataproducts3 from '../../assets/data3'
import { data } from 'react-router-dom'
import Item from '../Item/Item'

const Relatedproducts = () => {
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproductsitem">
            {dataproducts3.map((item,i)=> {
                return <Item key={i} id={item.id} name={item.name} image={item.image} newprice={item.newprice} oldprice={item.oldprice}/>
            })}
        </div>
    </div>
  )
}

export default Relatedproducts