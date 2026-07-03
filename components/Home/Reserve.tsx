"use client";
import React from "react";
import { IoMdCall } from "react-icons/io";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Reserve() {
  const revealRef = useScrollReveal();

  return (
    <section
      ref={revealRef}
      className="px-6 py-16 md:px-20 min-h-[60vh] bg-cover bg-center parallax-bg flex flex-col relative overflow-hidden"
      style={{ backgroundImage: "url('/reserve.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#0D0600E5] opacity-90 z-0"></div>
      
      <div className="flex flex-col gap-5 items-center my-auto z-10 text-center reveal reveal-scale">
        <p className="capitalize text-xs font-aller tracking-widest text-[#C8960A] font-semibold">
          RESERVE YOUR TABLE
        </p>
        <h4 className="text-[#FAF3E3] font-tan text-3xl sm:text-4xl leading-tight">
          Let Us Serve You an<br />
          <span className="text-[#C8960A]">Unforgettable Meal</span>
        </h4>
        <p className="font-aller text-[#C8B99A] text-xs sm:text-sm font-semibold max-w-xl leading-relaxed">
          Whether dining in or hosting a grand occasion, every experience at
          Biryani Co. is crafted with love, tradition, and heritage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center mt-4">
          <button 
            onClick={() => {
              const contactEl = document.getElementById("contact");
              if (contactEl) contactEl.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[#C8960A] py-3 px-6 rounded-sm text-[#0D0600] font-aller text-sm font-bold hover:bg-[#b08307] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-md w-full sm:w-auto"
          >
            Book A Table
          </button>
          <a
            href="tel:+918001234567"
            className="bg-transparent p-3 px-6 flex gap-2 items-center justify-center rounded-sm text-[#FAF3E3] border border-[#FAF3E340] font-aller text-sm font-semibold hover:bg-white/5 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer w-full sm:w-auto"
          >
            <IoMdCall /> Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
