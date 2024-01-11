import React from "react";
import Logo from "../assets/svg/Printin logo.svg";

const Header = () => {
  return (
    <div>
      <header class="text-gray-600 bg-[#DFEFFF] body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center cursor-pointer mb-4 md:mb-0">
            <img src={Logo} alt="" srcset="" />
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-blue-400 cursor-pointer">All Products</a>
            <a class="mr-5 hover:text-blue-400 cursor-pointer">
              Become an Affiliate
            </a>
          </nav>
          <button class="font-bold hover:font-normal hover:text-blue-400 inline-flex items-center  border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0 mr-4">
            Login
          </button>
          <button class="font-bold hover:font-normal hover:text-blue-400 inline-flex items-center  border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">
            SignUp
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
