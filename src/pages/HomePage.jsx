import React, { useState } from "react";
import Hero from "../sections/Hero";
import ProductDisplay from "../components/ProductDisplay";
import speedometer from "../assets/svg/speedometer_icon.svg";
import quality from "../assets/svg/quality_icon.svg";
import affordability from "../assets/svg/money_icon.svg";
import SearchBar from "../components/SearchBar";
import product_img from "../assets/jpeg/product_image.jpg";

const SectionHeader = (props) => {
  return (
    <div className="flex justify-center text-2xl font-bold text-[#0064A3] mb-7">
      <h3>{props.header}</h3>
    </div>
  );
};

SectionHeader.defaultProps = {
  header: "Insert Header",
};

const popularProducts = [
  {
    id: 1,
    title: "Branded Envelopes",
    price: "74999",
    description:
      "Up your professional game with our exotic branded envelopes. Send those letters with style",
  },
  {
    id: 2,
    title: "Branded Envelopes",
    price: "74999",
    description:
      "Up your professional game with our exotic branded envelopes. Send those letters with style",
  },
  {
    id: 3,
    title: "Branded Envelopes",
    price: "74999",
    description:
      "Up your professional game with our exotic branded envelopes. Send those letters with style",
  },
  {
    id: 4,
    title: "Branded Envelopes",
    price: "74999",
    description:
      "Up your professional game with our exotic branded envelopes. Send those letters with style",
  },
  {
    id: 5,
    title: "Branded Envelopes",
    price: "74999",
    description:
      "Up your professional game with our exotic branded envelopes. Send those letters with style",
  },
  {
    id: 6,
    title: "Branded Envelopes",
    price: "74999",
    description:
      "Up your professional game with our exotic branded envelopes. Send those letters with style",
  },
  {
    id: 7,
    title: "Branded Envelopes",
    price: "74999",
    description:
      "Up your professional game with our exotic branded envelopes. Send those letters with style",
  },
  {
    id: 8,
    title: "Branded Envelopes",
    price: "74999",
    description:
      "Up your professional game with our exotic branded envelopes. Send those letters with style",
  },
];

const popularCategories = [
  {
    title: "Branded Envelopes",
    price: "74999",
    description:
      "Up your professional game with our exotic branded envelopes. Send those letters with style",
  },
  {
    title: "Branded Envelopes",
    price: "74999",
    description:
      "Up your professional game with our exotic branded envelopes. Send those letters with style",
  },
  {
    title: "Branded Envelopes",
    price: "74999",
    description:
      "Up your professional game with our exotic branded envelopes. Send those letters with style",
  },
  {
    title: "Branded Envelopes",
    price: "74999",
    description:
      "Up your professional game with our exotic branded envelopes. Send those letters with style",
  },
];

const popularCategoriesDisplay = popularCategories.map((products) => {
  return (
    <div className="max-w-xs overflow-hidden shadow-lg">
      <img
        className=" h-60 w-full "
        src={product_img}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl ">{products.title}</div>
        <p className="mb-2 text-[#706D6D]">
          Starting at &#8358;{products.price}{" "}
        </p>
        <p className="text-[#706D6D] text-base">{products.description}</p>
      </div>
      <div className="flex py-3 items-center justify-center text-xl">
        <button>Order Now</button>
      </div>
    </div>
  );
});

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle search submission here
    console.log("Searching for:", searchTerm);
  };

  return (
    <div>
      <Hero />
      {/* POPULAR PRODUCTS */}
      <div className="mb-20 mt-8">
        <SectionHeader header="Popular Products" />
        <div className=" mx-auto max-w-7xl grid justify-items-center grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12 ">
          {popularProducts.map((product, index) => {
            return (
              <ProductDisplay
                key={index}
                title={product.title}
                price={product.price}
                description={product.description}
              />
            );
          })}
        </div>
      </div>

      {/* POPULAR CATEGORIES */}
      <div className="mb-20 mt-8">
        <SectionHeader header="Popular Categories" />
        <div className=" mx-auto max-w-7xl grid justify-items-center grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12 ">
          {/* {popularCategoriesDisplay} */}

          {popularCategories.map((product, index) => {
            return (
              <ProductDisplay
                key={index}
                title={product.title}
                price={product.price}
                description={product.description}
              />
            );
          })}
        </div>
      </div>

      {/* FEATURES  */}
      <div className="mb-20">
        <SectionHeader header="Features" />
        <div className=" mx-auto max-w-7xl flex flex-col md:flex-row justify-center">
          <div className=" bg-[#E9F8FE] pl-8 pr-20 pt-6 pb-14 rounded-xl">
            {/* Header  */}
            <div className=" flex items-center">
              <img srcSet={speedometer} alt="" className=" h-24" />
              <h3 className="pt-7 font-bold text-[#706D6D] text-2xl ">SPEED</h3>
            </div>
            <p className=" pl-8">
              Get your order within 3 - 7 <br /> Working days after placement.
            </p>
          </div>

          <div className=" bg-[#E9F8FE] mx-10 pl-8 pr-20 pt-6 pb-14 rounded-xl">
            {/* Header  */}
            <div className=" flex items-center">
              <img src={quality} alt="" className=" h-24" />
              <h3 className="pt-7 font-bold text-[#706D6D] text-2xl ">
                QUALITY
              </h3>
            </div>
            <p className=" pl-8">
              We only produce the best of quality <br /> prints on all popular
              types of prints.
            </p>
          </div>

          <div className=" bg-[#E9F8FE] pl-8 pr-20 pt-6 pb-14 rounded-xl">
            {/* Header  */}
            <div className=" flex items-center">
              <img src={affordability} alt="" className=" h-24" />
              <h3 className="pt-7 font-bold text-[#706D6D] text-2xl ">
                AFFORDABILITY
              </h3>
            </div>
            <p className=" pl-8">
              Our prices are highly competitive <br /> in the professional
              printing space.
            </p>
          </div>
        </div>
      </div>

      {/* OUR CLIENTS */}

      {/* SUBSCRIBE TO NEWS LETTER  */}
      <div className=" mb-20">
        <SectionHeader header="Subscribe to our Newsletter" />
        <div className="bg-white flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex items-center shadow-lg  py-3 px-10  "
          >
            <div className="shadow-lg flex ">
              <input
                type="text"
                placeholder="Enter your email address here ..."
                value={searchTerm}
                onChange={handleChange}
                className=" pl-3 py-5 rounded-l-md focus:outline-none w-64"
              ></input>
              <button
                type="submit"
                className=" text-white px-4 py-3 rounded-r-md bg-blue-300 "
              >
                SUBSCRIBE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
