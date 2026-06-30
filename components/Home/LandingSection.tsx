import React from "react";
import { BsDashLg } from "react-icons/bs";

export default function LandingSection() {
  return (
    <section
      id="home"
      className="min-h-screen bg-blue-300 bg-cover bg-bottom flex flex-col justify-center p-5 md:px-20"
      style={{ backgroundImage: "url('/landing.png')" }}
    >
      <div className="flex flex-col gap-4">
        <p className="flex gap-2 items-center mb-7 text-[#C8960A] font-aller text-sm font-bold tracking-widest">
          <BsDashLg />A LEGACY OF ROYAL FLAVOUR
        </p>
        <h1 className="font-tan text-[#FAF3E3] text-6xl">Royal Biryani</h1>
        <h2 className="font-tan text-[#BA7837] text-6xl">Experience</h2>
        <p className="text-[#C8B99A] font-aller max-w-100 mt-5 tracking-wider text-sm">
          Inspired by Mughal heritage, perfected with artisanal spices and
          slow-cooked in tradition since 1847. Each handi holds a century of
          royal flavour.
        </p>
        <button className="bg-button px-4 py-2 text-white w-fit rounded-sm text-sm">
          Explore Our Menu
        </button>
      </div>
    </section>
  );
}
