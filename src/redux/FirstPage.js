import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from './skybagsSlice'
import {data} from '../API/data'
import img from '../Assets/Images/JERRYC55BGN1_900x.jpg'

const FirstPage = () => {

    console.log(data[0].images[0][0]);
    // const data = [
    //     {
    //         id: 1,
    //         items:1
    //     },
    //     {
    //         id: 2,
    //         items: 2
    //     }
    // ]

    const dispatch = useDispatch()
    const id1 = 1;
    const item1 = 1;
    const price1 = 10;

    const id2 = 2;
    const item2 = 2;   
    const price2 = 20;

    const id3 = 3;
    const item3 = 3;
    const price3 = 30;

  return (
    <div>
      this is home

      <div>
        <div>
          <div>
            {
              data.map((items)=>(
                <div key={items.id}>{items.id}
                <img style={{width: '300px'}} src={items.images[0][0]} alt="121" />
                <span>{items.title.substring(0, 3)}</span>
                <button onClick={()=>dispatch(addToCart({
                  id:items.id,
                  quantity:1,
                  price:parseInt(items.price)

                }))}>this is button {items.id}</button></div>
              ))
            }
          </div>
            {/* <button onClick={()=>dispatch(addToCart({
                id:id1,
                quantity:item1,
                price:price1
            }))}>Add to cart 1</button>

            <button onClick={()=>dispatch(addToCart({
                id:id2,
                quantity:item2,
                price:price2
            }))}>Add to cart 2</button>

            <button onClick={()=>dispatch(addToCart({
                id:id3,
                quantity:item3,
                price:price3
            }))}>Add to cart 3</button> */}
        </div>
      </div>
    </div>
  )
}

export default FirstPage
