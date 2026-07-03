"use client";
import React from "react";
import { BsDashLg } from "react-icons/bs";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function OurPhilosophy() {
  const revealRef = useScrollReveal();

  return (
    <section 
      ref={revealRef}
      className="px-6 py-20 md:px-20 bg-[#F5EDD8] min-h-[60vh] flex flex-col gap-5 justify-center items-center overflow-hidden"
    >
      <p className="reveal text-[#C8960A] font-aller tracking-widest text-xs font-bold">
        OUR PHILOSOPHY
      </p>
      <div className="reveal delay-100 flex flex-col items-center">
        <h3 className="text-[#0A0400] font-tan text-3xl sm:text-4xl text-center">
          "We do not cook biryani.
        </h3>
        <h3 className="text-[#C8960A] font-tan text-3xl sm:text-4xl text-center">
          We keep a tradition alive."
        </h3>
      </div>
      <div className="reveal delay-200">
        <BsDashLg className="text-[#C8960A]" size={40} />
      </div>
      <p className="reveal delay-300 text-[#5A3A1A] font-aller max-w-2xl text-xs sm:text-sm font-semibold text-center leading-relaxed">
        Every handi sealed at Biryani Co. carries the weight of 177 years of
        culinary heritage—the same spices, the same technique, the same
        reverence for the craft that our founders brought from the royal
        kitchens of Hyderabad.
      </p>
    </section>
  );
}
