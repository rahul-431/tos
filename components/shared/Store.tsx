import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Store = ({ name, location, contact }: StoreCardType) => {
  return (
    <div className="bg-gray-50 flex flex-col gap-3 p-4 rounded-md shadow shadow-yellow-500 ">
      <h1 className="text-xl sm:text-2xl font-bold">{name}</h1>
      <div className="flex gap-2 items-center">
        <FaLocationDot size={20} className="text-[#03305A]" />
        <span>{location}</span>
      </div>
      <div className="flex gap-2 items-center">
        <FaPhoneAlt size={18} className="text-[#03305A]" />
        <span>{contact}</span>
      </div>
    </div>
  );
};

export default Store;
