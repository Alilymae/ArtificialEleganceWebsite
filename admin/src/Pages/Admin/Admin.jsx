import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
//COMPONENTS for admin panel
import Addproducts from '../../Components/Addproducts/Addproducts'
import Listproducts from '../../Components/Listproducts/Listproducts'

const Admin = () => {
  return (
    <div className='admin'>
        <Sidebar />
        <Routes>
            <Route path="/addproduct" element={<Addproducts />} />
            <Route path="/listproduct" element={<Listproducts />} />
        </Routes>
    </div>
  )
}

export default Admin