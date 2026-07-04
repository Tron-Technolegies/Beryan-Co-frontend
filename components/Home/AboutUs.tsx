"use client";
import Image from "next/image";
import React from "react";
import { BsDashLg } from "react-icons/bs";
import AboutUsCard from "./AboutUsCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutUs() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="about"
      ref={revealRef}
      className="bg-[#FAF5E9] px-6 py-16 md:px-20 flex flex-col lg:flex-row justify-between items-center gap-12 min-h-[90vh] w-full overflow-hidden"
    >
      <div className="w-full lg:w-1/2 flex flex-col gap-5 reveal reveal-left">
        <p className="text-xs tracking-widest font-dm text-[#C8960A] font-semibold">
          ABOUT US
        </p>
        <p className="text-3xl sm:text-4xl font-tan text-[#1A0800] max-w-md leading-tight">
          Where Tradition Meets Royalty
        </p>
        <p className="font-aller text-[#6B4E35] font-semibold max-w-xl text-sm leading-relaxed">
          Born from the royal kitchens of Hyderabad, our biryani carries
          centuries of Mughal culinary wisdom in every grain. We honour the
          original dum cooking technique—sealed vessels, slow flames, and
          time—because greatness cannot be hurried.
        </p>
        <p className="font-dm text-[#6B4E35] text-sm max-w-xl leading-relaxed">
          Each pot is a symphony of hand-ground spices, premium aged basmati,
          and the finest meat sourced daily. It is not just food—it is a
          cultural inheritance served on your plate.
        </p>
        <p className="text-[#C8960A] font-tan flex gap-3 items-center mt-2">
          <BsDashLg /> BeryanCo.
        </p>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center reveal reveal-right delay-200">
        <div className="relative w-full max-w-md sm:max-w-lg aspect-5/6 h-auto">
          <Image
            src={"/about-us.jpg"}
            alt="about-us"
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            priority
            className="object-cover w-full rounded-xl shadow-xl"
          />
          <AboutUsCard />
        </div>
      </div>
    </section>
  );
}
