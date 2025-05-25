import React from 'react'
import "./NewCollections.css"
import data2 from "../../assets/data2"
import Item from "../Item/Item"

const NewCollections = () => {
  return (
    <>
      <div className='newcollections'>
        <h1>New Collections</h1>
        <hr />
        <div className="collections">
            {data2.map((item,i)=> {
            return <Item key={i} id={item.id} name={item.name} image={item.image} newprice={item.newprice} oldprice={item.oldprice}/>
          })}
        </div>
      </div>
    </>
  )
}

export default NewCollections