import React from "react";
import background from "../assets/png/hero_homepage.png";
import SearchBar from "../components/SearchBar";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="relative bg-cover h-[82dvh]  text-white"
    >
      {/* <div className=" ">
        {/* Write-up 
        <div className=" pt-32 pl-24">
          <p className="font-Lobster text-8xl mb-10">
            Printing & <br />{" "}
            <span className=" text-9xl">Packaging Agency</span>{" "}
          </p>
          <div className="font-Lobster flex text-5xl mb-10">
            <p className="pr-5">Speed</p>
            <p className="border-x-4 px-5">Quality</p>
            <p className="pl-5">Affordability</p>
          </div>
          <button className=" rounded-xl px-4 py-2 bg-white text-[#0064A3] font-semibold text-3xl">
            Get Started
          </button>
        </div>

        {/* Search Bar 
        <div className="flex justify-center">
          <SearchBar />
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
