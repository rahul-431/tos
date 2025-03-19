import React from "react";
import Store from "../shared/Store";
import { storeList } from "@/constants";

const NearBy = () => {
  return (
    <div className="flex flex-col gap-5 py-8 sm:py-14 px-4 sm:px-8 md:px-12 lg:px-20 bg-gray-100">
      {/* titles */}
      <div className="flex flex-col gap-2 items-center justify-center">
        <h2 className="text-2xl sm:text-4xl font-semibold">Find</h2>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold">
          Outlet <span className="font-extrabold textBg w-fit">NEAR YOU</span>
        </h1>
      </div>
      {/* store list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-6">
        {storeList.map((item, index) => (
          <Store
            contact={item.contact}
            location={item.location}
            name={item.name}
            key={index}
          />
        ))}
      </div>
      {/* map */}
      <div className="w-full flex justify-center">
        <iframe
          className="w-full h-[250px] md:h-[300px] lg:h-[350px] rounded-2xl shadow-lg"
          title="Map showing our location"
          aria-label="Map of our location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.5710822544474!2d85.31157307387336!3d27.69380997619033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1900131ced9b%3A0xa0a9a1c0983262d5!2sTripureshwor%20Chowk!5e1!3m2!1sen!2snp!4v1742374935258!5m2!1sen!2snp"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default NearBy;
