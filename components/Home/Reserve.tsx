import React from "react";
import { IoMdCall } from "react-icons/io";

export default function Reserve() {
  return (
    <section
      className="p-5 md:px-20 min-h-[70vh] bg-cover bg-center flex flex-col relative"
      style={{ backgroundImage: "url('/reserve.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#0D0600E5] opacity-90"></div>
      <div className=" flex flex-col gap-5 items-center my-auto">
        <p className="z-30 capitalizeize text-xs font-aller tracking-widest text-[#C8960A]">
          RESERVE YOUR TABLE
        </p>
        <h4 className="text-[#FAF3E3] font-tan text-4xl leading-tight z-30 text-center">
          Let Us Serve You an
          <br /> <span className="text-[#C8960A]">Unforgettable Meal</span>
        </h4>
        <p className="font-aller text-[#C8B99A] text-sm font-semibold z-30 max-w-130 text-center">
          Whether dining in or hosting a grand occasion, every experience at
          Biryani Co. is crafted with love, tradition, and heritage.
        </p>
        <div className="z-30 flex gap-5 items-center">
          <button className="bg-[#C8960A] py-2 px-4 rounded-sm text-[#0D0600]">
            Book A Table
          </button>
          <button className="bg-transparent p-2 px-4 flex gap-2 items-center rounded-sm text-[#FAF3E3] border border-[#FAF3E340]">
            <IoMdCall /> Call Us Now
          </button>
        </div>
      </div>
    </section>
  );
}
