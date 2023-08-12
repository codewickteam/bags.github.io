import React from 'react'
import Cards from '../../Components/Home/TopPicks/Cards'
import {data} from '../../API/data';
import './allProduct.css'

const AllProductPage = () => {
  return (
    <div className='allProductContainer'>
        <div className='allProductCard' >
        {data.map((items)=>(
          <Cards id={items.id} 
                image={items.images}
                description={items.title}
                price={items.price}
                other={items.images}
          />
        ))}
        </div>
      
    </div>
  )
}

export default AllProductPage
