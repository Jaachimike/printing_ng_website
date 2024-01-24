import React from "react";
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

const Products = () => {
  return (
    <>
      <PageHeader header="All Products" />
      <div className=" max-w-7xl mx-auto mb-20">
        <div className="flex justify-around py-10 rounded-3xl bg-[#EAF7FF] text-[#006EB3] font-bold">
          {/*COLUMN 1*/}
          <ul className="*:mb-3">
            <li>Printing and packaging</li>
            <li>Fabricating</li>
            <li>Large format prints</li>
            <li>3D Printing</li>
          </ul>

          {/*COLUMN 2*/}
          <ul className="*:mb-3">
            <li>Promotional Items</li>
            <li>Content development</li>
            <li>Vehicle branding</li>
            <li>Photo Frames</li>
          </ul>

          {/*COLUMN 3*/}
          <ul className="*:mb-3">
            <li>Brand promotion</li>
            <li>Magazine</li>
            <li>Wall paper printing</li>
            <li>Photo Book</li>
          </ul>

          {/*COLUMN 4*/}
          <ul className="*:mb-3">
            <li>Corporate gift items</li>
            <li>Procurement</li>
          </ul>
        </div>
      </div>

      {/* ALL PRODUCTS  */}
      <div className="mb-20">
        <h2 className="text-center text-[#0064A3] font-bold text-2xl mb-6">
          All Products
        </h2>
        <div className=" mx-auto max-w-7xl grid grid-cols-4 gap-x-8 gap-y-12 ">
          {allProducts.map((product, index) => {
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

      {/* POPULAR CATEGORIES  */}
      <div className="mb-20">
        <h2 className="text-center text-[#0064A3] font-bold text-2xl mb-6">
          Popular Categories
        </h2>
        <div className=" mx-auto max-w-7xl grid grid-cols-4 gap-x-8 gap-y-12 ">
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
    </>
  );
};

export default Products;
