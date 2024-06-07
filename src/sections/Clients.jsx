import React from "react";
import clientLogos from "../utils/importClientLogos";

export const Clients = () => {
  return (
    <div className=" mx-auto max-w-7xl mb-16">
      <p className="font-bold text-4xl">Nigeria's No. 1 online print shop</p>
      <p className="text-[#706D6D] text-2xl mb-7">
        Our print services and solutions are tusted by these brands and <br />
        over 15,000 other businesses in Nigeria
      </p>
      <div className=" flex  space-x-4">
        {clientLogos.map((clientLogo, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={clientLogo}
              alt={`Photo ${index + 1}`}
              className="w-auto h-10 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
