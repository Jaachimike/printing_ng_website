import { useState } from "react";
import arrowdown from "../assets/svg/down-arrow-7425.svg";

const Faqs = ({ faqsData = [] }) => {
  return (
    <div className="container mx-auto px-4">
      {faqsData.map((faq, index) => (
        <FaqItem key={index} faq={faq} />
      ))}
    </div>
  );
};

const FaqItem = ({ faq }) => {
  const [isItemOpen, setIsItemOpen] = useState(false); // State for each item

  const handleToggle = () => {
    setIsItemOpen(!isItemOpen); // Toggle the state for this specific item
  };

  return (
    <>
      <div
        onClick={handleToggle}
        className=" shadow-md text-[#0064A3] rounded-lg  mb-4"
      >
        <div className="bg-[#E9F8FE] p-4 flex justify-between items-center">
          <button className="text-left font-semibold text-xl">
            {faq.question}
          </button>
          <button className=" font-semibold text-xl">
            <img src={arrowdown} alt="faq arrow down" className="h-4" />
          </button>
        </div>
      </div>
      <div>
        {isItemOpen && ( // Conditionally render the answer based on item's state
          <div className="answer mt-4">
            <p className="p-4 px-2 text-sm">{faq.answer}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Faqs;
