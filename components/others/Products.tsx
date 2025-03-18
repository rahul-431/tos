"use client";
import { productList } from "@/constants";
import ProductCard from "../shared/ProductCard";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";

const Products = () => {
  const plugin = useRef(Autoplay({ delay: 1500 }));
  return (
    <div
      id="products"
      className="flex flex-col gap-5 px-4 sm:px-8 md:px-12 lg:px-28 pt-18 md:pt-20 pb-14"
    >
      <div className="flex flex-col gap-3 items-center justify-center font-semibold">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl">
          Our <span className="font-extrabold textBg w-fit">Products</span>
        </h1>
      </div>
      <h2 className="font-extrabold text-2xl text-center">Single Vision</h2>
      <Carousel
        plugins={[plugin.current]}
        // onMouseEnter={plugin.current.stop}
        // onMouseLeave={plugin.current.reset}
        className="w-full relative mb-4 sm:mb-0"
      >
        <CarouselContent>
          {productList.map((item, index) => (
            <CarouselItem
              key={index}
              className=" sm:basis-1/2 md:basis-1/3 lg:basis-1/4 gap-2"
            >
              <ProductCard
                key={index}
                id={item.id}
                image={item.image}
                title={item.title}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-2 sm:-left-6 md:-left-10 lg:-left-10 h-8 w-8 text-[#03305A]  hover:text-white hover:bg-[#03305A] border border-[#03305A]" />
        <CarouselNext className="absolute -right-2 sm:right-0 md:-right-5 lg:-right-8 h-8 w-8  text-[#03305A]  hover:text-white hover:bg-[#03305A] border border-[#03305A]" />
      </Carousel>
    </div>
  );
};

export default Products;
