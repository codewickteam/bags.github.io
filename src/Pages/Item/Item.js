import React from 'react'
import TopItem from '../../Components/Item/TopItem'
import MiddleItem from '../../Components/Item/MiddleItem'
import BottomItem from '../../Components/Item/BottomItem'
import "./item.css"

function Item() {
  return (
    <div className='item'>
      <TopItem/>
      <MiddleItem/>
      <BottomItem/>
    </div>
  )
}

export default Item
