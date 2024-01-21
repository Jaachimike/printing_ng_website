import product_img from "../assets/jpeg/product_image.jpg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import arrow from "../assets/svg/right-arrow-svg.svg";

const defaultProps = {
  title: "Title.",
  price: "10",
  description: "",
};

const propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
};

const ProductDisplay = ({ title, price, description, image }) => {
  return (
    <Link to="products">
      <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
          <img
            src={image}
            alt="Product Image"
            class="h-80 w-72 object-cover rounded-t-xl"
          />
          <div class="px-4 py-3 w-72">
            <p class="text-lg font-bold text-black truncate block capitalize">
              {title}
            </p>
            <p class="text-gray-400 mb-3 text-xs">Starting at &#8358;{price}</p>
            <p class="text-gray-400 text-xs mb-6">{description}</p>

            <div className="text-[#e03984] font-semibold flex items-center justify-center ">
              <p>Order Now</p>
              <img src={arrow} alt="right arrow" className="h-6" />
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
