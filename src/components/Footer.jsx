import React from "react";
import Logo from "../assets/svg/Printin logo.svg";
import facebook from "../assets/svg/facebook_logo_icon.svg";
import instagram from "../assets/svg/instagram_logo_icon.svg";
import linkedin from "../assets/svg/linkedin_logo.svg";
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
        <a href="/" className="flex items-center mb-4">
          <img src={Logo} alt="Logo" className="w-auto h-16 mr-4" />
        </a>
        <p className="text-gray-500 text-sm">
          #59, AKEJU STREET,
          <br />
          OFF IKORODU ROAD, SHOMOLU,. LAGOS.
          <br />
          <a href="tel:+2348163534401">
            <span className=" font-bold">Tel:</span> +234 816 353 4401
          </a>
          <br />
          <a href="mailto:info@example.com">
            Email: info@printin.ng | printingintelligence@gmail.com
          </a>
        </p>
        <p className="text-gray-400 text-xs mt-2">
          Copyright © 2024 All Rights Reserved
        </p>
      </div>
      {/* second column  */}
      <div className="sm:w-1/4">
        <h3 className=" text-lg font-medium mb-4">PRINTINGNG</h3>
        <ul className="list-unstyled ">
          <li>
            <Link
              className="hover:text-blue-400"
              to="about"
              onClick={scrollToTop}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-blue-400"
              to="contact"
              onClick={scrollToTop}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-blue-400"
              to="track"
              onClick={scrollToTop}
            >
              Track Order
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-blue-400"
              to="blog"
              onClick={scrollToTop}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="careers"
              className=" hover:text-blue-400"
              onClick={scrollToTop}
            >
              Career
            </Link>
          </li>
        </ul>
      </div>
      {/* third column  */}
      <div className="sm:w-1/4">
        <h3 className=" text-lg font-medium mb-4">GET STARTED</h3>
        <ul className="list-unstyled ">
          <li>
            <Link
              to="affiliates"
              className=" hover:text-blue-400"
              onClick={scrollToTop}
            >
              Become an Affiliate
            </Link>
          </li>
          <li>
            <Link
              to="login"
              className="font-bold hover:text-blue-400"
              onClick={scrollToTop}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="signup"
              className="font-bold hover:text-blue-400"
              onClick={scrollToTop}
            >
              SignUp
            </Link>
          </li>
        </ul>
      </div>
      {/* fourth column  */}
      <div className="sm:w-1/4">
        <h3 className=" text-lg font-medium mb-4">INFORMATION</h3>
        <ul className="list-unstyled ">
          <li>
            <Link
              className="hover:text-blue-400"
              to="privacy_policy"
              onClick={scrollToTop}
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-blue-400"
              to="terms_conditions"
              onClick={scrollToTop}
            >
              Terms & Conditions
            </Link>
          </li>
        </ul>

        <div className="flex mt-6">
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
      </div>
    </footer>
  );
};

export default Footer;
