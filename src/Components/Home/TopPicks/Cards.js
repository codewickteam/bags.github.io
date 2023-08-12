import React, { useState } from 'react';
import './Cards.css';
import { useNavigate } from 'react-router-dom';

const star = <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"/></svg>

const Cards = ({ id, image, description, review, price, other }) => {
  const [hovered, setHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(image[0]);
  const navigate=useNavigate();

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleImageClick = (newImage) => {
    setCurrentImage(newImage);
  };

  const handleredirect = (id) => {
    navigate(`/item/${id}`)
  }

  const handleImageClickdirect = () => {
    handleredirect(id);
  };


  return (
    <div className='cardsContainer' key={id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={hovered ? currentImage[2] : currentImage[0]} alt='img' onClick={handleImageClickdirect}/>
      <p>{description}</p>
      {review && <span className='review'> {star}{star}{star}{star}{star}{review} reviews</span>}
      <span className='price'>Rs. {price}</span>
      <div className='other'>
        {other.map((item, index) => (
          <img
            key={index}
            src={item[0]}
            alt='other'
            onClick={() => handleImageClick(item)}
          />
        ))}
      </div>
      <div className={hovered ? 'quickview' : 'hidden'}> Quick view</div>
    </div>
  );
};

export default Cards;
