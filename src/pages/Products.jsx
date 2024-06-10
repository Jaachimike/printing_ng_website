import React, { useState } from "react";
import ProductDisplay from "../components/ProductDisplay";
import PageHeader from "../components/PageHeader";
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

const allProducts = [
  {
    title: "Greeting Cards",
    category: "Greeting Cards",
    price: "9999",
    description:
      "Up your professional game with our exotic greeting cards. Send those letters with style.",
    image: greeting_cards,
  },
  {
    title: "Feather Banners",
    category: "Feather Banners",
    price: "4499",
    description:
      "Create remarkable adverts with our banners. Showcase your events with style.",
    image: feather_banner,
  },
  {
    title: "Custom Mugs",
    category: "Mugs",
    price: "2499",
    description:
      "Design custom made full colour mugs for events, corporate branding and events purpose.",
    image: branded_mugs,
  },
  {
    title: "Calendars",
    category: "Calendars",
    price: "13999",
    description:
      "Gift your clients, family and friends calendars and stay on their mind all year round.",
    image: calendar,
  },
  {
    title: "Business Cards",
    category: "Business Cards",
    price: "74999",
    description:
      "Up your professional game with our exotic business cards. Send those letters with style.",
    image: business_cards,
  },
  {
    title: "Gift Bags",
    category: "Gift Bags",
    price: "9999",
    description:
      "Up your professional game with our exotic branded envelopes. Send those letters with style.",
    image: gift_bags,
  },
  {
    title: "Letter Head",
    category: "Letter Head",
    price: "3999",
    description:
      "Up your professional game with our exotic branded envelopes. Send those letters with style.",
    image: letterhead,
  },
  {
    title: "Magazine",
    category: "Magazine",
    price: "74999",
    description: "Up your professional game with our magazines.",
    image: magazine,
  },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  return (
    <>
      <PageHeader header="All Products" />

      {/* Navbar for categories */}
      <div className="flex space-x-12 max-w-screen-xl mx-auto mb-6">
      <div className="navbar">
        <ul className="flex flex-col p-4 space-y-2 bg-gray-100">
          <li
            className={`cursor-pointer px-4 py-2 ${
              selectedCategory === "All"
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-200"
            }`}
            onClick={() => handleCategoryChange("All")}
          >
            All
          </li>
          <li
            className={`cursor-pointer px-4 py-2 ${
              selectedCategory === "Bags"
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-200"
            }`}
            onClick={() => handleCategoryChange("Bags")}
          >
            Bags
          </li>
          <li
            className={`cursor-pointer px-4 py-2 ${
              selectedCategory === "Banners & Large Format"
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-200"
            }`}
            onClick={() => handleCategoryChange("Banners & Large Format")}
          >
            Banners & Large Format
          </li>
          <li
            className={`cursor-pointer px-4 py-2 ${
              selectedCategory === "Brochures"
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-200"
            }`}
            onClick={() => handleCategoryChange("Brochures")}
          >
            Brochures
          </li>
          <li
            className={`cursor-pointer px-4 py-2 ${
              selectedCategory === "Business Cards"
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-200"
            }`}
            onClick={() => handleCategoryChange("Business Cards")}
          >
            Business Cards
          </li>
          <li
            className={`cursor-pointer px-4 py-2 ${
              selectedCategory === "Calendars"
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-200"
            }`}
            onClick={() => handleCategoryChange("Calendars")}
          >
            Calendars
          </li>
          <li
            className={`cursor-pointer px-4 py-2 ${
              selectedCategory === "Campaign Materials"
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-200"
            }`}
            onClick={() => handleCategoryChange("Campaign Materials")}
          >
            Campaign Materials
          </li>
          <li
            className={`cursor-pointer px-4 py-2 ${
              selectedCategory === "Greeting Cards"
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-200"
            }`}
            onClick={() => handleCategoryChange("Greeting Cards")}
          >
            Greeting Cards
          </li>
          <li
            className={`cursor-pointer px-4 py-2 ${
              selectedCategory === "ID Cards"
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-200"
            }`}
            onClick={() => handleCategoryChange("ID Cards")}
          >
            ID Cards
          </li>
          <li
            className={`cursor-pointer px-4 py-2 ${
              selectedCategory === "Labels"
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-200"
            }`}
            onClick={() => handleCategoryChange("Labels")}
          >
            Labels
          </li>
          <li
            className={`cursor-pointer px-4 py-2 ${
              selectedCategory === "Letterhead"
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-200"
            }`}
            onClick={() => handleCategoryChange("Letterhead")}
          >
            Letterhead
          </li>
          <li
            className={`cursor-pointer px-4 py-2 ${
              selectedCategory === "Mugs"
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-200"
            }`}
            onClick={() => handleCategoryChange("Mugs")}
          >
            Mugs
          </li>
          <li
            className={`cursor-pointer px-4 py-2 ${
              selectedCategory === "Notepads & Jotters"
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-200"
            }`}
            onClick={() => handleCategoryChange("Notepads & Jotters")}
          >
            Notepads & Jotters
          </li>
          <li
            className={`cursor-pointer px-4 py-2 ${
              selectedCategory === "Posters"
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-200"
            }`}
            onClick={() => handleCategoryChange("Posters")}
          >
            Posters
          </li>
          <li
            className={`cursor-pointer px-4 py-2 ${
              selectedCategory === "Presentation Folders"
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-200"
            }`}
            onClick={() => handleCategoryChange("Presentation Folders")}
          >
            Presentation Folders
          </li>
          <li
            className={`cursor-pointer px-4 py-2 ${
              selectedCategory === "Promotional Items"
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-200"
            }`}
            onClick={() => handleCategoryChange("Promotional Items")}
          >
            Promotional Items
          </li>
          <li
            className={`cursor-pointer px-4 py-2 ${
              selectedCategory === "Stickers"
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-200"
            }`}
            onClick={() => handleCategoryChange("Stickers")}
          >
            Stickers
          </li>
          <li
            className={`cursor-pointer px-4 py-2 ${
              selectedCategory === "Umbrella"
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-200"
            }`}
            onClick={() => handleCategoryChange("Umbrella")}
          >
            Umbrella
          </li>
          <li
            className={`cursor-pointer px-4 py-2 ${
              selectedCategory === "Wedding Stationery"
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-200"
            }`}
            onClick={() => handleCategoryChange("Wedding Stationery")}
          >
            Wedding Stationery
          </li>
          {/* Add other categories here */}
        </ul>
      </div>

      {/* Render filtered products */}
      <div className="mx-auto mt-4 max-w-5xl grid grid-cols-1 gap-x-2 gap-y-6 md:grid-cols-2 gap-x-6 gap-y-4 lg:grid-cols-3 gap-x-6 gap-y-6">
        {filteredProducts.map((product, index) => (
          <ProductDisplay
            key={index}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
      </div>
    </>
  );
};

export default Products;

      {/* <div className=" max-w-7xl mx-auto mb-20">
        <div className="flex justify-around py-10 rounded-3xl bg-[#EAF7FF] text-[#006EB3] font-bold"> */}
          {/*COLUMN 1*/}
          {/* <ul className="*:mb-3">
            <li>Printing and packaging</li>
            <li>Fabricating</li>
            <li>Large format prints</li>
            <li>3D Printing</li>
          </ul> */}

          {/*COLUMN 2*/}
          {/* <ul className="*:mb-3">
            <li>Promotional Items</li>
            <li>Content development</li>
            <li>Vehicle branding</li>
            <li>Photo Frames</li>
          </ul> */}

          {/*COLUMN 3*/}
          {/* <ul className="*:mb-3">
            <li>Brand promotion</li>
            <li>Magazine</li>
            <li>Wall paper printing</li>
            <li>Photo Book</li>
          </ul> */}

          {/*COLUMN 4*/}
          {/* <ul className="*:mb-3">
            <li>Corporate gift items</li>
            <li>Procurement</li>
          </ul>  */}
        {/* </div> */}
      {/* </div> */}

      

      {/* POPULAR CATEGORIES 
      <div className="mb-20">
        <h2 className="text-center text-[#0064A3] font-bold text-2xl mb-6">
          Popular Categories
        </h2>
        <div className=" mx-auto max-w-7xl grid grid-cols-3 gap-x-8 gap-y-6 ">
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
      </div> */}
