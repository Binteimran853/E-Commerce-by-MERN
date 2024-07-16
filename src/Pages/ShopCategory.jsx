import React from 'react'
import "./CSS/ShopCategory.css"
import { ShopContext } from '../Context/ShopContext'
const ShopCategory = (props) => {
  return (
    <div >
      <img src={props.banner} alt="" />
    </div>
  )
}

export default ShopCategory
