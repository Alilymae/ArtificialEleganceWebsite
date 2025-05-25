import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';

import Breadcrumb from '../Components/Breadcrumb/Breadcrumb';
import Productdisplay from '../Components/Productdisplay/Productdisplay';
import Descriptionbox from '../Components/Descriptionbox/Descriptionbox';
import Relatedproducts from '../Components/Relatedproducts/Relatedproducts';

const Product = () => {
const {allproducts} =useContext(ShopContext);
const {productId} = useParams();
const product = allproducts.find((e) => e.id === Number(productId)); 

  return (
    <>
        <Breadcrumb product={product} />
        <Productdisplay product={product} />
        <Descriptionbox />
        <Relatedproducts />
    </>
  )
}

export default Product