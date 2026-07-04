"use client";
import React, { useEffect, useState } from "react";
import { BsDashLg } from "react-icons/bs";

export default function LandingSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Small delay to trigger smooth transition after render
    const timer = setTimeout(() => setAnimate(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-[#0D0600] bg-cover md:bg-center bg-bottom-right flex flex-col justify-center px-6 md:px-20 py-28 md:py-0 relative overflow-hidden"
      style={{ backgroundImage: "url('/landing.jpg')" }}
    >
      {/* Overlay to ensure high contrast and text readability on all devices */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div
        className={`flex flex-col gap-4 z-10 transition-all duration-1000 ease-out transform ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p
          className={`flex gap-2 items-center mb-2 text-[#C8960A] font-aller text-xs sm:text-sm font-bold tracking-widest transition-all duration-1000 delay-100 ${
            animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
          }`}
        >
          <BsDashLg />A LEGACY OF ROYAL FLAVOUR
        </p>
        <h1 className="font-tan text-[#FAF3E3] text-5xl sm:text-6xl md:text-7xl leading-tight">
          Royal Biryani
        </h1>
        <h2 className="font-tan text-[#BA7837] text-5xl sm:text-6xl md:text-7xl leading-none">
          Experience
        </h2>
        <p className="text-[#C8B99A] font-aller max-w-md mt-5 tracking-wider text-xs sm:text-sm leading-relaxed">
          Inspired by Mughal heritage, perfected with artisanal spices and
          slow-cooked in tradition since 1847. Each handi holds a century of
          royal flavour.
        </p>
        <button
          onClick={() => {
            const menuEl = document.getElementById("menu");
            if (menuEl) menuEl.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-button px-6 py-2.5 text-white w-fit rounded-sm text-sm font-aller font-semibold tracking-wider hover:scale-105 active:scale-95 hover:shadow-xl transition-all duration-300 cursor-pointer mt-5"
        >
          Explore Our Menu
        </button>
      </div>
    </section>
  );
}
