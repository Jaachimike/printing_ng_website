import React from "react";
import background from "../assets/png/subpage_background.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="bg-cover h-[15dvh] text-white"
      ></div>
      <div className=" max-w-7xl mx-auto mb-20 mt-10">
        <h2 className="text-center text-[#0064A3] font-bold text-2xl mb-6">
          Login
        </h2>

        <div className="flex justify-center">
          {/* LOGIN FORM  */}
          <form class="flex flex-col gap-4 bg-[#CAEFFF] py-10 px-6 lg:px-36">
            {/* TEST EMAIL FIELD  */}
            {/* <div class="flex items-center">
              <label for="field1" class="w-32 font-semibold">
                Email:
              </label>
              <input
                type="email"
                id="email"
                class="w-96 border border-gray-300 rounded-full p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div> */}

            {/* TEST PASSWORD FIELD  */}
            {/* <div class="flex items-center">
              <label for="field2" class="w-32 font-semibold">
                Password:
              </label>
              <input
                type="password"
                id="password"
                class="w-96 border border-gray-300 rounded-full p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div> */}

            {/* EMAIL FIELD */}
            <div class="group w-80 md:w-80 lg:w-96 mx-auto lg:ml-10 ">
              <div class="relative flex items-center space-x-10">
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

            {/* PASSWORD FIELD  */}
            <div class="group w-80 md:w-80 lg:w-96 mx-auto lg:ml-10 ">
              <div class="relative flex items-center space-x-4">
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

            {/* LOGIN BUTTON  */}
            <div className="flex justify-center md:justify-end">
              <button className="bg-[#129FF7] px-10 py-2 rounded-xl text-white font-semibold">
                Login
              </button>
            </div>

            {/* FORGOT PASSWORD AND SIGN UP  */}
            <div className="flex justify-center md:justify-end text-[#0064A3] font-semibold">
              <p className="border-r-2 border-[#0064A3] pr-7">
                Forgot Password
              </p>
              <p className="ml-7">
                <Link to="/signup">SignUp</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
