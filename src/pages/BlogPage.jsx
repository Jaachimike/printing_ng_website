import React from "react";
import PageHeader from "../components/PageHeader";
import ProductDisplay from "../components/ProductDisplay";
import blog_image from "../assets/png/blog_post_images/blog-post-shoe.png";
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

const BlogPage = () => {
  return (
    <div>
      <PageHeader header="Blog..." />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#0064A3] font-bold text-5xl mb-5">
          Branding your products
        </h2>
        <div className="grid grid-cols-3 gap-4 mb-20">
          {/* Blog Description  */}
          <div className="col-span-2 bg-[#E9F8FE] pt-8 pb-28 px-8 rounded-xl shadow-lg">
            <img src={blog_image} alt="blog image" />
            <span className=" font-semibold">
              Printin.ng | 15th Nov, 2023 | 10:33 AM
            </span>

            <h3 className="mt-8 font-bold">Colour Selection</h3>
            <p>
              Your message must be bold enough for one to see and grasp. So,
              whether it's a sale, an exhibition, a product or service you are
              advertising, your design fonts must be legible. Most especially,
              your copy or keyword must be designed in a large font. You can go
              artistic with your font but not overboard
            </p>
            <h3 className="mt-8 font-bold">Sticker Designs</h3>
            <p>
              Your message must be bold enough for one to see and grasp. So
              whetyher it's a sale, an exhibition, a product or service
            </p>
          </div>
          {/* Search Bar */}
          <div className=" bg-[#E9F8FE] py-12 rounded-xl shadow-lg">
            <div className=" w-9/12 mx-auto mb-10">
              <input type="text" className="w-full h-10 rounded-full mb-4" />
              <div className="flex justify-end">
                <button className="bg-[#129FF7] text-white rounded-full px-4 py-1">
                  Search Blog
                </button>
              </div>
            </div>

            <div className=" w-9/12 mx-auto ">
              <h3 className="font-bold text-2xl">TAGS</h3>
              <p>
                Printing | Banner | Cards | Sticker Buble sticker | Brochure |
                Delivery Branding | Business cards
              </p>
            </div>
          </div>
        </div>

        {/* Popular Categories */}
        <div className="mb-20">
          <h2 className=" text-[#0064A3] font-bold text-center text-xl mb-4">
            Related Posts
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

export default BlogPage;
