import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import BgShape from "../images/hero/hero-bg.png";

const Layout = () => {
  return (
    <div
      style={{ backgroundImage: `url(${BgShape} )` }}
      className=" bg-no-repeat pr-1 pt-5  justify-end bg-right-top  bg-none sm:bg-fixed	  "
    >
    
        <Navbar />
       
          <Outlet />
       
        <Footer />
     
    </div>
  );
}

export default Layout
