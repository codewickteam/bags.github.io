import React from 'react'
import { useSelector } from 'react-redux'

const CartItems = () => {

  // const products = useSelector((state)=>state.skybagsReducer.products)
  const products = useSelector((state)=>state.skybags.products)
  console.log(products);

  return (
    <div>
        <div>
            <h1>Cart</h1>
            <h3>items</h3>
            <h4>{products.length > 0 ? products.length : 0}</h4>
        </div>
    </div>
  )
}

export default CartItems
