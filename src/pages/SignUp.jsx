import React from "react";
import background from "../assets/png/subpage_background.png";

export const SignUp = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="bg-cover h-[15dvh] text-white"
      ></div>
      <div className=" max-w-7xl mx-auto mb-20 mt-10">
        <h2 className="text-center text-[#0064A3] font-bold text-2xl mb-6">
          Sign Up
        </h2>

        <div className="flex justify-center">
          {/* LOGIN FORM  */}
          <form class="flex flex-col gap-4 bg-[#CAEFFF] py-10 px-6 lg:px-36">
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

            {/* PASSWORD FIELD  */}
            <div class="group w-80 md:w-80 lg:w-96 mx-auto lg:ml-10 ">
              <div class="relative flex items-center space-x-5 lg:space-x-8">
                <span class="material-symbols-outlined transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                  Password
                </span>
                <input
                  id="6"
                  type="text"
                  class="peer relative h-10 w-full rounded-full bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                />
              </div>
            </div>

            {/* CONFIRM PASSWORD FIELD  */}
            <div class="group w-80 md:w-80 lg:w-full mx-auto lg:ml-0 ">
              <div class="relative flex items-center lg:space-x-5">
                <span class="lg:whitespace-nowrap material-symbols-outlined transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                  Confirm Password
                </span>
                <input
                  id="6"
                  type="text"
                  class="peer relative h-10 w-full rounded-full bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                />
              </div>
            </div>

            <div className="flex justify-center ">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                value="agree"
                className="mr-5"
              />
              <label for="agree">Agree to Terms & Conditions</label>
            </div>

            {/* LOGIN BUTTON  */}
            <div className="flex justify-end">
              <button className="bg-[#129FF7] px-10 py-2 rounded-xl text-white font-semibold">
                SignUp
              </button>
            </div>

            {/* FORGOT PASSWORD AND SIGN UP  */}
            <div className="flex justify-end text-[#0064A3] font-semibold">
              <p className="ml-7">Login</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
