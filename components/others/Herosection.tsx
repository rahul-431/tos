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
    <Carousel
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
            className=" h-[180px] sm:h-[350px] md:h-[700px] w-full bg-center bg-cover bg-no-repeat"
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
  );
}
