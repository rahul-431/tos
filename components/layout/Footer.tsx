import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="w-full footerBg px-4 sm:px-8 md:px-12 lg:px-20 py-12 flex sm:flex-row flex-col justify-between items-center gap-10 text-white">
      <div className="flex flex-col items-start">
        <div className="w-36 h-32">
          <Image
            src="/logo1.png"
            alt="logo"
            height={100}
            width={100}
            className="object-contain w-full h-full rounded-b-2xl"
            priority
          />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-3xl font-sans tracking-wider">
            Lens Club Pvt. Ltd.
          </h1>
          <p className="flex items-center space-x-2 text-lg font-medium">
            <span className="text-2xl">
              <IoMail />
            </span>
            <span>sales@tos.com</span>
          </p>
          <p className="flex flex-col text-lg">
            <span className="font-semibold">Corporate Office</span>
            <span className="font-medium flex space-x-2 items-center">
              <span>
                <FaLocationDot />
              </span>
              <span>khasibazar, kathmandu-2, nepal</span>
            </span>
          </p>
          <p className="flex flex-col font-semibold text-lg">
            <span className="font-semibold">Sales Office</span>
            <span className="font-medium flex space-x-2 items-center">
              <span>
                <FaLocationDot />
              </span>
              <span>Kumarigalli-2, kathmandu, nepal</span>
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <div className="md:w-[250px] md:h-[250px] w-full h-80">
          <Image
            src="/qr1.png"
            alt="Scan Me"
            height={0}
            width={0}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex gap-5 items-center">
          <Link
            href={"#"}
            className="text-2xl p-2 rounded-full border-white border hover:bg-white hover:text-[#03305A]"
          >
            <FaTiktok />
          </Link>
          <Link
            href={"#"}
            className="text-2xl p-2 rounded-full border-white border hover:bg-white hover:text-[#03305A]"
          >
            <IoLogoWhatsapp />
          </Link>
          <Link
            href={"#"}
            className="text-2xl p-2 rounded-full border-white border hover:bg-white hover:text-[#03305A]"
          >
            <FaFacebookF />
          </Link>
          <Link
            href={"#"}
            className="text-2xl p-2 rounded-full border-white border hover:bg-white hover:text-[#03305A]"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
