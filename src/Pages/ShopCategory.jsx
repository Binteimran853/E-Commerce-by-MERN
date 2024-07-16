import React, { useContext } from 'react'
import "./CSS/ShopCategory.css"
import Items from '../Components/Items/Items'
import { ShopContext } from '../Context/ShopContext'
const ShopCategory = (props) => {
    const {all_products}=useContext(ShopContext);
    const dataArray=all_products.filter(products=>products.category===props.category).map((dataItem,index)=>{ return <Items id={dataItem.id} name={dataItem.name} image={dataItem.image} new_price={dataItem.new_price} old_price={dataItem.old_price} />})
  return (
    <div >
<img src={props.banner} alt="" />
<h1>{props.category}</h1>
{dataArray}
    </div>
  )
}

export default ShopCategory
