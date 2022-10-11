import React, { Component } from 'react'

export default class MoreBlogsSection extends Component {
  render() {
    return (
      <div className='more-blogs-container'>
        <h2 className='title'>MORE BLOGS TO READ</h2>
        <hr/>
        <div className="style-box">
        <div className='blogs-cont'>
         <span className='blog-images-1'></span>
         <a href='#' target="#blank"><h3>12 Meaningful Things You can Do for Breast Cancer Awareness Month</h3></a>
        </div>
        <div className='blogs-cont'>
        <span className='blog-images-2'></span>
         <a href='#' target="#blank"><h3>New Omicron Booster Side Effects: What to Expect</h3></a>
        </div>
        <div className='blogs-cont'>
        <span className='blog-images-3'></span>
         <a href='#' target="#blank"><h3>Autumn Anxiety: Why You May Feel More Stressed This Season</h3></a>
        </div>
        <div className='blogs-cont'>
        <span className='blog-images-4'></span>
         <a href='#' target="#blank"><h3>Answer to Your Questions About Stillbirth</h3></a>
        </div>
        </div>
        
      </div>
    )
  }
}
