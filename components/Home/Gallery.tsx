import Image from "next/image";
import React from "react";
import { BsDashLg } from "react-icons/bs";

export default function Gallery() {
  return (
    <section>
      <div className="bg-[#0A0400] p-5 md:px-20 py-10 flex justify-between">
        <div className="flex flex-col gap-4">
          <p className="text-[#C8960A] font-aller text-xs tracking-widest flex gap-2 items-center">
            <BsDashLg />
            GALLERY
          </p>
          <h4 className="text-[#F5EDD8] font-tan text-4xl leading-tight">
            Captured in
            <br />
            <span className="text-[#C8960A]">Every Detail</span>
          </h4>
        </div>
        <p className="text-xs text-[#F5EDD866] font-aller max-w-70 text-end self-end">
          A visual journey through the craft, culture and cuisine of BiryanCo.
        </p>
      </div>
      <div className="grid grid-cols-3 place-content-stretch">
        <div className="bg-amber-200 h-60 col-span-2 relative">
          <Image
            src={"/gallery-1.png"}
            alt="about-us"
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            priority
            className="object-cover w-full"
          />
        </div>
        <div className="bg-blue-300 h-120 relative row-span-2">
          <Image
            src={"/gallery-2.jpg"}
            alt="about-us"
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            priority
            className="object-cover w-full"
          />
        </div>
        <div className="bg-red-300 h-60 relative">
          <Image
            src={"/gallery-3.jpg"}
            alt="about-us"
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            priority
            className="object-cover w-full"
          />
        </div>
        <div className="bg-gray-400 h-60 relative">
          <Image
            src={"/gallery-4.jpg"}
            alt="about-us"
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            priority
            className="object-cover w-full"
          />
        </div>
        <div className="bg-green-300 h-60 relative col-span-2">
          <Image
            src={"/gallery-5.jpg"}
            alt="about-us"
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            priority
            className="object-cover w-full"
          />
        </div>
        <div className="bg-amber-800 relative h-60">
          <Image
            src={"/gallery-6.jpg"}
            alt="about-us"
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            priority
            className="object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
}
