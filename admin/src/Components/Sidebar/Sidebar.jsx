import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom' 

//ASSETS
import addcart from '../../assets/addcart.png'
import listproduct from '../../assets/listproduct.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to="/addproduct" style={{textDecoration:"none"}}>
            <div className="sidebaritem">
                <img src={addcart} alt="" />
                <p>Add Product</p>
            </div>
        </Link>
        <Link to="/listproduct" style={{textDecoration:"none"}}>
            <div className="sidebaritem">
                <img src={listproduct} alt="" />
                <p>Product List</p>
            </div>
        </Link>
        
    </div>
  )
}

export default Sidebar