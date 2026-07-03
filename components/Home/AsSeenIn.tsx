"use client";
import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AsSeenIn() {
  const revealRef = useScrollReveal();

  return (
    <section 
      ref={revealRef}
      className="p-6 py-12 md:px-20 bg-[#FAF3E3] flex flex-col gap-6 items-center overflow-hidden"
    >
      <p className="reveal text-xs font-aller tracking-widest text-[#8B7355] font-semibold">
        AS SEEN IN
      </p>
      <div className="reveal delay-200 flex flex-wrap gap-x-10 gap-y-4 justify-center items-center text-[#1A080080] font-tan text-sm sm:text-base md:text-lg">
        <p className="hover:text-[#1A0800] transition-colors duration-300">Times of India</p>
        <p className="hover:text-[#1A0800] transition-colors duration-300">Hindustan Times</p>
        <p className="hover:text-[#1A0800] transition-colors duration-300">Zomato</p>
        <p className="hover:text-[#1A0800] transition-colors duration-300">Travel & Leisure</p>
        <p className="hover:text-[#1A0800] transition-colors duration-300">GoodFood</p>
      </div>
    </section>
  );
}
