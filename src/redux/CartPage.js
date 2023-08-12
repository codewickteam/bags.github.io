import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, incrementQuantity } from './skybagsSlice'

const CartPage = () => {

    const dispatch = useDispatch()

    const products = useSelector((state)=>state.skybags.products)

    const[totalPrice, setTotalPrice]=useState("")

    useEffect(()=>{
      let Total = 0;
      products.map((item)=>{
        Total += item.price * item.quantity
        return setTotalPrice(Total.toFixed(2))
      })
    },[products])

  return (
    <div>
      <div>
        <h1>CartItems</h1>
        <div>
            <h2>item names</h2>
            {
            products.map((items)=>(
                <div key={items.id}>
                    <span>{items.id}</span>

                <div style={{display:'flex'}}>
                    <button onClick={()=>dispatch(decrementQuantity(items.id))}>-</button>
                    <h3>{items.quantity}</h3>
                    <button onClick={()=>dispatch(incrementQuantity(items.id))}>+</button>
                </div>
                <span>{items.quantity*items.price}</span>
                {/* {price += items.quantity*items.price} */}
                </div>
            ))
            }
            <div>
              <h2>Subtotal</h2>
              <p>Total: {products.length > 0 ? totalPrice : 0}</p>
            </div>
            {/* <h2>Total Price: </h2><span>{price}</span> */}
        </div>
      </div>
    </div>
  )
}

export default CartPage
