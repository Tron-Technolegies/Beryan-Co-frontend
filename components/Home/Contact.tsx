import React from "react";
import { BsDashLg } from "react-icons/bs";
import { IoMdCall } from "react-icons/io";
import { IoLocation } from "react-icons/io5";

export default function Contact() {
  return (
    <section className="p-5 md:px-20 min-h-[70vh] bg-[#FFFDF7] flex gap-4 justify-between items-center">
      <div className="w-full flex flex-col gap-7 ">
        <p className="flex gap-2 items-center text-xs font-aller tracking-widest text-[#C8960A]">
          <BsDashLg />
          RESERVE YOUR TABLE
        </p>
        <p className="text-[#0D0600] text-4xl leading-tight font-tan">
          We'd Love to<br></br> Serve You
        </p>
        <p className="font-aller text-[#5A3A1A] max-w-130 font-semibold text-sm">
          Reserve your table and let us craft an unforgettable royal dining
          experience for intimate evenings or grand celebrations.
        </p>
        <div className="flex gap-7 items-center">
          <div className="flex gap-3 items-center">
            <IoMdCall className="text-[#C8960A]" />
            <div className="flex flex-col gap-1">
              <p className="text-xs font-bold text-[#0D0600]">Call Us</p>
              <p className="text-xs text-[#8B7050]">+91 800 123 4567</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <IoLocation className="text-[#C8960A]" />
            <div className="flex flex-col gap-1">
              <p className="text-xs font-bold text-[#0D0600]">Find Us</p>
              <p className="text-xs text-[#8B7050]">
                Hyderabad, Telangana, Bangalore
              </p>
            </div>
          </div>
        </div>
      </div>
      <form className="w-full p-5 flex flex-col gap-4 bg-[#F6F2E8] border border-[#C8960A20] rounded-md">
        <div className="flex flex-col gap-2 ">
          <label className="text-xs text-[#0D0600] font-aller font-semibold">
            Your Name
          </label>
          <input
            type="text"
            required
            className="p-2 bg-[#FFFDF7] border border-[#C8960A30] outline-none rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="text-xs text-[#0D0600] font-aller font-semibold">
            Location
          </label>
          <input
            type="text"
            required
            className="p-2 bg-[#FFFDF7] border border-[#C8960A30] outline-none rounded-sm"
          />
        </div>
        <div className="flex gap-3 items-center w-full">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-xs text-[#0D0600] font-aller font-semibold">
              Date
            </label>
            <input
              type="date"
              required
              className="p-2 bg-[#FFFDF7] border border-[#C8960A30] outline-none rounded-sm"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-xs text-[#0D0600] font-aller font-semibold">
              Guests
            </label>
            <input
              type="number"
              required
              className="p-2 bg-[#FFFDF7] border border-[#C8960A30] outline-none rounded-sm"
            />
          </div>
        </div>
        <button className="p-2 px-4 bg-[#0D0600] text-[#F5EDD8] rounded-md">
          Reserve a Table
        </button>
      </form>
    </section>
  );
}
