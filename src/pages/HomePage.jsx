import React, {useState} from "react";
import Hero from "../sections/Hero";
import {Link} from "react-router-dom";
import ProductDisplay from "../components/ProductDisplay";

import SearchBar from "../components/SearchBar";
import greeting_cards from "../assets/png/product_images/GREETING-CARDS.png";
import branded_mugs from "../assets/png/product_images/BRANDED-MUGS.png";
import business_cards from "../assets/png/product_images/BUSINESS-CARDS.png";
import calendar from "../assets/png/product_images/CALENDAR.png";
import feather_banner from "../assets/png/product_images/FEATHER-BANNER.png";
import gift_bags from "../assets/png/product_images/GIFT-BAGS.png";
import letterhead from "../assets/png/product_images/LETTER-HEAD.png";
import magazine from "../assets/png/product_images/MAGAZINE.png";
import product_packaging from "../assets/png/product_images/PRODUCT-PACKAGING.png";
import roullup_banner from "../assets/png/product_images/ROLLUP-BANNER.png";
import clientLogos from "../utils/importClientLogos";
import twitterLogo from "../assets/svg/social-media-icons/twitter-logo-2429.svg";
import {Features} from "../sections/Features";

const SectionHeader = (props) => {
  return (
    <div className="flex justify-center text-2xl font-bold text-[#0064A3] ">
      <h3>{props.header}</h3>
    </div>
  );
};

SectionHeader.defaultProps = {
  header: "Insert Header",
};

const popularProducts = [
  {
    title: "Greeting Cards",
    price: "9999",
    description:
      "Up your professional game with our exotic greeting cards. Send those letters with style.",
    image: greeting_cards,
  },
  {
    title: "Feather Banners",
    price: "4499",
    description:
      "Create remarkable adverts with our banners. Showcase your events with style.",
    image: feather_banner,
  },
  {
    title: "Custom Mugs",
    price: "2499",
    description:
      "Design custom made full colour mugs for events, corporate branding and events purpose.",
    image: branded_mugs,
  },
  {
    title: "Calenders",
    price: "13999",
    description:
      "Gift your clients, family and friends calenders and stay on their miind all year round.",
    image: calendar,
  },
  {
    title: "Business Cards",
    price: "74999",
    description:
      "Up your professional game with our exotic business cards. Send those letters with style",
    image: business_cards,
  },
  {
    title: "Gift Bags",
    price: "9999",
    description:
      "Up your professional game with our exotic branded envelopes. Send those letters with style",
    image: gift_bags,
  },
  {
    title: "Letter Head",
    price: "3999",
    description:
      "Up your professional game with our exotic branded envelopes. Send those letters with style",
    image: letterhead,
  },
  {
    title: "Magazine",
    price: "74999",
    description: "Up your professional game with our magazines",
    image: magazine,
  },
];

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
    image: roullup_banner,
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

const testimonials = [
  {
    fullName: "Amina Ebele",
    username: "@DeliciousAmina",
    comment:
      "I am now the unofficial @Printivo ambassador. What these guys just pulled to ensure I got my menu cards today is stunning!",
  },
  {
    fullName: "Oluwatosin",
    username: "@tosingirlfx",
    comment:
      "@Printivo delivered my mugs in 24hrs. Thank you so much! It's nice doing business with you. More to come.",
  },
  {
    fullName: "Oluwatosin",
    username: "@DeliciousAmina",
    comment:
      "These guys @Printivo are really awesome and affordable. Excellent customer service and delivery too. Thank you.",
  },
];

const popularCategoriesDisplay = popularCategories.map((products) => {
  return (
    <div className="max-w-xs overflow-hidden shadow-lg">
      <img
        className=" h-60 w-full "
        src={feather_banner}
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
      <div className="mb-20 mt-8 ">
        <div className="flex justify-between mb-7 items-center mx-auto max-w-7xl">
          <SectionHeader header="Popular Products" />
          <p className="duration-500 hover:scale-105">
            <Link to="/products">See All Products</Link>
          </p>
        </div>
        <div className=" mx-auto max-w-7xl grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 ">
          {popularProducts.map((product, index) => {
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

      {/* POPULAR CATEGORIES */}
      <div className="mb-20 mt-8">
        <div className="flex justify-between mb-7 items-center mx-auto max-w-7xl">
          <SectionHeader header="Popular Categories" />
          <p className="duration-500 hover:scale-105">
            <Link to="/products">See All Products</Link>
          </p>
        </div>

        <div className=" mx-auto max-w-7xl grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-x-8 gap-y-12 ">
          {/* {popularCategoriesDisplay} */}

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

      {/* OUR CLIENTS */}
      <div className=" mx-auto max-w-7xl mb-16">
        <p className="font-bold text-4xl">Nigeria's No. 1 online print shop</p>
        <p className="text-[#706D6D] text-2xl mb-7">
          Our print services and solutions are tusted by these brands and <br />
          over 15,000 other businesses in Nigeria
        </p>
        <div className=" flex  space-x-4">
          {clientLogos.map((clientLogo, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={clientLogo}
                alt={`Photo ${index + 1}`}
                className="w-auto h-9 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIAL */}
      <div className="mx-auto max-w-7xl bg-[#EDF6FD] px-16 py-8 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-8">
            What Customers Say About Us
          </h2>
          <div className="flex space-x-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white px-5 py-6 flex space-x-5 shadow-md"
              >
                <img src={twitterLogo} alt="" className="h-5" />
                <div>
                  <div className="flex space-x-4 mb-4">
                    <p className="font-bold">{testimonial.fullName}</p>
                    <p className="text-[#41AEF4]">{testimonial.username}</p>
                  </div>
                  <p>{testimonial.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURES  */}
      <Features />

      {/* SUBSCRIBE TO NEWS LETTER  */}
      {/* <div className=" mb-20">
        <div className="mb-7">
          <SectionHeader header="Subscribe to our Newsletter" />
        </div>

        <div className="group w-72 md:w-80 lg:w-3/12 mx-auto shadow-xl px-4 py-4">
          <div className="relative flex items-center">
            <input
              id="8"
              type="email"
              placeholder="Enter your email address here..."
              className="peer relative h-10 w-full rounded-md text-xs bg-gray-50 pl-3 pr-20 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg"
            />
            <button className="absolute right-0 h-10 w-20 rounded-r-md bg-blue-200 text-xs font-semibold text-white transition-all duration-200 ease-in-out group-focus-within:bg-blue-400 group-focus-within:hover:bg-blue-600">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;
