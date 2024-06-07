import React from "react";
import Logo from "../assets/svg/Printin logo.svg";
import facebook from "../assets/svg/facebook_logo_icon.svg";
import instagram from "../assets/svg/instagram_logo_icon.svg";
import linkedin from "../assets/svg/linkedin_logo.svg";
import mastercard from '../assets/svg/mastercard-svgrepo-com.svg';
import visa from '../assets/svg/visa-logo-svgrepo-com.svg';
import verve from '../assets/svg/verve-svgrepo-com.svg';
import bank from '../assets/svg/bank-svgrepo-com.svg'
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: adds a smooth scroll animation
    });
  };

  return (
    <footer className="bg-[#DFEFFF] py-8 pl-8 lg:pl-16 flex flex-col items-start md:flex-row md:justify-between md:items-start *:mb-6">
      {/* 1st column  */}
      <div className="sm:w-1/4">
        <a href="/" className="flex items-center -mt-2 mb-2">
          <img src={Logo} alt="Logo" className="w-auto h-16 mr-4" />
        </a>
        <a href="/" className="flex items-center -mt-2 mb-4 text-gray-500 ml-8 text-xs">About Us
          </a>
        <a href="/" className="flex items-center -mt-2 mb-4 text-gray-500 ml-8 text-xs">
          Contact</a>
        <a href="/" className="flex items-center -mt-2 mb-4 text-gray-500 ml-8 text-xs">
          Track Order</a>
        <a href="/" className="flex items-center -mt-2 mb-4 text-gray-500 ml-8 text-xs">
          Printin Promise</a>
        <a href="/" className="flex items-center -mt-2 mb-4 text-gray-500 ml-8 text-xs">
          Career</a>
      </div>
      {/* second column  */}
      <div className="mt-4 sm:w-1/4">
        <h3 className=" text-lg font-medium mb-1">Help and Information</h3>
        <ul className="list-unstyled ">
          <li>
            <Link
              className="text-xs text-gray-500 hover:text-blue-400"
              to="about"
              onClick={scrollToTop}
            >
              Paper Quality
            </Link>
          </li>
          <li>
            <Link
              className="text-xs text-gray-500 hover:text-blue-400"
              to="contact"
              onClick={scrollToTop}
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              className="text-xs text-gray-500 hover:text-blue-400"
              to="track"
              onClick={scrollToTop}
            >
              Terms and Conditions
            </Link>
          </li>
          <li>
            <Link
              className="text-xs text-gray-500 hover:text-blue-400"
              to="blog"
              onClick={scrollToTop}
            >
              Font Licenses
            </Link>
          </li>
          <li>
            <Link
              to="careers"
              className=" text-xs text-gray-500 hover:text-blue-400"
              onClick={scrollToTop}
            >
              Shipping and Delivery
            </Link>
          </li>
        </ul>
      </div>
      {/* third column  */}
      <div className="mt-4 sm:w-1/4">
        <h3 className=" text-lg font-medium mb-1">Get Started</h3>
        <ul className="list-unstyled ">
          <li>
            <Link
              to="affiliates"
              className=" text-xs text-gray-500 hover:text-blue-400"
              onClick={scrollToTop}
            >
              Become an Affiliate
            </Link>
          </li>
          <li>
            <Link
              to="login"
              className="font-bold text-xs text-gray-500 hover:text-blue-400"
              onClick={scrollToTop}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="signup"
              className="font-bold text-xs text-gray-500 hover:text-blue-400"
              onClick={scrollToTop}
            >
              SignUp
            </Link>
          </li>
        </ul>
      </div>
      {/* fourth column  */}
      <div className="sm:w-1/4">
        <h3 className=" text-lg font-medium mb-4 mt-4">Follow Us</h3>
        <div className="flex -mt-3">
          <a href="#" className="text-blue-400 hover:text-blue-500 mr-2">
            <i className="fab fa-instagram">
              <img src={instagram} alt="" srcset="" className=" h-8" />
            </i>
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-500 mr-2">
            <i className="fab fa-facebook">
              <img src={facebook} alt="" srcset="" className=" h-8" />
            </i>
          </a>
          <a href="#" className=" hover:text-blue-500">
            <i className="fab fa-linkedin ">
              <img src={linkedin} alt="" srcset="" className=" h-8" />
            </i>
          </a>
        </div>
        <div className="sm:w-2/4">
        <h3 className="text-sm font-medium mb-4 mt-4">Accepted Payments</h3>
        <div className="flex -mt-3">
            <i className="fab fa-instagram">
              <img src={mastercard} alt="" srcset="" className=" h-8" />
            </i>
            <i className="fab fa-facebook">
              <img src={visa} alt="" srcset="" className=" h-8" />
            </i>
            <i className="fab fa-linkedin ">
              <img src={verve} alt="" srcset="" className=" h-8" />
            </i>
            <i className="fab fa-linkedin ">
              <img src={bank} alt="" srcset="" className=" h-8" />
            </i>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
