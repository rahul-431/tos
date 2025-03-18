"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HeroData } from "@/constants";

export function HeroSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full relative mb-4 sm:mb-0"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {HeroData.map((item, index) => (
          <CarouselItem
            key={index}
            style={{
              backgroundImage: `url('${item.image}')`,
            }}
            className="relative h-[180px] sm:h-[350px] md:h-[700px] w-full bg-center bg-cover bg-no-repeat"
          ></CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-5 sm:left-12 md:left-20 lg:left-28 h-7 w-7 sm:h-10 sm:w-10 md:h-12 md:w-12 border border-white bg-transparent hover:bg-white hover:text-black text-white" />
      <CarouselNext className="absolute right-5 sm:right-12 md:right-20 lg:right-28 h-7 w-7 sm:h-10 sm:w-10 md:h-12 md:w-12 border border-white bg-transparent hover:bg-white hover:text-black text-white" />
    </Carousel>
  );
}
