import React, { useContext } from 'react'
import "./CSS/ShopCategory.css"
import { ShopContext } from '../Context/ShopContext'
const ShopCategory = (props) => {
    const {all_products}=useContext(ShopContext);
    
  return (
    <div >
<img src={props.banner} alt="" />
<h1>{props.category}</h1>
<h2>{all_products}</h2>
    </div>
  )
}

export default ShopCategory
