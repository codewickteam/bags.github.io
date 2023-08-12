import React from 'react';
import './banner.css';

const Banner = ({ data }) => {
  return (
    <div className='bannerContainer'>
      {data.map((items, index) => (
        <div key={index}>
          <img src={items.itemurl} alt='img' className='imagebanner'/>
          <div className='descbanner'>{items.description}</div>
          
        </div>
      ))}
    </div>
  );
};

export default Banner;
