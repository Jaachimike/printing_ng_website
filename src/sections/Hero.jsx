import React from "react";
import background from "../assets/png/hero_homepage.png";
import searchIcon from "../assets/svg/icons8-search.svg";
import SearchBar from "../components/SearchBar";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="relative bg-cover h-[70vh] md:h-[85dvh]  text-white"
    >
      <div className=" ">
        {/* Write-up  */}
        <div className="pt-20 md:pt-30 pl-8 md:pl-24 mb-10">
          <p className="font-Lobster text-5xl md:text-8xl mb-10">
            Printing & <br />{" "}
            <span className=" md:text-9xl">Packaging Agency</span>{" "}
          </p>
          <div className="font-Lobster flex text-2xl md:text-5xl mb-10">
            <p className="pr-5">Speed</p>
            <p className="border-x-4 px-5">Quality</p>
            <p className="pl-5">Affordability</p>
          </div>
          <button className=" rounded-xl px-4 py-2 bg-white text-[#0064A3] font-semibold text-2xl md:text-3xl">
            Get Started
          </button>
        </div>

        {/* Search Bar  */}

        <div className="group w-96 md:w-96 lg:w-6/12 mx-auto rounded-full bg-white px-6 py-4">
          <div className="relative flex items-center">
            <input
              id="8"
              type="email"
              placeholder="Search entire store here..."
              className="peer relative h-10 w-full rounded-md text-sm bg-gray-50 pl-3 pr-20 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg"
            />
            <button className="absolute flex items-center justify-center right-0 h-10 w-10 rounded-r-md bg-blue-200 text-xs font-semibold text-white transition-all duration-200 ease-in-out group-focus-within:bg-blue-400 group-focus-within:hover:bg-blue-600">
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
