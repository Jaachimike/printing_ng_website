import Logo from "../assets/svg/Printin logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 bg-[#DFEFFF] body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            className="flex title-font font-medium items-center cursor-pointer mb-4 md:mb-0"
            to="/"
          >
            <img src={Logo} alt="Company Logo" />
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link
              className="mr-5 hover:text-blue-400 cursor-pointer"
              to="products"
            >
              All Products
            </Link>
            <a className="mr-5 hover:text-blue-400 cursor-pointer">
              Become an Affiliate
            </a>
          </nav>
          <button className="font-bold hover:font-normal hover:text-blue-400 inline-flex items-center  border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0 mr-4">
            <Link to="login">Login</Link>
          </button>
          <button className="font-bold hover:font-normal hover:text-blue-400 inline-flex items-center  border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">
            <Link to="signup">SignUp</Link>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
