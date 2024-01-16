import product_img from "../assets/jpeg/product_image.jpg";
import PropTypes from "prop-types";

const defaultProps = {
    title: 'Title.',
    price: '10',
    description: ''
}

const propTypes = {
    title: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string
}

const ProductDisplay = ({ title, price, description }) => {
  return (
    <div className="max-w-xs overflow-hidden shadow-lg">
      <img
        className=" h-60 w-full "
        src={product_img}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl ">{title}</div>
        <p className="mb-2 text-[#706D6D]">Starting at &#8358;{price} </p>
        <p className="text-[#706D6D] text-base">{description}</p>
      </div>
      <div className="flex py-3 items-center justify-center text-xl">
        <button>Order Now</button>
      </div>
    </div>
  );
};

ProductDisplay.defaultProps = defaultProps
ProductDisplay.propTypes = propTypes

export default ProductDisplay;
