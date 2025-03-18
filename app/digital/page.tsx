"use client";
import React, { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HeroData } from "@/constants";
import { useRouter } from "next/navigation";
import Autoplay from "embla-carousel-autoplay";

const page = () => {
  const plugin = useRef(Autoplay({ delay: 3000 }));
  const navigate = useRouter();
  return (
    <div className="flex flex-col gap-2 px-4 sm:px-8 md:px-12 lg:px-18 py-5">
      <div className="flex items-center justify-between">
        <h1 className=" sm:text-xl lg:text-2xl font-bold">
          Total Optical Solution
        </h1>
        <h1 className="hidden sm:block text-black font-semibold py-0.5 sm:py-1.5 md:py-2 px-2 md:px-4 sm:px-8 rounded-full digital text-xs sm:text-sm md:text-base">
          Digital Brochure
        </h1>
        <button
          onClick={() => navigate.back()}
          className="font-bold  px-2 sm:px-4 py-1 footerBg text-white rounded w-fit place-items-end cursor-pointer"
        >
          Go back
        </button>
      </div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full relative mb-4 sm:mb-0 py-2"
      >
        <CarouselContent>
          {HeroData.map((item, index) => (
            <CarouselItem
              key={index}
              style={{
                backgroundImage: `url('${item.image}')`,
              }}
              className=" h-[200px] sm:h-[350px] md:h-[700px] w-full bg-center bg-cover bg-no-repeat"
            ></CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-2 sm:-left-6 md:-left-10 lg:-left-12 h-8 w-8 text-[#03305A]  hover:text-white hover:bg-[#03305A] border border-[#03305A]" />
        <CarouselNext className="absolute -right-2 sm:right-0 md:-right-5 lg:-right-10 h-8 w-8  text-[#03305A]  hover:text-white hover:bg-[#03305A] border border-[#03305A]" />
      </Carousel>
    </div>
  );
};

export default page;
