"use client";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Reviews() {
  const revealRef = useScrollReveal();

  return (
    <section 
      ref={revealRef}
      className="px-6 py-16 md:px-20 bg-[#0D0600] flex flex-col justify-center items-center gap-7 min-h-[70vh] overflow-hidden"
    >
      <p className="reveal capitalize tracking-widest font-aller text-xs text-[#C8960A] font-semibold">
        WHAT OUR GUESTS SAY
      </p>
      <p className="reveal delay-100 font-tan text-[#FAF3E3] text-3xl sm:text-4xl">
        Royal Reviews
      </p>
      <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch w-full mt-4">
        <div className="reveal delay-200 flex flex-col h-full flex-1">
          <ReviewCard
            name="Arjun Mehta"
            symbol="AM"
            who="Food Critic, Condé Nast Traveller"
            review="Biryani Co. has redefined what I believed possible in a biryani. The Hyderabadi Dum variety is a masterpiece — every grain tells a story of patience and tradition."
          />
        </div>
        <div className="reveal delay-300 flex flex-col h-full flex-1">
          <ReviewCard
            name="Priya Kapoor"
            symbol="PK"
            who="Culinary Blogger, 2.1M followers"
            review="The fragrance alone is worth the visit. This is heritage cooking at its finest, served with modern hospitality that makes every guest feel like royalty."
          />
        </div>
        <div className="reveal delay-400 flex flex-col h-full flex-1">
          <ReviewCard
            name="Rohan Sharma"
            symbol="RS"
            who="Food Enthusiast & Travel Writer"
            review="I have tried biryani across seven cities. Nothing compares to the soulful depth of flavour you find here. The Persian Saffron variety left me completely speechless."
          />
        </div>
      </div>
      <p className="reveal delay-500 flex gap-3 text-[#C8960A] text-xs items-center hover:underline cursor-pointer">
        Read All Reviews <FaAngleRight />
      </p>
    </section>
  );
}

function ReviewCard({
  review,
  name,
  symbol,
  who,
}: {
  review: string;
  name: string;
  symbol: string;
  who: string;
}) {
  return (
    <div className="p-6 bg-[#FAF3E30A] rounded-md flex flex-col gap-4 h-full justify-between hover:bg-[#FAF3E30F] transition-colors duration-300 border border-white/5">
      <div className="flex flex-col gap-3">
        <p className="text-[#C8960A] text-sm">★★★★★</p>
        <p className="text-sm text-[#D4B896] font-aller font-medium italic leading-relaxed">
          "{review}"
        </p>
      </div>
      <div className="flex gap-4 items-center mt-4">
        <p className="w-10 h-10 rounded-full flex shrink-0 justify-center items-center bg-[#C8960A33] text-[#C8960A] text-xs font-semibold">
          {symbol}
        </p>
        <div className="flex flex-col gap-1">
          <p className="text-[#FAF3E3] font-aller text-sm font-semibold">{name}</p>
          <p className="text-[10px] sm:text-xs text-[#8B7355] font-aller">{who}</p>
        </div>
      </div>
    </div>
  );
}
