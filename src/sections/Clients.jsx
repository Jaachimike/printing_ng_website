import React from "react";
import clientLogos from "../utils/importClientLogos";

export const Clients = () => {
  return (
    <div className=" mx-auto max-w-7xl px-10 lg:px-0 mb-16">
      <p className="font-bold text-3xl md:text-4xl mb-7 md:mb-3">
        Nigeria's No. 1 online print shop
      </p>
      <p className="text-[#706D6D] text-xl md:text-2xl mb-7">
        Our print services and solutions are tusted by these brands and <br />
        over 15,000 other businesses in Nigeria
      </p>
      <div className=" grid justify-items-center grid-cols-2 space-y-10 md:space-y-4 md:flex md:space-x-4">
        {clientLogos.map((clientLogo, index) => (
          <div key={index} className="overflow-hidden rounded-lg md:shadow-sm">
            <img
              src={clientLogo}
              alt={`Photo ${index + 1}`}
              className={`w-auto h-10 ${
                index == 0 ? "mt-10 md:mt-5" : "mt-0"
              }  object-cover`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
