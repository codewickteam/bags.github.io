import React from 'react'
import './banner2.css'

const Banner2 = ({id,image}) => {
  return (
    <div className='banner2Container' key={id}>
     <img src={image} alt='banner2image'/>
    </div>
  )
}

export default Banner2
