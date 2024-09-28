import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo/logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center flex-nowrap text-base justify-evenly h-20 w-full font-rubic font-medium  ">
        <div className="">
          <img className="h-12 min-w-[120px]" src={Logo} alt="logo" />
        </div>
        <div className="invisible md:visible flex flex-nowrap items-center justify-between">
          <div className="">
            <ul className="flex flex-nowrap gap-3 items-center justify-evenly   ">
              <li className="hover:text-orange-500">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-orange-500">
                <Link to="/">About</Link>
              </li>
              <li className="hover:text-orange-500">
                <Link to="/">Models</Link>
              </li>
              <li className="hover:text-orange-500">
                <Link to="/">Testomonials</Link>
              </li>
              <li className="hover:text-orange-500">
                <Link to="/">Our Team</Link>
              </li>{" "}
              <li className="hover:text-orange-500">
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="flex flex-nowrap gap-3 items-center justify-evenly ">
              <li>
                <Link to="/sign-in">Sign In </Link>
              </li>
              <div className="flex py-2 rounded-sm px-8 items-center text-white bg-[#FF4C30]">
                <li>
                  <Link to="/sign-up"> Register </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
