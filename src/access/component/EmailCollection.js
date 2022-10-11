import React, { Component } from 'react'

export default class EmailCollection extends Component {
  render() {
    return (
      <div className='input-container'>
       <span className='images-email'></span>
       <div className='email-content'>
        <h2>Want to pump the brakes on skin aging?</h2> 
        <p>Join our 7-day challenge to curb signs of aging and glow up the skin you’re in.</p>
        <input type="email" placeholder='Enter your email'></input>
        <input type="submit" className='submit'></input>
        <p>Your <a href="#" target="#blank">privacy</a> important to us</p>
       </div>
      </div>
    )
  }
}
