import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class MoreBlogsSection extends Component {
  render() {
    return (
      <div className='more-blogs-container'>
        <h2 className='title'>MORE BLOGS TO READ</h2>
        <hr/>
        <div className="style-box">
        <div className='blogs-cont'>
         <span className='blog-images-1'></span>
         <Link to='/12-meaningfullthing-you-can-do-for-breast-cancer-awareness-months'><h3>12 Meaningful Things You can Do for Breast Cancer Awareness Month</h3></Link>
        </div>
        <div className='blogs-cont'>
        <span className='blog-images-2'></span>
         <Link to ='/new-omicron-booster-side-effect:what-to-expect'><h3>New Omicron Booster Side Effects: What to Expect</h3></Link>
        </div>
        <div className='blogs-cont'>
        <span className='blog-images-3'></span>
         <Link to ='/autumn-anxiety-why-you-may-feel-more-stressed'><h3>Autumn Anxiety: Why You May Feel More Stressed This Season</h3></Link>
        </div>
        <div className='blogs-cont'>
        <span className='blog-images-4'></span>
         <Link to = '/answer-to-your-questions-about-stillbirth'><h3>Answer to Your Questions About Stillbirth</h3></Link>
        </div>
        </div>
        
      </div>
    )
  }
}
