import React from "react";
import ProductDisplay from "../components/ProductDisplay";

const allProducts = [
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

const Products = () => {
  return (
    <>
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
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
