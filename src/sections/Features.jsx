import React from "react";
// '../assets/'
import speedometer from "../assets/svg/speedometer_icon.svg";
import quality from "../assets/svg/quality_icon.svg";
import affordability from "../assets/svg/money_icon.svg";
import fastTurnaround from "../assets/svg/features/fast-turnaround.svg";
import topQuality from "../assets/svg/features/top-quality.svg";
import affordable from "../assets/svg/features/affordable.svg";

export const Features = () => {
  return (
    <div className=" md:mx-10 lg:mx-auto max-w-7xl flex flex-col items-center md:items-start mb-20">
      <div className="mb-7">
        <p className="text-3xl font-bold">You can count on us for:</p>
      </div>

      <div className=" flex flex-col md:flex-row justify-between w-full">
        <div className="  mx-10 md:mx-0 mb-6 md:mb-0 rounded-xl flex space-x-5">
          {/*Fast Turnaround*/}
          <img srcSet={fastTurnaround} alt="" className=" h-20" />
          <div className=" flex flex-col ">
            <h3 className=" font-bold text-[#706D6D] text-xl ">
              Fast Turnaround Within Days
            </h3>
            <p className=" ">
              Your order gets to you within 3- <br />7 working days via DHL or
              our <br /> very own Printivo Direct
            </p>
          </div>
        </div>
        <div className="  mx-10 md:mx-0 mb-6 md:mb-0  rounded-xl flex space-x-5">
          {/* Top Quality*/}
          <img srcSet={topQuality} alt="" className="h-20" />
          <div className=" flex flex-col ">
            <h3 className=" font-bold text-[#706D6D] text-xl ">
              100% Top Quality
            </h3>
            <p className=" ">
              Only the finest materials, <br /> machines and people will be{" "}
              <br /> involved in fulfilling your order.
            </p>
          </div>
        </div>
        <div className="  mx-10 md:mx-0 mb-6 md:mb-0  rounded-xl flex space-x-5">
          {/*Fast Turnaround*/}
          <img srcSet={affordable} alt="" className=" h-20" />
          <div className=" flex flex-col ">
            <h3 className=" font-bold text-[#706D6D] text-xl ">
              Affordable Services
            </h3>
            <p className=" ">
              All products are adequately priced <br /> to ensure you get value{" "}
              <br /> for your money at all times.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
