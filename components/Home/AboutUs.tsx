import Image from "next/image";
import React from "react";
import { BsDashLg } from "react-icons/bs";
import AboutUsCard from "./AboutUsCard";

export default function AboutUs() {
  return (
    <div className="bg-[#FAF5E9] p-5 md:px-20 flex justify-between items-center min-h-screen w-full">
      <div className="w-full flex flex-col gap-5">
        <p className="text-xs tracking-widest font-dm text-[#C8960A] font-semibold">
          ABOUT US
        </p>
        <p className="text-4xl font-tan text-[#1A0800] max-w-100 leading-tight">
          Where Tradition Meets Royalty
        </p>
        <p className="font-aller text-[#6B4E35] font-semibold max-w-150 text-sm">
          Born from the royal kitchens of Hyderabad, our biryani carries
          centuries of Mughal culinary wisdom in every grain. We honour the
          original dum cooking technique sealed vessels, slow flames, and time
          because greatness cannot be hurried.
        </p>
        <p className="font-dm text-[#6B4E35] text-sm max-w-150">
          Each pot is a symphony of hand-ground spices, premium aged basmati,
          and the finest meat sourced daily. It is not just food it is a
          cultural inheritance served on your plate.
        </p>
        <p className="text-[#C8960A] font-tan flex gap-3 items-center">
          <BsDashLg /> BeryanCo.
        </p>
      </div>
      <div className="w-full">
        <div className="relative w-120 h-140">
          <Image
            src={"/about-us.png"}
            alt="about-us"
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            priority
            className="object-cover w-full rounded-xl"
          />
          <AboutUsCard />
        </div>
      </div>
    </div>
  );
}
