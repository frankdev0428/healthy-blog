import React, { Component } from 'react'
import breast from '../images/breast-caner.webp';
import { Link } from 'react-router-dom';

export default class DailyBlogs extends Component {
  render() {
    return (
      <div className='blogs-container'>
        <h2 className='title'>DAILY BLOGS</h2>
        <hr/>
        <div className="blogs-hero-section">
         <span className='images-1'></span>
         <div className="blog-content">
          <Link to ='/life-after-breast-cancer'><h2>Life After Breast Cancer:What to Expect When Treatment Ends</h2></Link>
          <p>Learn the long-term physical and emotional effects of breast cancer treatment.</p>
         </div>
        </div>
        <div className="blogs-hero-section">
        <span className='images-2'></span>
        <div className="blog-content">
          <Link to= '/how-to-support-families-after-miscarriage'><h2>Sober October: What a Month of No Drinking Can Do for Mental Health</h2></Link>
          <p>Experts say taking a break from alcohol can help your overall health.</p>
         </div>   
        </div>
        <div className="blogs-hero-section">
        <span className='images-3'></span>
        <div className="blog-content">
          <Link to='/does-social-distancing-impact-the-immune-systems'><h2>How to Support Families After Miscarriage or Infant Loss</h2></Link>
          <p>Parents share ideas for support after miscarriage, infant loss, and stillbirth.</p>
         </div>   
        </div>
        <div className="blogs-hero-section">
        <span className='images-4'></span>
        <div className="blog-content">
          <Link to ='/does-social-distancing-impact-the-immune-systems'><h2>Does Social Distancing Impact the Immune System?</h2></Link>
          <p>We share the science-backed impacts of social distancing on your health.</p>
         </div>   
        </div>
      </div>
    )
  }
}
