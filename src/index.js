import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorPage from "./error-page";
import './access/style.css';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Nutrition from './pages/Nutrition';
import Comment from './pages/Comment';
import Home from './pages/Home';
import HeroBlog02 from './pages/landingpages/Hero-blogs/HeroBlog02';
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


