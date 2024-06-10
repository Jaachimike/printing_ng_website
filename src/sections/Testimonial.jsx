import React from "react";
import twitterLogo from "../assets/svg/social-media-icons/twitter-logo-2429.svg";
const testimonials = [
  {
    fullName: "Amina Ebele",
    username: "@DeliciousAmina",
    comment:
      "I am now the unofficial @Printivo ambassador. What these guys just pulled to ensure I got my menu cards today is stunning!",
  },
  {
    fullName: "Oluwatosin",
    username: "@tosingirlfx",
    comment:
      "@Printivo delivered my mugs in 24hrs. Thank you so much! It's nice doing business with you. More to come.",
  },
  {
    fullName: "Oluwatosin",
    username: "@DeliciousAmina",
    comment:
      "These guys @Printivo are really awesome and affordable. Excellent customer service and delivery too. Thank you.",
  },
];

export const Testimonial = () => {
  return (
    <div className="mx-auto max-w-7xl bg-[#EDF6FD] px-10 lg:px-16 py-8 mb-16">
      <div>
        <h2 className="text-3xl font-bold mb-8">What Customers Say About Us</h2>
        <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white px-5 py-6 flex space-x-5 shadow-md"
            >
              <img src={twitterLogo} alt="" className="h-5" />
              <div>
                <div className="flex space-x-4 mb-4">
                  <p className="font-bold">{testimonial.fullName}</p>
                  <p className="text-[#41AEF4]">{testimonial.username}</p>
                </div>
                <p>{testimonial.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
