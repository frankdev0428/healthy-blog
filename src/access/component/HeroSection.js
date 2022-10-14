import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class HeroSection extends Component {
  render() {
    return (
      <div className='hero-container'>
       <div className='hero-box' id="box-1">
        <div className='content-box'>
        <Link to = "/your-skin-is-super-hero"><h2 >How to Skip Beauty Buzzwords, Plus 12 Ingredients Derms Love</h2></Link>
         <p>Derms share their favorite ingredients and the ones you can skip</p>
        </div>
       </div>
       <div className='hero-box' id="box-2">
       <div className='content-box'>
       <Link to ="/your-skin-is-super-hero"><h2>Your Skin Is a Superhero: How to Support Your Biggest Organ</h2></Link>
        <p>Learn how to take care of and give back to your largest organ,your skin.</p>
         </div>
       </div>
      </div>
    )
  }
}
