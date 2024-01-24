import About_Image from "../assets/png/About_us_image.png";
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

const AboutUs = () => {
  return (
    <div>
      <PageHeader header="About Us" />
      <div>
        {/*TOP SECTION*/}
        <div></div>
        {/*ABOUT PRINTIN.NG*/}
        <div className=" flex flex-col-reverse md:flex-row mx-6 justify-center mb-16">
          {/*WRITE-UP*/}
          <div className="md:mr-28 mt-14">
            <h2 className="text-[#0064A3] font-bold text-2xl mb-4">
              About Printin.ng
            </h2>
            <p className="mb-5">
              <span className="font-bold">Printing.ng </span>is a full-fledged
              printing, branding and packaging agency with high{" "}
              <br className=" hidden md:block" /> degree of commitment to set
              new standards for Nigeria's and indeed, Africa's{" "}
              <br className=" hidden md:block" /> printing industry. While we
              have invested 3years in studying unique printing{" "}
              <br className=" hidden md:block" /> intelligence, focusing on the
              skillful use of the power of ink, our job reflects{" "}
              <br className=" hidden md:block" />
              thoroughness, precision and meets with the world standard quality,
              which helps us <br className=" hidden md:block" /> exceed our
              clients expectations.
            </p>
            <button className="bg-[#129FF7] px-4 py-2 rounded-xl text-white font-semibold">
              Get Started
            </button>
          </div>
          {/*IMAGE*/}
          <div className=" ">
            <img src={About_Image} />
          </div>
        </div>
        {/*OUR SERVICES*/}
        <div className="mb-16">
          <h2 className="text-center text-[#0064A3] font-bold text-2xl mb-4">
            Our Services
          </h2>
          <div className=" max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row pl-20 md:pl-0 text-xl md:text-lg md:justify-around py-10 rounded-3xl bg-[#EAF7FF] text-[#006EB3] font-bold mx-8 md:mx-5 lg:mx-0">
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
        </div>
        {/* POPULAR CATEGORIES  */}
        <div className="mb-20">
          <h2 className="text-center text-[#0064A3] font-bold text-2xl mb-6">
            Popular Categories
          </h2>
          <div className=" mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  justify-items-center  gap-x-8 gap-y-12 ">
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

export default AboutUs;
