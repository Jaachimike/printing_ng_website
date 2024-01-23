import React from "react";

import career_image from "../assets/png/careers_page_image.png";

const Careers = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex space-x-12">
        {/* Write-up  */}
        <div className=" ">
          <h2 className="font-bold text-xl mb-5 text-[#0064A3]">
            Join our Creative Team
          </h2>
          <p>
            Are you a creative person with the right skills set to change the
            world of branding and packaging, then join our most fun and creative
            team today.{" "}
            <span className="mt-6 mb-10 block font-bold">
              Apply by filling the form below
            </span>
          </p>
          {/* Form */}
          <form class="flex flex-col rounded-xl gap-4 lg:w-10/12 bg-[#CAEFFF] py-10 px-6 lg:px-16">
            {/* PROFESSION FIELD  */}
            <div class="group w-80 md:w-80 lg:w-96 mx-auto lg:ml-10 ">
              <div class="relative flex items-center space-x-5 lg:space-x-6">
                <span class="material-symbols-outlined transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                  Profession
                </span>
                <input
                  id="6"
                  type="text"
                  class="peer relative h-10 w-full rounded-full bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                />
              </div>
            </div>

            {/* FIRST NAME FIELD */}
            <div class="group w-80 md:w-80 lg:w-96 mx-auto lg:ml-10 ">
              <div class="relative flex items-center space-x-9 lg:space-x-6">
                <span class="lg:whitespace-nowrap material-symbols-outlined transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                  First Name
                </span>
                <input
                  id="6"
                  type="text"
                  class="peer relative h-10 w-full rounded-full bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                />
              </div>
            </div>

            {/* LAST NAME FIELD  */}
            <div class="group w-80 md:w-80 lg:w-96 mx-auto lg:ml-10 ">
              <div class="relative flex items-center space-x-9 lg:space-x-6">
                <span class="lg:whitespace-nowrap material-symbols-outlined transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                  Last Name
                </span>
                <input
                  id="6"
                  type="text"
                  class="peer relative h-10 w-full rounded-full bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                />
              </div>
            </div>

            {/* EMAIL FIELD */}
            <div class="group w-80 md:w-80 lg:w-96 mx-auto lg:ml-10 ">
              <div class="relative flex items-center space-x-12 lg:space-x-14">
                <span class="material-symbols-outlined transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                  Email
                </span>
                <input
                  id="6"
                  type="text"
                  class="peer relative h-10 w-full rounded-full bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                />
              </div>
            </div>

            {/*PHONE NUMBER FIELD */}
            <div class="group w-80 md:w-80 lg:w-96 mx-auto lg:ml-10 ">
              <div class="relative flex items-center space-x-11 lg:space-x-14">
                <span class="material-symbols-outlined transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                  Phone
                </span>
                <input
                  id="6"
                  type="text"
                  class="peer relative h-10 w-full rounded-full bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                />
              </div>
            </div>

            {/* UPLOAD CV FIELD  */}
            <div class="group w-80 md:w-80 lg:w-full mx-auto lg:ml-10 ">
              <div class="relative flex items-center lg:space-x-5">
                <span class="lg:whitespace-nowrap material-symbols-outlined transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                  Upload CV
                </span>
                <input
                  id="6"
                  type="file"
                  class="peer relative h-10 w-72 rounded-full px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                />
              </div>
            </div>

            {/* LOGIN BUTTON  */}
            <div className="flex justify-center">
              <button className="bg-[#129FF7] px-10 py-2 rounded-xl text-white font-semibold">
                Submit
              </button>
            </div>
          </form>
        </div>
        {/* image */}
        <div>
          <img
            src={career_image}
            alt="image of a woman sitting on couch with a laptop on her lap"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Careers;
