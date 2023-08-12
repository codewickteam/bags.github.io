import React from 'react'
import './header.css'

const Header = ({item}) => {
  return (
    <div className='headerContainer'>
      {item}
    </div>
  )
}

export default Header
