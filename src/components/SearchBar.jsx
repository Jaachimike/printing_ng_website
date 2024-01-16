import  { useState } from "react";
import searchIcon from "../assets/svg/icons8-search.svg";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle search submission here
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="max-w-4xl">
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-gray-100 py-4 px-12 rounded-full border-solid border-4 border-[#0064A3]"
      >
        <input
          type="text"
          placeholder="Search entire store here ..."
          value={searchTerm}
          onChange={handleChange}
          className="w-full px-4 py-5 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className=" text-white px-4 py-3 rounded-r-md bg-blue-300 hover:bg-[#DFEFFF]"
        >
          <i className="fas fa-search">
            <img src={searchIcon} alt="" srcset="" className=" h-9" />
          </i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
