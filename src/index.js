import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorPage from "./error-page";
import './access/style.css';
import About from './pages/mainpage/About';
import Blogs from './pages/mainpage/Blogs';
import Nutrition from './pages/mainpage/Nutrition';
import Comment from './pages/mainpage/Comment';
import Home from './pages/mainpage/Home';
import HeroBlog02 from './pages/landingpages/Hero-blogs/HeroBlog02';
import HeroBlog01 from  './pages/landingpages/Hero-blogs/HeroBlog01'
import DailyBlog01 from './pages/landingpages/Dailys-Blogs/DailyBlogs01';
import DailyBlog02 from './pages/landingpages/Dailys-Blogs/DailyBlogs02';
import DailyBlog03 from './pages/landingpages/Dailys-Blogs/DailyBlog03';
import DailyBlog04 from './pages/landingpages/Dailys-Blogs/DailyBlogs04';
import MoreBlogs01 from './pages/landingpages/more-blogs/MoreBlogs01';
import MoreBlogs02 from './pages/landingpages/more-blogs/MoreBlogs02';
import MoreBlogs03 from './pages/landingpages/more-blogs/MoreBlogs03';
import MoreBlogs04 from './pages/landingpages/more-blogs/MoreBlogs04';



import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
  path: "/",
  element: <App /> ,
  children : [
    {
      path : "/",
      element : <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/comment",
      element: <Comment />
    },
    {
      path: "/blogs",
      element: <Blogs />
    },
    {
      path: "/nutrition",
      element: <Nutrition />
    },
    {
      path: "/your-skin-is-super-hero",
      element: <HeroBlog02 />
    },
    {
      path: "/how-to-skip-beauty",
      element: <HeroBlog01 />
    },
    {
      path: "/life-after-breast-cancer",
      element: <DailyBlog01 />
    },
    {
      path: "/sober-october",
      element: <DailyBlog02 />
    },
    {
      path: "/how-to-support-families-after-miscarriage",
      element: <DailyBlog03/>
    },
    {
      path: "/does-social-distancing-impact-the-immune-systems",
      element: <DailyBlog04 />
    },
    {
      path: "/12-meaningfullthing-you-can-do-for-breast-cancer-awareness-months",
      element: <MoreBlogs01 />
    },
    {
      path: "/new-omicron-booster-side-effect:what-to-expect",
      element: <MoreBlogs02 />
    },
    {
      path: "/autumn-anxiety-why-you-may-feel-more-stressed",
      element: <MoreBlogs03 />
    },
    {
      path: "/answer-to-your-questions-about-stillbirth",
      element: <MoreBlogs04 />
    },
  ]
},

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);


