import React from 'react'
import "./MiddleItem.css"
import M1 from "../../Assets/Images/m1.png"
import M2 from "../../Assets/Images/m2.png"
import M3 from "../../Assets/Images/m3.png"
import M4 from "../../Assets/Images/m4.png"
import M5 from "../../Assets/Images/m5.png"
import M6 from "../../Assets/Images/m6.png"
import M7 from "../../Assets/Images/m7.png"

function MiddleItem() {
  return (
    <div className='middle'>

      <div className='middle_Images'>
        
        <div className='middle_box_1'>
            <img src={M1} alt='img'/>
        </div>
      
      <div className='middle_box_2'>

        <img src={M2} alt='img'/>
        <img src={M3} alt='img'/>
        <img src={M4} alt='img'/>
      
      </div>
      
      <div className='middle_box_3'>
        <img src={M5} alt='img'/>
        <img src={M6} alt='img'/>
      </div>

      <div className='middle_box_4'>
        <img src={M7} alt='img'/>
      </div>

      </div>

    </div>
  )
}

export default MiddleItem
