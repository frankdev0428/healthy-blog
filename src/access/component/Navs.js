import React, { Component } from 'react';
import logo from "../images/logo.png"
import { Link } from 'react-router-dom';

  function Navs() {
  
    
    return (
      <div className='Navbar'>
         <h2>Healthy Lifestyle</h2>
         <img src={logo} className="logo-img" alt='Brand logo'></img>
         <ul className='navlinks'>
         <Link to = "/" className='links'> Home </Link>
         <Link to = "/about" className='links'> About us </Link>
         {/* <Link to = "/nutrition" className='links'> Nutrition </Link> */}
         <Link to = "/blogs" className='links'> Blogs Post </Link>
         <Link to = "/comment" className='links'> Comment </Link>
         </ul>
      </div>
  )

}

export default  Navs;
