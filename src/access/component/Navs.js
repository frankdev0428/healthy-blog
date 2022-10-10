import React, { Component } from 'react';
import logo from "../images/logo.png"


  export default class navs extends Component {
  render() {
    return (
      <div className='Navbar'>
         <h2>Healthy Lifestyle</h2>
         <img src={logo} className="logo-img" alt='Brand logo'></img>
         <ul className='navlinks'>
         <a href="#" target="#blank"><li>Home</li></a>
         <a href="#" target="#blank"><li>About us</li></a>
         <a href="#" target="#blank"><li>Nutrition</li></a>
         <a href="#" target="#blank"><li>Blogs post</li></a>
         <a href="#" target="#blank"><li>Comment</li></a>
         </ul>
      </div>
    )
  }
}
