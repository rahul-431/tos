import React from "react";
import Store from "../shared/Store";

const NearBy = () => {
  const storeList: StoreCardType[] = [
    {
      name: "Raja Opticals",
      location: "Putalisadak, kathmandu",
      contact: "9865410898",
    },
    {
      name: "Shree Optical",
      location: "Prithvi Chowk, pokhara",
      contact: "9865410890",
    },
    {
      name: "M.H. Opticals",
      location: "School Road, Hetauda",
      contact: "9865410898",
    },
  ];
  return (
    <div className="flex flex-col gap-5 py-8 sm:py-14 px-4 sm:px-8 md:px-12 lg:px-20 bg-gray-100">
      {/* titles */}
      <div className="flex flex-col gap-2 items-center justify-center">
        <h2 className="text-4xl font-semibold">Find</h2>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4206.777660175356!2d87.14940915450742!3d26.609492589089264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef123b6c15db5d%3A0x8c9cae14fd19a5fb!2sJanak%20Smriti%20Secondary%20School!5e0!3m2!1sen!2snp!4v1740983035192!5m2!1sen!2snp"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default NearBy;
