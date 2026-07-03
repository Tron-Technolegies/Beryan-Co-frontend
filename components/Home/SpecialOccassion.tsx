"use client";
import Image from "next/image";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function SpecialOccassion() {
  const revealRef = useScrollReveal();

  return (
    <section 
      ref={revealRef}
      className="px-6 py-16 md:px-20 bg-[#FAF3E3] min-h-[90vh] flex flex-col lg:flex-row gap-12 justify-center items-center overflow-hidden"
    >
      <div className="w-full lg:w-1/2 flex justify-center reveal reveal-left">
        <div className="relative w-full max-w-md sm:max-w-lg aspect-square h-auto">
          <Image
            src={"/occassion.jpg"}
            alt="special-occasions"
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            priority
            className="object-cover w-full rounded-xl shadow-xl"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-5 reveal reveal-right delay-200">
        <p className="text-[#C8960A] font-aller text-xs tracking-widest font-semibold">
          SPECIAL OCCASIONS
        </p>
        <h4 className="text-[#1A0800] font-tan text-3xl sm:text-4xl leading-tight">
          Royal Feast for Special Occasions
        </h4>
        <p className="text-[#6B4E35] font-semibold font-aller text-xs sm:text-sm leading-relaxed">
          From intimate family gatherings to grand weddings and corporate
          celebrations, our catering team brings the full Biryani Co. experience
          to your venue with ceremonial presentation and impeccable service.
        </p>
        <div className="flex flex-col gap-3.5 my-2">
          <ListItem name="Custom menu planning with our head chef" />
          <ListItem name="Live dum biryani cooking station on-site" />
          <ListItem name="Premium crockery and chafing setup included" />
          <ListItem name="Serves 20 to 2,000+ guests seamlessly" />
        </div>
        <button 
          onClick={() => {
            const contactEl = document.getElementById("contact");
            if (contactEl) contactEl.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex gap-2 items-center bg-[#1A0800] p-3 px-6 rounded-md text-[#FAF3E3] w-fit hover:bg-opacity-90 hover:scale-105 active:scale-95 transition-all duration-300 font-aller text-sm font-semibold cursor-pointer shadow-md"
        >
          Plan Your Event <FaAngleRight />
        </button>
      </div>
    </section>
  );
}

function ListItem({ name }: { name: string }) {
  return (
    <div className="flex gap-3 items-center">
      <div className="relative w-5 h-5 shrink-0">
        <Image
          src={"/tick.png"}
          alt="tick"
          fill
          sizes="(max-width:768px) 100vw, 50vw"
          priority
          className="object-cover w-full rounded-full"
        />
      </div>
      <p className="text-xs sm:text-sm text-[#6B4E35] font-semibold font-aller">{name}</p>
    </div>
  );
}
