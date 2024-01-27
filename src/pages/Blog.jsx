import React from "react";
import PageHeader from "../components/PageHeader";
import header_image from "../assets/png/Blog-header-image.png";
import blog_image_1 from "../assets/png/blog_images/blog-shoe.png";
import blog_image_2 from "../assets/png/blog_images/blog-color.png";
import blog_image_3 from "../assets/png/blog_images/blog-logo.png";
import blog_image_4 from "../assets/png/blog_images/blog-image-4.png";
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

const blogPosts = [
  {
    image: blog_image_1,
    title: "Branding your Product",
    description:
      "Track your print order without hassles Easily track the status your Printivo order using your order number and see step by step ...",
  },
  {
    image: blog_image_2,
    title: "All about colours in printing",
    description:
      "Track your print order without hassles Easily track the status your Printivo order using your order number and see step by step ...",
  },
  {
    image: blog_image_3,
    title: "End of the year giveaways",
    description:
      "Track your print order without hassles Easily track the status your Printivo order using your order number and see step by step ...",
  },
  {
    image: blog_image_4,
    title: "Printing Documents",
    description:
      "Track your print order without hassles Easily track the status your Printivo order using your order number and see step by step ...",
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

const BlogPostOutline = ({ image, title, description }) => {
  return (
    <div className="flex items-center space-x-6 px-8 mb-8">
      {/* image  */}
      <div>
        <img src={image} alt="blog image" className="" />
      </div>

      {/* short description */}
      <div>
        <h3 className="font-bold text-xl mb-3">{title}</h3>
        <p className="mb-2 w-10/12">{description}</p>
        <p className="font-bold">Read more...</p>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <>
      <PageHeader header="Blog" className="" />
      <div className="max-w-7xl mx-auto">
        <img src={header_image} className="mt-[-30px] h-46 w-full mb-10" />
        <div className="grid grid-cols-3 gap-4 mb-20">
          {/* Blog List  */}
          <div className="col-span-2 bg-[#E9F8FE] py-12">
            {blogPosts.map((blog, index) => {
              return (
                <BlogPostOutline
                  key={index}
                  image={blog.image}
                  title={blog.title}
                  description={blog.description}
                />
              );
            })}
          </div>
          {/* Search Bar */}
          <div className=" bg-[#E9F8FE] py-12">
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
          {/* Read More Button  */}
          <div className="col-span-2 bg-[#2F2F2F] py-2 rounded-full flex justify-center text-white">
            Read More...
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

export default Blog;

{
  /* <div className="flex space-x-6 px-8">

  <img src={blog_image_1} alt="blog image" className="" />


  <div>
    <h3 className="font-bold text-xl mb-3">Branding your Product</h3>
    <p className="mb-2 w-8/12">
      Track your print order without hassles Easily track the status your
      Printivo order using your order number and see step by step ...
    </p>
    <p className="font-bold">Read more...</p>
  </div>
</div>; */
}
