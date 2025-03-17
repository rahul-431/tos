import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Connect = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-12">
      {/* title section */}
      <div className="flex flex-col gap-3 items-center justify-center">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold w-fit text-center mx-auto">
          Connect <span className="textBg font-extrabold">With Us</span>
        </h1>
        <p className="text-xl font-semibold text-center">
          Your Vision, Our Commitment. React out for personalized optical
          solutions
        </p>
      </div>

      {/* form section */}
      <div className="shadow-2xl shadow-black grid grid-cols-5 gap-5 rounded-md my-10">
        {/* only form */}
        <div className=" p-8 flex flex-col gap-4 col-span-3">
          <h1 className="text-2xl font-semibold">Send Us a Message</h1>
        </div>
        {/* contact info section */}
        <div className="p-8 footerBg text-white flex flex-col gap-5 col-span-2 rounded-r-md">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-2xl">
              <span className="font-bold">CONTACT</span> INFO
            </h1>
            <p className="text-justify text-lg font-medium">
              For inquiries, support, or feedback, please don't hesitate to
              contact us. Our customer service team is available to ensure your
              complete satisfaction with our products and services.
            </p>
          </div>
          <div className="flex gap-5 items-start">
            <FaLocationDot size={20} />
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold">Location</h1>
              <p></p>
            </div>
          </div>
          <div className="flex gap-5">
            <FaPhoneAlt size={18} />
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold">Contact</h1>
              <p></p>
            </div>
          </div>
          <div className="flex gap-5">
            <FaPhoneAlt size={18} />
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold">Email</h1>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
