import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-14 lg:gap-20  px-4 sm:px-8 md:px-12 lg:px-20 pt-20 pb-8"
    >
      {/* image section */}
      <div className="w-full">
        <Image
          src="https://magnuslens.com/images/why-mags1.png"
          alt="image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-contain"
        />
      </div>

      {/* why choose us section */}
      <div className="flex flex-col gap-6 ">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            Why Choose
          </h2>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold textBg w-fit">
            Magnus Lens?
          </h1>
        </div>
        <div className="flex flex-col gap-8 text-base sm:text-lg font-medium">
          <p className="text-justify">
            Magnus Lenses have been specially designed to cater to the needs of
            Indian users. These lenses have in-built blue filters which reduces
            digital eye fatigue from prolonged exposure to digital screens.
          </p>
          <p className="text-justify">
            They have an aspheric design and 75mm dia which makes them upto 40%
            thinner and flatter as compared to normal lenses. Also, the lenses
            have super hydrophobic coating i.e. dust and smudge proof. These
            lenses provide protection from harmful UV Rays and have a clear base
            colour.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
