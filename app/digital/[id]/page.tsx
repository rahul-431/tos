"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { id } = useParams();
  const navigate = useRouter();
  const image = "https://magnuslens.com/images/PDF%2008.png";
  const mobileImage = "https://magnuslens.com/images/mob-pdf0.png";
  const title = "Magnus Blue Filter series";
  console.log(id);

  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setBgImage(window.innerWidth >= 640 ? image : mobileImage);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [mobileImage, image]);
  return (
    <div className="flex flex-col gap-5 px-4 sm:px-8 md:px-12 lg:px-18 py-5">
      <div className="flex items-center justify-between">
        <h1 className="hidden sm:block  sm:text-xl lg:text-2xl font-bold">
          Total Optical Solution
        </h1>
        <h1 className=" sm:text-xl lg:text-2xl font-bold textBg">{title}</h1>
        <button
          onClick={() => navigate.back()}
          className="font-bold  px-2 sm:px-4 py-1 footerBg text-white rounded w-fit place-items-end cursor-pointer"
        >
          Go back
        </button>
      </div>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="h-[750px] md:h-[800px] w-full bg-center bg-cover bg-no-repeat rounded-md"
      />
    </div>
  );
};

export default Page;
