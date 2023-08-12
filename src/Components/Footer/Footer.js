import React from 'react';
import './footer.css';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footerCon'>
    <div className='footerContainer'>
      <div className='footertop'>
        <p>CATEGORIES</p>
        <ul>
          <li><Link to="/">Backpack</Link></li>
          <li><Link to="/">Duffle</Link ></li>
          <li><Link to="/">Luggage</Link></li>
        </ul>
      </div>
      <div className='footertop'>
        <p>OTHER LINKS</p>
        <ul>
          <li><Link to="/">About Us</Link ></li>
          <li><Link to="/">Store Locator</Link ></li>
          <li><Link to="/">FAQ</Link ></li>
        </ul>
      </div>
      <div className='footertop'>
        <p>POLICIES</p>
        <ul>
          <li><Link to="/">Privacy Policy</Link></li>
          <li><Link to="/">Cancellation,Return & Refund Policy</Link ></li>
          <li><Link to="/">Terms of Services</Link ></li>
          <li><Link to="/">Skybags Back to School Offer 2023 TnC</Link ></li>
          <li><Link to="/">Warranty</Link></li>
        </ul>
      </div>
      <div className='footertop'>
        <p>SUPPORT</p>
        <ul>
          <li><Link to="/">Register Product</Link ></li>
          <li><Link to="/">Enquiry</Link ></li>
          <li><Link to="/">Product Utility</Link ></li>
        </ul>
      </div>
      <div className='footertop'>
        <p>ADDRESS</p>
        <ul>
          <li><Link to="/">xyz AREA</Link ></li>
          <li><Link to="/">DGP House, 5th Floor, 88C, Old Prabhadevi Road, Mumbai - 400025</Link ></li>
          <li><Link to="/">Phone: 1234567890 </Link ></li>
          <li><Link to="/">Mail: abcdefghijklmnopqrstuvwxyz</Link ></li>
          <li><Link to="/">(Monday To Sunday, 9.00 AM To 6 PM)</Link ></li>
        </ul>
      </div>
    </div>
    <div className='copyright'>
           <span> ©2023 ME</span>
      </div>
    </div>
  )
}

export default Footer
