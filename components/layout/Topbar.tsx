import Image from "next/image";
import Link from "next/link";
import React from "react";

const Topbar = () => {
  return (
    <div className="absolute top-5 flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20">
      <Link className="w-16 h-16 sm:w-20 sm:h-20 " href="#home">
        <Image
          src="/logo.png"
          alt="logo"
          height={100}
          width={100}
          className="object-contain w-full h-full rounded-b-2xl"
        />
      </Link>
      <Link
        href="/"
        className="text-black font-semibold py-1.5 md:py-2 px-4 sm:px-8 rounded-full digital"
      >
        Digital Brochure
      </Link>
    </div>
  );
};

export default Topbar;
