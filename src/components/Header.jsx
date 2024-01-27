import React, { useState } from "react";
import Logo from "../assets/svg/Printin logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <header className="text-gray-600 bg-[#DFEFFF] body-font h-[10vh] py-8 flex items-center">
        <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
          {/* LOGO  */}
          <Link
            className="flex title-font font-medium items-center cursor-pointer mb-4 md:mb-0"
            to="/"
          >
            <img src={Logo} alt="Company Logo" className="h-16" />
          </Link>
          {/* Hamburger Icon  */}
          <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
            <svg
              className="w-6 h-6 text-black"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Nav Links  */}
          <div className=" hidden lg:flex lg:items-center ">
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <Link
                className="mr-5 hover:text-blue-400 cursor-pointer"
                to="products"
              >
                All Products
              </Link>

              <Link
                to="affiliates"
                className="mr-5 hover:text-blue-400 cursor-pointer"
              >
                Become an Affiliate
              </Link>
            </nav>
            <button className="font-bold hover:font-normal hover:text-blue-400 inline-flex items-center  border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0 mr-4">
              <Link to="login">Login</Link>
            </button>
            <button className="font-bold hover:font-normal hover:text-blue-400 inline-flex items-center  border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">
              <Link to="signup">SignUp</Link>
            </button>
          </div>
        </div>

        {/* SIDE BAR  */}
        <aside
          className={` z-30  fixed top-0 left-0 w-64 bg-[#DFEFFF] h-screen transition-all duration-300 transform 
      -translate-x-full ${sidebarOpen && "translate-x-0"}`}
        >
          {/* Sidebar content, including navigation links */}
          {/* NAV LINKS  */}
          <div className="flex flex-col ml-7 mt-32  ">
            <nav className="flex flex-col flex-wrap  text-base justify-center">
              <Link
                className="mr-5 hover:text-blue-400 cursor-pointer"
                to="products"
              >
                All Products
              </Link>

              <Link
                to="affiliates"
                className="mr-5 hover:text-blue-400 mt-4 cursor-pointer"
              >
                Become an Affiliate
              </Link>
            </nav>
            <button className="font-bold hover:font-normal hover:text-blue-400 inline-flex items-center  border-0 py-1  focus:outline-none  rounded text-base mt-4 ">
              <Link to="login">Login</Link>
            </button>
            <button className="font-bold hover:font-normal hover:text-blue-400 inline-flex items-center  border-0 py-1 focus:outline-none  rounded text-base mt-4 ">
              <Link to="signup">SignUp</Link>
            </button>
          </div>
          <button
            className="absolute top-8 right-0 m-4"
            onClick={() => setSidebarOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 50 50"
            >
              <path d="M 25 8 C 15.611 8 8 15.611 8 25 C 8 34.389 15.611 42 25 42 C 34.389 42 42 34.389 42 25 C 42 15.611 34.389 8 25 8 z M 25 9 C 33.837 9 41 16.163 41 25 C 41 33.837 33.837 41 25 41 C 16.163 41 9 33.837 9 25 C 9 16.163 16.163 9 25 9 z M 18.990234 18.490234 C 18.862234 18.490234 18.734219 18.539219 18.636719 18.636719 C 18.441719 18.831719 18.441719 19.14875 18.636719 19.34375 L 24.292969 25 L 18.636719 30.65625 C 18.441719 30.85125 18.441719 31.168281 18.636719 31.363281 C 18.831719 31.558281 19.14875 31.558281 19.34375 31.363281 L 25 25.707031 L 30.65625 31.363281 C 30.85125 31.558281 31.168281 31.558281 31.363281 31.363281 C 31.558281 31.168281 31.558281 30.85125 31.363281 30.65625 L 25.707031 25 L 31.363281 19.34375 C 31.558281 19.14875 31.558281 18.831719 31.363281 18.636719 C 31.168281 18.441719 30.85125 18.441719 30.65625 18.636719 L 25 24.292969 L 19.34375 18.636719 C 19.24625 18.539219 19.118234 18.490234 18.990234 18.490234 z"></path>
            </svg>
          </button>
        </aside>
      </header>
    </div>
  );
};

export default Header;
