import About_Image from "../assets/png/About_us_image.png";
import ProductDisplay from "../components/ProductDisplay";

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

const AboutUs = () => {
  return (
    <div>
      <div>
        {/*TOP SECTION*/}
        <div></div>
        {/*ABOUT PRINTIN.NG*/}
        <div className="flex justify-center mb-16">
          {/*WRITE-UP*/}
          <div className="mr-28 mt-14">
            <h2 className="text-[#0064A3] font-bold text-2xl mb-4">
              About Printin.ng
            </h2>
            <p className="mb-5">
              <span className="font-bold">Printing.ng </span>is a full-fledged
              printing, branding and packaging agency with high <br /> degree of
              commitment to set new standards for Nigeria's and indeed, Africa's{" "}
              <br /> printing industry. While we have invested 3years in
              studying unique printing <br /> intelligence, focusing on the
              skillful use of the power of ink, our job reflects <br />{" "}
              thoroughness, precision and meets with the world standard quality,
              which helps us <br /> exceed our clients expectations.
            </p>
            <button className="bg-[#129FF7] px-4 py-2 rounded-xl text-white font-semibold">
              Get Started
            </button>
          </div>
          {/*IMAGE*/}
          <div className="">
            <img src={About_Image} />
          </div>
        </div>
        {/*OUR SERVICES*/}
        <div className="mb-16">
          <h2 className="text-center text-[#0064A3] font-bold text-2xl mb-4">
            Our Services
          </h2>
          <div className=" max-w-7xl mx-auto">
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
      </div>
    </div>
  );
};

export default AboutUs;
