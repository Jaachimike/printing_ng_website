import React from "react";
import PropTypes from "prop-types";
import background from "../assets/png/subpage_background.png";
import searchIcon from "../assets/svg/icons8-search.svg";

const defaultProps = {
  header: "Input Text",
};

const propTypes = {
  header: PropTypes.string,
};

const PageHeader = ({header}) => {
  return (
    <div
      style={{backgroundImage: `url(${background})`}}
      className="bg-cover h-[25vh] lg:h-[15vh]  max-w-[95rem] mx-auto text-white mb-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row lg:justify-around py-8">
        <h1 className="text-7xl font-Lobster text-center md:text-left mb-4">
          {header}
        </h1>

        {/* Search Bar  */}
        <div className="group w-96 md:w-96 lg:w-6/12 rounded-full mx-auto lg:mx-0 bg-white px-6 py-4 flex items-center">
          <div className="relative flex items-center w-full shadow-lg">
            <input
              id="8"
              type="email"
              placeholder="Search entire store here..."
              className="peer relative h-10 w-full rounded-md text-sm bg-gray-50 pl-3 pr-20 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg"
            />
            <button className="absolute flex items-center justify-center right-0 h-10 w-10 rounded-r-md bg-blue-200 text-xs font-semibold text-white transition-all duration-200 ease-in-out group-focus-within:bg-blue-400 group-focus-within:hover:bg-blue-600">
              <img src={searchIcon} alt="Search Icon" className="h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

PageHeader.defaultProps = defaultProps;
PageHeader.propTypes = propTypes;

export default PageHeader;
