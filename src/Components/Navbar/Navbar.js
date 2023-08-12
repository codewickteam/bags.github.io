import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { useSelector } from 'react-redux'
import logo from '../../Assets/Images/skybags-logo.png'

const Navbar = () => {

    const products = useSelector((state)=>state.skybags.products)

  return (
    <Wrap>
      <div className="container">
        {/* <div className="logo">
          <img src={logo} alt="" />
        </div> */}

        <div className="links">
          <div><Link to='/'>What's New</Link></div>
          <div><Link to='/'>Luggage</Link></div>
          <div><Link to='/'>Backpack</Link></div>
          <div><Link to='/'>Duffles</Link></div>
          <div><Link to='/'>VIP Bags</Link></div>
          <div><Link to='/'>Student Offers</Link></div>
        </div>

        <div className="cart flex">
          <div><Link to='/cart'>Cart</Link></div>
          <div>: {products.length > 0 ? products.length : 0}</div>
        </div>
      </div>
    </Wrap>
  )
}

export default Navbar

const Wrap = styled.div`
      background-color: white;
      /* width: 100%; */
      .flex{
        display: flex;
      }
      .container{
        width: 3000px;
        /* height: 500px; */
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* gap: 30px; */
        /* padding: 30px; */
    }
    .links{
      display: flex;
      gap: 25px;
    }
    a{
        color: black;
        font-size: 15px;
        text-decoration: none;
        width: auto;
        margin: auto;
    }
    img{
      width: 50%;
    }
    .cart{
      margin-left: 0px;
    }
`
