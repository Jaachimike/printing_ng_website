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
          <form class="flex flex-col gap-4 bg-[#CAEFFF] py-10 px-36">
            {/*FIRST NAME FIELD  */}
            <div class="flex items-center">
              <label for="field1" class="w-32 font-semibold">
                First Name:
              </label>
              <input
                type="text"
                id="first_name"
                class="w-96 border border-gray-300 rounded-full p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* LAST NAME FIELD  */}
            <div class="flex items-center">
              <label for="field1" class="w-32 font-semibold">
                Last Name:
              </label>
              <input
                type="text"
                id="last_name"
                class="w-96 border border-gray-300 rounded-full p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* EMAIL FIELD  */}
            <div class="flex items-center">
              <label for="field1" class="w-32 font-semibold">
                Email:
              </label>
              <input
                type="email"
                id="email"
                class="w-96 border border-gray-300 rounded-full p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* PHONE FIELD  */}
            <div class="flex items-center">
              <label for="field1" class="w-32 font-semibold">
                Phone:
              </label>
              <input
                type="tel"
                id="phone"
                class="w-96 border border-gray-300 rounded-full p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* PASSWORD FIELD  */}
            <div class="flex items-center">
              <label for="field2" class="w-32 font-semibold">
                Password:
              </label>
              <input
                type="password"
                id="password"
                class="w-96 border border-gray-300 rounded-full p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* CONFIRM PASSWORD FIELD  */}
            <div class="flex items-center">
              <label for="field2" class="w-32 font-semibold">
                Confirm Password:
              </label>
              <input
                type="password"
                id="password"
                class="w-96 border border-gray-300 rounded-full p-2 focus:ring-blue-500 focus:border-blue-500"
              />
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
