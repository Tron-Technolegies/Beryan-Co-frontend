import React from "react";
import { BsDashLg } from "react-icons/bs";

export default function OurPhilosophy() {
  return (
    <section className="p-5 md:px-20 bg-[#F5EDD8] min-h-[70vh] flex flex-col gap-5 justify-center items-center">
      <p className="text-[#C8960A] font-aller text-xs font-bold">
        OUR PHILOSOPHY
      </p>
      <h3 className="text-[#0A0400] font-tan text-4xl">
        "We do not cook biryani.
      </h3>
      <h3 className="text-[#C8960A] font-tan text-4xl">
        We keep a tradition alive."
      </h3>
      <BsDashLg className="text-[#C8960A]" size={40} />
      <p className="text-[#5A3A1A] font-aller max-w-150 text-sm font-semibold text-center">
        Every handi sealed at Biryani Co. carries the weight of 177 years of
        culinary heritage the same spices, the same technique, the same
        reverence for the craft that our founders brought from the royal
        kitchens of Hyderabad.
      </p>
    </section>
  );
}
