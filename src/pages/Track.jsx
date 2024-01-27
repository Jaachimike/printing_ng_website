import React from "react";
import PageHeader from "../components/PageHeader";
import arrow from "../assets/png/right-arrow.png";
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

const Track = () => {
  return (
    <>
      <PageHeader header="Track Order" />
      <div className="max-w-7xl mx-auto">
        <div className="flex space-x-7 mb-20">
          {/* TRACK YUR ORDER HERE */}
          <div className="w-7/12">
            <h2 className="font-bold text-xl  mb-4 text-[#0064A3]">
              Track your Order here
            </h2>
            <p className="mb-10">
              Track your print order without hassles Easily track the status
              your Printin.ng order using your order number and see step by step
              progress on your order.
            </p>
            <p className="font-bold mb-4">Having issues tracking your order?</p>
            <p>
              {" "}
              <span className="font-bold ">Tel:</span> +234 816 353 4401
            </p>
            <p>
              <span className="font-bold ">Email:</span> order@printin.ng
            </p>
          </div>

          {/* ENTER TRACKING NUMBER */}
          <div className="w-full bg-[#CAEFFF] pr-10 pl-16 py-16 rounded-3xl">
            <div className="w-10/12 mx-auto">
              <h2 className="font-semi-bold text-xl text-right mb-4 text-[#0064A3]">
                Enter Tracking Number
              </h2>
              <input type="text" className="block w-full rounded-xl h-10" />
              <div className="flex justify-end">
                <button className="bg-[#129FF7] px-10 py-2 rounded-xl mt-8 text-white font-semibold">
                  Track Order
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* TRACKING STATUS AND SCHEDULE */}
        <div className="mb-16">
          <h2 className="font-bold text-xl text-center mb-4 text-[#0064A3]">
            Tracking Status & Schedule
          </h2>
          <div></div>
          <table className=" max-w-7xl mx-auto">
            <tbody className="">
              {/* Order Placed */}
              <tr className=" *:pb-10 *:pr-10">
                <td>
                  <p className="font-bold text-xl">Order Placed</p>
                </td>
                <td>
                  <img src={arrow} alt="arrow svg" className="h-8" />
                </td>
                <td>
                  <div className="rounded-full bg-[#CAEFFF] text-[#CAEFFF] w-fit px-6 py-4 border-4 border-[#0064A3] ">
                    1
                  </div>
                </td>
                <td>
                  <div>
                    <p>Order has been placed by customer</p>
                    <p className="font-bold">@11:30am | Tue | Nov, 2024</p>
                  </div>
                </td>
              </tr>
              {/* Order Processing */}
              <tr className="*:pb-10 *:pr-10">
                <td>
                  <p className="font-bold text-xl">Order Processing</p>
                </td>
                <td>
                  <img src={arrow} alt="arrow svg" className="h-8" />
                </td>
                <td>
                  <div className="rounded-full bg-[#FF8C22] text-[#FF8C22] w-fit px-6 py-4 border-4 border-[#0064A3] ">
                    1
                  </div>
                </td>
                <td>
                  <div>
                    <p>
                      Order is being Processed by the Printin.ng Order
                      Processing Unit.
                    </p>
                    <p className="font-bold">@11:30am | Wed | Nov, 2024</p>
                  </div>
                </td>
              </tr>
              {/* Order in Transit */}
              <tr className="*:pb-10 *:pr-10">
                <td>
                  <p className="font-bold text-xl">Order in Transit</p>
                </td>
                <td>
                  <img src={arrow} alt="arrow svg" className="h-8" />
                </td>
                <td>
                  <div className="rounded-full bg-[#CAEFFF] text-[#CAEFFF] w-fit px-6 py-4 border-4 border-[#0064A3] ">
                    1
                  </div>
                </td>
                <td>
                  <div>
                    <p>Order now in transit for delivery</p>
                    <p className="font-bold">@ --</p>
                  </div>
                </td>
              </tr>
              {/* Order Delivered */}
              <tr className="*:pb-10 *:pr-10">
                <td>
                  <p className="font-bold text-xl">Order Delivered</p>
                </td>
                <td>
                  <img src={arrow} alt="arrow svg" className="h-8" />
                </td>
                <td>
                  <div className="rounded-full bg-[#CAEFFF] text-[#CAEFFF] w-fit px-6 py-4 border-4 border-[#0064A3] ">
                    1
                  </div>
                </td>
                <td>
                  <div>
                    <p>Order delivered to customer</p>
                    <p className="font-bold">@--</p>
                  </div>
                </td>
              </tr>
              {/* Order Completed */}
              <tr className="*:pb-10 *:pr-10">
                <td>
                  <p className="font-bold text-xl">Order Completed</p>
                </td>
                <td>
                  <img src={arrow} alt="arrow svg" className="h-8" />
                </td>
                <td>
                  <div className="rounded-full bg-[#CAEFFF] text-[#CAEFFF] w-fit px-6 py-4 border-4 border-[#0064A3] ">
                    1
                  </div>
                </td>
                <td>
                  <div>
                    <p>Order Completed</p>
                    <p className="font-bold">@--</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex space-x-3 items-center lg:ml-10">
            <div className=" rounded-full bg-[#FF8C22] text-[#FF8C22] w-fit px-4 py-2 border-4 border-[#0064A3] ">
              1
            </div>
            <p>Orange means your order is in the current stage</p>
          </div>
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

export default Track;
