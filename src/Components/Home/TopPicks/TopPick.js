import React from 'react'
import './TopPick.css'
import Cards from './Cards'
import Feature from '../Features/Feature'
import { Link, useNavigate } from 'react-router-dom'

const arrow= <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m560-242-43-42 168-168H160v-60h525L516-681l43-42 241 241-240 240Z"/></svg>


const TopPick = ({data,FeatureData}) => {
const navigate =useNavigate();

  const handleredirect=()=>{
    navigate('/allproductpage')
  }

  if (!FeatureData || FeatureData.length === 0) {
    return (
      <div className='topPickContainer'>
        <div className='topCards' >
        {data.map((items)=>(
          <Cards id={items.id} 
                image={items.images}
                description={items.title}
                review={"4.5"}
                price={items.price}
                other={items.images}
          />
        ))}
        </div>
        <div className='topPickBtn'>
        <button onClick={handleredirect} >View all {arrow}</button>
        </div>
      </div>
    )
  }
  return (
    <div className='topPickContainer'>
      <div className='topCards' >
        {data.map((items)=>(
          <Cards id={items.id} 
                image={items.images}
                description={items.title}
                review={"4.5"}
                price={items.price}
                other={items.images}
          />
        ))}
        </div>

    <div className='topFeatures'>
      {FeatureData.map((items)=>(
        <Feature id={items.id} 
              image={items.image}
              description={items.description}
        />
      ))}
      </div>
      <div className='topPickBtn'>
        <button onClick={handleredirect} >View all {arrow}</button>
        </div>
    </div>
  )
}

export default TopPick
