import product_img from "../assets/jpeg/product_image.jpg";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import arrow from "../assets/svg/right-arrow-black-svg .svg";

const defaultProps = {
  title: "Title.",
  price: "10",
  description: "",
  moq: "100",
};

const propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
};

const ProductDisplay = ({title, price, description, image, moq}) => {
  return (
    <Link to="/rollup_banner">
      <div className=" bg-white w-80 shadow-md hover:shadow-xl">
        <a href="#">
          <img
            src={image}
            alt="Product Image"
            className="h-80  object-cover  duration-500 hover:scale-105"
          />
          <div className="px-4 py-3 ">
            <p className="text-xl mb-4 font-bold text-black truncate block capitalize">
              {title}
            </p>
            <p className="text-gray-400 mb-2">Starting at</p>
            <p className="font-bold text-gray-400 mb-7">
              <span className="text-xl font-bold  text-black">
                &#8358;{price}
              </span>{" "}
              per {moq}
            </p>
            {/* <p className="text-gray-400 text-xs mb-6">{description}</p> */}

            <div className="duration-500 hover:scale-105 font-semibold flex items-center py-3 px-2 bg-[#DFEFFF] w-fit">
              <p>Browse {title}</p>
              <img src={arrow} alt="right arrow" className="h-6 ml-4" />
            </div>
          </div>
        </a>
      </div>
    </Link>
  );
};

ProductDisplay.defaultProps = defaultProps;
ProductDisplay.propTypes = propTypes;

export default ProductDisplay;
