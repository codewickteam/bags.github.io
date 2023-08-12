import React from 'react'
import './slider.css'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../../../Assets/Data.json'

const Slider = () => {
  return (
    <Carousel fade>
       

       {data.slider.map((item)=>(
            <Carousel.Item>
            <img
              className="d-block w-100"
              src={item.itemurl}
              alt="First slide"
            />
          </Carousel.Item>
       ))}
       
      </Carousel>
  )
}

export default Slider
