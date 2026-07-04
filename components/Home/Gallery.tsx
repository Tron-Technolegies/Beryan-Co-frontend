"use client";
import Image from "next/image";
import React from "react";
import { BsDashLg } from "react-icons/bs";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Gallery() {
  const revealRef = useScrollReveal();

  return (
    <section id="gallery" ref={revealRef}>
      <div className="bg-[#0A0400] px-6 py-12 md:px-20 flex flex-col md:flex-row justify-between gap-4 items-start md:items-end reveal reveal-fade">
        <div className="flex flex-col gap-4">
          <p className="text-[#C8960A] font-aller text-xs tracking-widest flex gap-2 items-center">
            <BsDashLg />
            GALLERY
          </p>
          <h4 className="text-[#F5EDD8] font-tan text-3xl sm:text-4xl leading-tight">
            Captured in <span className="text-[#C8960A]">Every Detail</span>
          </h4>
        </div>
        <p className="text-xs text-[#F5EDD866] font-aller max-w-xs mt-2 md:mt-0 md:text-end">
          A visual journey through the craft, culture and cuisine of BiryanCo.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-content-stretch reveal reveal-scale delay-200">
        <div className="h-60 sm:col-span-2 relative overflow-hidden group">
          <Image
            src={"/gallery-1.jpg"}
            alt="gallery-image"
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            priority
            className="object-cover w-full transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
        </div>
        <div className="h-60 sm:h-120 relative sm:row-span-2 overflow-hidden group">
          <Image
            src={"/gallery-2.jpg"}
            alt="gallery-image"
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            priority
            className="object-cover w-full transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
        </div>
        <div className="h-60 relative overflow-hidden group">
          <Image
            src={"/gallery-3.jpg"}
            alt="gallery-image"
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            priority
            className="object-cover w-full transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
        </div>
        <div className="h-60 relative overflow-hidden group">
          <Image
            src={"/gallery-4.jpg"}
            alt="gallery-image"
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            priority
            className="object-cover w-full transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
        </div>
        <div className="h-60 sm:col-span-2 relative overflow-hidden group">
          <Image
            src={"/gallery-5.jpg"}
            alt="gallery-image"
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            priority
            className="object-cover w-full transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
        </div>
        <div className="h-60 relative overflow-hidden group">
          <Image
            src={"/gallery-6.jpg"}
            alt="gallery-image"
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            priority
            className="object-cover w-full transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
}
