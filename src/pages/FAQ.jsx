import React from "react";
import Faqs from "../components/Faqs";
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

const FAQ = () => {
  return (
    <div>
      {/* FAQ's  */}
      <div className="mb-28 mt-11">
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
  );
};

export default FAQ;
