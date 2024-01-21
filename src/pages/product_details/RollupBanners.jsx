import React from "react";
import Faqs from "../../components/Faqs";
import ProductDisplay from "../../components/ProductDisplay";
import background from "../../assets/png/subpage_background.png";
import rollup_banner from "../../assets/png/product_images/ROLLUP-BANNER.png";
import greeting_cards from "../../assets/png/product_images/GREETING-CARDS.png";
import branded_mugs from "../../assets/png/product_images/BRANDED-MUGS.png";
import business_cards from "../../assets/png/product_images/BUSINESS-CARDS.png";
import calendar from "../../assets/png/product_images/CALENDAR.png";
import feather_banner from "../../assets/png/product_images/FEATHER-BANNER.png";
import gift_bags from "../../assets/png/product_images/GIFT-BAGS.png";
import letterhead from "../../assets/png/product_images/LETTER-HEAD.png";
import magazine from "../../assets/png/product_images/MAGAZINE.png";
import product_packaging from "../../assets/png/product_images/PRODUCT-PACKAGING.png";

const faqs = [
  {
    question: "How do I place an order on your website?",
    answer:
      "You can place an order on Printin.ng by simply selecting any product of your choice, customizing them (if required), or adding straight to cart and checking out by making your payment.",
  },
  {
    question: "What type of paper lamination do you guys offer?",
    answer:
      "You can place an order on Printin.ng by simply selecting any product of your choice, customizing them (if required), or adding straight to cart and checking out by making your payment.",
  },
  {
    question: "What is the difference between matte and gloss lamination ?",
    answer:
      "You can place an order on Printin.ng by simply selecting any product of your choice, customizing them (if required), or adding straight to cart and checking out by making your payment.",
  },
  {
    question: "What paper thickness do you offer",
    answer:
      "You can place an order on Printin.ng by simply selecting any product of your choice, customizing them (if required), or adding straight to cart and checking out by making your payment.",
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

const RollupBanners = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="bg-cover h-[15dvh] text-white mb-16"
      ></div>
      <div className="max-w-7xl mx-auto">
        {/* Product Display */}
        <div className="grid grid-cols-2  mb-10">
          {/* Product Image */}
          <div className="flex flex-col items-center">
            <img
              src={rollup_banner}
              alt="Product Image"
              className="h-96 mb-6"
            />
            <div className="flex space-x-12">
              <img
                src={rollup_banner}
                alt="Product Image"
                className=" h-12 w-auto"
              />
              <img
                src={rollup_banner}
                alt="Product Image"
                className=" h-12 w-auto"
              />
              <img
                src={rollup_banner}
                alt="Product Image"
                className=" h-12 w-auto"
              />
              <img
                src={rollup_banner}
                alt="Product Image"
                className=" h-12 w-auto"
              />
            </div>
          </div>
          {/* Product Desription  */}
          <div>
            <h2 className=" text-[#0064A3] font-bold text-xl mb-4">
              Rollup Banner XL
            </h2>
            <p className="mb-7">
              Place your Order for the Rollup Banner XL by uploading your own
              design or requesting that our team of graphic designers do the
              design for you. We deliver nationwide
            </p>
            <p className="mb-20">
              <span>Finishing:</span> <br />
              Laminated and folded into shape with rope handles.
            </p>
            <div className="flex justify-between items-center  space-x-4">
              {/* Quantity Select  */}
              <div className="w-full">
                <label
                  for="small"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Quantity
                </label>
                <select
                  id="small"
                  class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose a quantity</option>
                  <option value="`100`">100</option>
                  <option value="50">50</option>
                  <option value="25">25</option>
                  <option value="10">10</option>
                </select>
              </div>

              {/* Order Button  */}
              <div>
                <button className="whitespace-nowrap bg-[#129FF7] px-4 py-2 rounded-xl text-white font-semibold">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Full Details  */}
        <div className="grid grid-cols-2 gap-x-14 mb-16">
          <div>
            <h2 className=" text-[#0064A3] font-bold text-xl mb-4">
              Rollup Banner XL
            </h2>
            <p className="mb-7">
              Place your Order for the Rollup Banner XL by uploading your own
              design or requesting that our team of graphic designers do the
              design for you. We deliver nationwide
            </p>
            <p className="mb-20">
              <span>Finishing:</span> <br />
              Laminated and folded into shape with rope handles.
            </p>
          </div>

          {/* Requirements and Specifications  */}
          <div className="bg-[#E9F8FE] px-6 py-8 rounded-lg text-[#0064A3] shadow-xl">
            <h2 className=" text-[#0064A3] font-bold text-xl mb-4">
              Requirements/Specifications
            </h2>
            {/* Paper Type  */}
            <div className="w-full">
              <select
                id="small"
                class="block w-full py-2 px-5 mb-6 text-sm  border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Paper Type</option>
                <option value="US">100</option>
                <option value="CA">50</option>
                <option value="FR">25</option>
                <option value="DE">10</option>
              </select>
            </div>
            {/* Paper Thickness  */}
            <div className="w-full">
              <select
                id="small"
                class="block w-full py-2 px-5 mb-6 text-sm border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Paper Thickness</option>
                <option value="US">100</option>
                <option value="CA">50</option>
                <option value="FR">25</option>
                <option value="DE">10</option>
              </select>
            </div>
            {/* Material */}
            <div className="w-full">
              <select
                id="small"
                class="block w-full py-2 px-5 mb-6 text-sm border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Material</option>
                <option value="US">100</option>
                <option value="CA">50</option>
                <option value="FR">25</option>
                <option value="DE">10</option>
              </select>
            </div>
            {/* Lamination */}
            <div className="w-full">
              <select
                id="small"
                class="block w-full py-2 px-5 mb-6 text-sm border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Lamination</option>
                <option value="US">100</option>
                <option value="CA">50</option>
                <option value="FR">25</option>
                <option value="DE">10</option>
              </select>
            </div>
            {/* Delivery Method */}
            <div className="w-full">
              <select
                id="small"
                class="block w-full py-2 px-5 mb-6 text-sm border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Delivery Method</option>
                <option value="US">Pickup</option>
                <option value="CA">Home Delivery</option>
              </select>
            </div>
          </div>
        </div>
        {/* FAQ's  */}
        <div className="mb-28">
          <h2 className=" text-[#0064A3] font-bold text-center text-xl mb-4">
            Frequently Asked Questions (FAQ)
          </h2>
          <div>
            <Faqs faqsData={faqs} />
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-20">
          <h2 className=" text-[#0064A3] font-bold text-center text-xl mb-4">
            Related Products
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
    </div>
  );
};

export default RollupBanners;
