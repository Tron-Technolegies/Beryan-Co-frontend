import React from "react";
import { FaAngleRight } from "react-icons/fa6";

export default function Reviews() {
  return (
    <section className="p-5 md:px-20 bg-[#0D0600] flex flex-col justify-center items-center gap-7 min-h-[70vh]">
      <p className="capitalize tracking-widest font-aller text-xs text-[#C8960A]">
        WHAT OUR GUESTS SAY
      </p>
      <p className="font-tan text-[#FAF3E3] text-4xl">Royal Reviews</p>
      <div className="flex gap-5 justify-center items-center">
        <ReviewCard
          name="Arjun Mehta"
          symbol="AM"
          who="Food Critic, Condé Nast Traveller"
          review="Biryani Co. has redefined what I believed possible in a biryani. The Hyderabadi Dum variety is a masterpiece — every grain tells a story of patience and tradition."
        />
        <ReviewCard
          name="Priya Kapoor"
          symbol="PK"
          who="Culinary Blogger, 2.1M followers"
          review="The fragrance alone is worth the visit. This is heritage cooking at its finest, served with modern hospitality that makes every guest feel like royalty."
        />
        <ReviewCard
          name="Rohan Sharma"
          symbol="RS"
          who="Food Enthusiast & Travel Writer"
          review="I have tried biryani across seven cities. Nothing compares to the soulful depth of flavour you find here. The Persian Saffron variety left me completely speechless."
        />
      </div>
      <p className="flex gap-3 text-[#C8960A] text-xs items-center">
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
    <div className="p-5 bg-[#FAF3E30A] rounded-md flex flex-col gap-4">
      <p className="text-[#C8960A] text-sm">★★★★★</p>
      <p className="text-sm text-[#D4B896] font-aller font-semibold">
        "{review}"
      </p>
      <div className="flex gap-4 items-center">
        <p className="w-10 h-10 rounded-full flex justify-center items-center bg-[#C8960A33] text-[#C8960A] text-xs">
          {symbol}
        </p>
        <div className="flex flex-col gap-2">
          <p className="text-[#FAF3E3] font-aller text-sm">{name}</p>
          <p className="text-xs text-[#8B7355] font-aller">{who}</p>
        </div>
      </div>
    </div>
  );
}
