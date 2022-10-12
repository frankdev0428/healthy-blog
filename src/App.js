 import React from 'react';
 import Navs from "./access/component/Navs"
 import Blogs from "./access/component/Blogs"; 
 import Footer from "./access/component/Footer"
 import './access/main.css';
 import HeroSection from './access/component/HeroSection';
 import EmailCollection from './access/component/EmailCollection';
 import DailyBlogs from './access/component/DailyBlogs';
 import MoreBlogsSection from './access/component/MoreBlogsSection';
 import ReactDOM from 'react-dom/client';
 import { 
  BrowserRouter as Router, Route, Routes , useNavigate , Link , Outlet
 } from "react-router-dom";
  
 


function App() {
  return (
    <div className="App">
      <Outlet />
    </div>

    
  );
}

export default App;
