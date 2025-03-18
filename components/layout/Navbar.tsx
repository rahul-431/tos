import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaBarsStaggered } from "react-icons/fa6";
import { navList } from "@/constants";

const Navbar = () => {
  return (
    <div
      id="home"
      className="sticky top-0 z-50 flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 bg-white"
    >
      <Link className="w-16 h-16 sm:w-20 sm:h-20 " href="#home">
        <Image
          src="/logo.png"
          alt=""
          height={100}
          width={100}
          className="object-contain w-full h-full rounded-b-2xl"
        />
      </Link>

      <div className="flex gap-5 text-black items-center">
        <div className="md:flex hidden gap-8 items-center">
          {navList.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="text-[#03305A]  hover:text-[#07447D] font-semibold"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/digital"
          className="text-black font-semibold py-1.5 md:py-2 px-4 sm:px-8 rounded-full digital"
        >
          Digital Brochure
        </Link>
        <Sheet>
          <SheetTrigger className="cursor-pointer md:hidden text-xl">
            <FaBarsStaggered />
          </SheetTrigger>
          <SheetContent className="max-w-44 bg-[#03305A]">
            <SheetHeader>
              <SheetTitle className="text-white">
                Total Optical Solution
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-2 py-2 px-4">
              {navList.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className="text-white font-semibold"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
