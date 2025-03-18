"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ProductCard = ({ image, title, id }: ProductCardType) => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex relative w-full sm:w-64 h-80">
        <Image
          height={0}
          width={0}
          src={image}
          sizes="100vw"
          alt="product image"
          objectFit="cover"
          className="w-full h-full object-cover rounded-lg"
        />
        <p className="absolute left-5 bottom-5 text-white text-lg font-bold tracking-wide">
          {title}
        </p>
      </div>
      <button
        onClick={() => router.push(`/digital/${id}`)}
        className="digital cursor-pointer text-black font-bold py-1.5 md:py-2 px-4 sm:px-8 rounded-full w-full sm:w-64"
      >
        Discover
      </button>
    </div>
  );
};

export default ProductCard;
