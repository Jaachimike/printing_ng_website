import React from "react";
import PageHeader from "../components/PageHeader";
import ProductDisplay from "../components/ProductDisplay";
import rollup_banner from "../assets/png/product_images/ROLLUP-BANNER.png";
import greeting_cards from "../assets/png/product_images/GREETING-CARDS.png";
import branded_mugs from "../assets/png/product_images/BRANDED-MUGS.png";
import business_cards from "../assets/png/product_images/BUSINESS-CARDS.png";
import calendar from "../assets/png/product_images/CALENDAR.png";
import feather_banner from "../assets/png/product_images/FEATHER-BANNER.png";
import gift_bags from "../assets/png/product_images/GIFT-BAGS.png";
import letterhead from "../assets/png/product_images/LETTER-HEAD.png";
import magazine from "../assets/png/product_images/MAGAZINE.png";
import product_packaging from "../assets/png/product_images/PRODUCT-PACKAGING.png";

const popularCategories = [
  {
    title: "Product Packaging",
    price: "74999",
    description:
      "Up your professional game with our exotic branded envelopes. Send those letters with style",
    image: product_packaging,
  },
  {
    title: "Rollup Banner",
    price: "74999",
    description:
      "Up your professional game with our exotic branded envelopes. Send those letters with style",
    image: rollup_banner,
  },
  {
    title: "Letter Head",
    price: "3999",
    description:
      "Up your professional game with our exotic branded envelopes. Send those letters with style",
    image: letterhead,
  },
  {
    title: "Calenders",
    price: "13999",
    description:
      "Gift your clients, family and friends calenders and stay on their miind all year round.",
    image: calendar,
  },
];

const Contact = () => {
  return (
    <>
      <PageHeader header="Contact" />
      <div className="max-w-7xl mx-auto">
        {/* Map and Write-up  */}
        <div>
          <div>
            <h2 className="font-bold text-xl mb-5 text-[#0064A3]">
              Thank you for visiting us
            </h2>
            <p>Address: #59, AKEJU STREET, OFF IKORODU ROAD, SHOMOLU,. LAGOS</p>
            <p>Tel: +234 816 353 4401</p>
            <p>Email: info@printin.ng | printingintelligence@gmail.com</p>
            <p>Working Hours</p>
            <p>
              <span className="font-bold">Mondays - Fridays:</span> 9:00am -
              5:00pm
            </p>
            <p>
              <span className="font-bold">Saturdays:</span> 10:00am - 3:00pm
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="mb-16">
          <h2 className="font-bold text-xl text-center mb-4 text-[#0064A3]">
            Talk to us
          </h2>

          <form class="flex flex-col rounded-xl gap-4   bg-[#CAEFFF] py-10 px-6">
            {/* SUBJECT FIELD  */}
            <div class=" group flex justify-center ">
              <div class="relative flex items-center space-x-5 lg:space-x-7 w-6/12">
                <span class="material-symbols-outlined transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                  Subject
                </span>
                <input
                  id="6"
                  type="text"
                  class="peer relative h-10 w-full rounded-full bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                />
              </div>
            </div>

            {/* NAME FIELD */}
            <div class="group flex justify-center ">
              <div class="relative flex items-center space-x-9 lg:space-x-9  w-6/12">
                <span class="lg:whitespace-nowrap material-symbols-outlined transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                  Name
                </span>
                <input
                  id="6"
                  type="text"
                  class="peer relative h-10 w-full rounded-full bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                />
              </div>
            </div>

            {/*EMAIL FIELD  */}
            <div class="group flex justify-center ">
              <div class="relative flex items-center space-x-9 lg:space-x-10  w-6/12">
                <span class="lg:whitespace-nowrap material-symbols-outlined transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                  Email
                </span>
                <input
                  id="6"
                  type="text"
                  class="peer relative h-10 w-full rounded-full bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                />
              </div>
            </div>

            {/* PHONE FIELD */}
            <div class="group flex justify-center ">
              <div class="relative flex items-center space-x-12 lg:space-x-9 w-6/12">
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

            {/* MESSAGE FIELD */}
            <div class="group flex justify-center">
              <div class="relative flex items-center space-x-11 lg:space-x-5 w-6/12">
                <span class="material-symbols-outlined transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                  Message
                </span>
                <textarea
                  id="6"
                  type="text"
                  class="peer relative h-36 w-full rounded-2xl bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                />
              </div>
            </div>

            {/* SUBMIT BUTTON  */}
            <div className="mx-auto">
              <button className="bg-[#129FF7] px-10 py-2 rounded-xl lg:ml-10 mt-8 text-white font-semibold">
                Send Message
              </button>
            </div>
          </form>
        </div>
        {/* Popular Categories */}
        <div className="mb-20">
          <h2 className=" text-[#0064A3] font-bold text-center text-xl mb-4">
            Popular Categories
          </h2>
          <div className=" mx-auto max-w-7xl grid justify-items-center grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12 ">
            {popularCategories.map((product, index) => {
              return (
                <ProductDisplay
                  key={index}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  image={product.image}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
