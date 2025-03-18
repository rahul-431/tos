import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import ContactForm from "./ContactForm";

const Connect = () => {
  return (
    <div
      id="connect"
      className="px-4 sm:px-8 md:px-12 lg:px-20 pt-16 md:pt-20 pb-12"
    >
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
      <div className="shadow-2xl shadow-black grid md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-5 rounded-md my-10">
        {/* only form */}
        <div className=" p-8 flex flex-col gap-4 md:col-span-2 lg:col-span-3">
          <h1 className="text-2xl font-semibold">Send Us a Message</h1>
          <ContactForm />
        </div>
        {/* contact info section */}
        <div className="p-8 footerBg text-white flex flex-col gap-5 lg:col-span-2 rounded-b-md md:rounded-r-md md:rounded-bl-none">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-2xl">
              <span className="font-bold">CONTACT</span> INFO
            </h1>
            <p className="text-justify text-base font-medium">
              For inquiries, support, or feedback, please don't hesitate to
              contact us. Our customer service team is available to ensure your
              complete satisfaction with our products and services.
            </p>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <div className="flex gap-2 items-center">
              <FaLocationDot size={18} />
              <h1 className="text-xl font-semibold">Location</h1>
            </div>
            <p>Tripureswor-11, Kathmandu</p>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <div className="flex items-center gap-2">
              <FaPhoneAlt size={18} />
              <h1 className="text-xl font-semibold">Contact</h1>
            </div>
            <p className="flex flex-col gap-0.5">
              <span>+977 9851082447</span>
              <span>01-4101101</span>
              <span>01-4101102</span>
            </p>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <div className="flex items-center gap-2">
              <IoMdMail size={20} />
              <h1 className="text-xl font-semibold">Email</h1>
            </div>
            <p>lensclub@yahoo.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
