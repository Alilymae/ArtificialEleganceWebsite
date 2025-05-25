import React, { useContext } from 'react'
import "./CSS/Category.css"
import Item from '../Components/Item/Item'
import { ShopContext } from '../context/ShopContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Category = (props) => {
  const {allproducts} = useContext(ShopContext);
  return (
    <div className="shopcategory">
      <img className= "category-banner" src={props.banner} alt="banner" />
      <div className="category-indexsort">
        <p>
          <span>Showing 1-20</span> out of 80 products
        </p>
        <div className="category-sort">
          Sort by <FontAwesomeIcon icon="fa-solid fa-caret-down" />
        </div>
      </div>
      <div className="category-products">
        {allproducts.map((item, i) => {
          if (props.category===item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} newprice={item.newprice} oldprice={item.oldprice}/>
          }
          else{
            return null
          }
        })}
      </div>
      <div className="loadmorebtn">
        Explore More
      </div>
    </div>
  )
}

export default Category