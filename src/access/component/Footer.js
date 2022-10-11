import React, { Component } from 'react'
export default class Footer extends Component {
  render() {
    return (
    <div className='footer'>
      <div className='header'>
      <h2 id="logo-title">Health & Fitness</h2>
      <div className='social-icons'>
       <a href="#" target="#blank"><i class="fa-brands fa-facebook"></i></a>
       <a href="#" target="#blank"><i class="fa-brands fa-twitter"></i></a>
       <a href="#" target="#blank"><i class="fa-brands fa-pinterest"></i></a>
       <a href="#" target="#blank"><i class="fa-brands fa-instagram"></i></a>
       <a href="#" target="blank"><i class="fa-brands fa-github"></i></a>
        </div>
      </div>
       <div className='footer-body'>
          <div className='email-input'>
            <h2>Get our wellness newsletter</h2>
            <p>Filter out the noise and nurture your inbox with health and wellness advice that’s inclusive and rooted in medical expertise.</p>
            <input type="email" placeholder="Enter your email"/>
            <input type="submit" value="SIGN UP"/>
            <p>Your <a href="#"target="#blank">privacy</a> is important to us.</p>
          </div>
          <div className='privacy-links'>
           <a href="#" target="#blank"><p>About us</p></a>
           <a href="#" target="#blank"><p>Contact us</p></a>
           <a href="#" target="#blank"><p>Terms of Use</p></a>
           <a href="#" target="#blank"><p>Privacy Policy</p></a>
           <a href="#" target="#blank"><p>Privacy Settings</p></a>
           <a href="#" target="#blank"><p>Advertising Policy</p></a>
          </div>
        </div>
      </div>
    )
  }
}
