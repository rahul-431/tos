"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { HeroData } from "@/constants";
import Topbar from "../layout/Topbar";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState<number>(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  const plugin = React.useRef(Autoplay({ delay: 4000, jump: true }));
  return (
    <div className="relative">
      {/* <div className="absolute top-5 flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20"> */}
      <Link
        className="absolute z-40 bg-white left-4 sm:left-8 md:left-12 lg:left-20 top-0 w-12 h-8 sm:w-20 sm:h-12 lg:w-40 lg:h-20 rounded-b-md md:rounded-b-2xl "
        href="#home"
      >
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
        className="absolute z-40 right-4 sm:right-8 md:right-12 lg:right-20 top-1 md:top-4 text-black font-semibold py-0.5 sm:py-1.5 md:py-2 px-2 md:px-4 sm:px-8 rounded-lg md:rounded-full digital text-xs sm:text-sm md:text-base"
      >
        Digital Brochure
      </Link>
      {/* </div> */}
      <Carousel
        id="home"
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full relative mb-4 sm:mb-0"
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
        <div className="absolute text-red-600 flex gap-2 bottom-5 left-[35%] sm:left-[42.5%]">
          {Array.from({ length: count }).map((_, index) => {
            console.log(index, current);
            return (
              <div
                key={index}
                className={`${
                  index + 1 === current ? "footerBg" : "bg-white"
                } h-1 w-4 md:h-2 md:w-10 rounded-md md:rounded-2xl`}
              />
            );
          })}
        </div>
      </Carousel>
    </div>
  );
}
