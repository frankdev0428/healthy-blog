import React, { Component } from 'react'
import Navs from '../../access/component/Navs';
import Footer from '../../access/component/Footer';
import Blogs from "../../access/component/Blogs"; 
import HeroSection from '../../access/component/HeroSection';
import EmailCollection from '../../access/component/EmailCollection';
import DailyBlogs from '../../access/component/DailyBlogs';
import MoreBlogsSection from '../../access/component/MoreBlogsSection';
import '../../access/main.css';
export default class Home extends Component {
  render() {
    return (
      <div className='home'>
       <Navs />
       <HeroSection />
      <DailyBlogs />
      <EmailCollection />
      <MoreBlogsSection />
      <Footer />
      </div>
    )
  }
}

