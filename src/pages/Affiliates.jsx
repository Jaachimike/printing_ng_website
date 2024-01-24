import React from "react";
import PageHeader from "../components/PageHeader";
import background from "../assets/png/subpage_background.png";
import affiliate_image from "../assets/svg/affiliates_svg.svg";
import ProductDisplay from "../components/ProductDisplay";
import searchIcon from "../assets/svg/icons8-search.svg";
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

const relatedProducts = [
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

const Affiliates = () => {
  return (
    <>
      <PageHeader header="Affilates" />
      <div className="max-w-7xl mx-auto">
        {/* EARN MONEY */}
        <div className="flex space-x-6 mb-16">
          {/* Write-up */}
          <div>
            <h2 className="font-bold text-xl mb-5 text-[#0064A3]">
              Earn Money everytime your referral pays for a print
            </h2>
            <p className="mb-5">
              Register on Printin.ng and get your referral code that you can
              share to the public on any platform.
            </p>
            <p>
              You can start earning passive income right away anytime the person
              who registers with Printin.ng using your link makes a payment for
              a printing service.
            </p>
          </div>
          {/* Image */}
          <div className=" invisible md:visible">
            <img src={affiliate_image} alt="" srcset="" />
          </div>
        </div>

        {/* SIMPLE STEPS  */}
        <div className="mb-16">
          <h2 className="font-bold text-center text-xl mb-5 text-[#0064A3]">
            Simple Steps to start earning
          </h2>

          {/* STEPS */}
          <div className="mb-10">
            {/* STEP 1 */}
            <div className="flex items-center ml-60 space-x-9 mb-5">
              <div className="rounded-full bg-[#2F2F2F] w-fit text-white px-6 py-4 border-4 border-[#CAEFFF] ">
                1
              </div>
              <h3 className="text-xl font-bold text-[#2F2F2F]">
                Create an account with Printin.ng and login to your dashboard
              </h3>
            </div>
            {/* STEP 2 */}
            <div className="flex items-center ml-60 space-x-9 mb-5">
              <div className="rounded-full bg-[#2F2F2F] w-fit text-white px-6 py-4 border-4 border-[#CAEFFF] ">
                2
              </div>
              <h3 className="text-xl font-bold text-[#2F2F2F]">
                Copy your affiliate link and/or share the link
              </h3>
            </div>
            {/* STEP 3 */}
            <div className="flex items-center ml-60 space-x-9">
              <div className="rounded-full bg-[#2F2F2F] w-fit text-white px-6 py-4 border-4 border-[#CAEFFF] ">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2F2F2F]">
                  Get paid once your affiliate makes a payment
                </h3>
                <p>
                  <span className="mr-3">*</span>Your affiliate is anyone who
                  registers on Printin.ng using your link
                </p>
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <div className="flex justify-center">
            <button className="bg-[#2F2F2F] px-16 py-3 text-white rounded-2xl">
              Become an Affiliate
            </button>
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-20">
          <h2 className=" text-[#0064A3] font-bold text-center text-xl mb-4">
            Related Products
          </h2>
          <div className=" mx-auto max-w-7xl grid justify-items-center grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12 ">
            {relatedProducts.map((product, index) => {
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

export default Affiliates;
