import React from "react";
import background from "../assets/png/hero_bannee.png";
import searchIcon from "../assets/svg/icons8-search.svg";
import SearchBar from "../components/SearchBar";

const Hero = () => {
  return (
    <div
      // style={{backgroundImage: `url(${background})`}}
      className="bg-cover max-w-[95rem] mx-auto bg-[#DFEFFF] pb-32 md:pb-40 mb-20 md:mb-0 text-[#394B63]"
    >
      <div className=" flex flex-col items-center md:items-start ">
        {/* Write-up  */}
        <div className="pt-20 md:pt-30 pl-0 md:pl-24 mb-6">
          <p className="font-Lobster text-5xl md:text-8xl mb-5">
            Quality Prints
          </p>
          <p className="text-[#708095] text-3xl font-bold mb-10">
            Shipped to your doorstep
          </p>

          <p className="font-bold text-xl">
            What would you like to print today?
          </p>
        </div>

        {/* Search Bar  */}

        <div className="group w-80 md:w-96 lg:w-6/12 ml-0 md:ml-24  rounded-sm bg-white px-6 py-6">
          <div className="relative flex items-center ">
            <input
              id="8"
              type="email"
              placeholder="Search for Business cards, T-shirts, Mugs, etc"
              className="peer relative h-10 w-full rounded-md text-lg bg-white pl-3 pr-20 font-thin outline-none transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg"
            />
            <button className="absolute flex items-center justify-center right-0 h-10 w-10 rounded-r-md text-xs font-semibold text-white transition-all duration-200 ease-in-out group-focus-within:bg-blue-400 group-focus-within:hover:bg-blue-600">
              <img src={searchIcon} alt="Search Icon" className="h-6" />
            </button>
          </div>
        </div>

        {/* <div className="flex justify-center">
          <SearchBar />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
