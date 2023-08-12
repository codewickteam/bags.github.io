import React from 'react'
import './feature.css';

const Feature = ({id,image,description}) => {
  return (
    <div className='feactureContainer' key={id}>
      <img src={image} alt='img'/>
      <p>{description}</p>
    </div>
  )
}

export default Feature
