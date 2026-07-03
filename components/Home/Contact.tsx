"use client";
import React from "react";
import { BsDashLg } from "react-icons/bs";
import { IoMdCall } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contact() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="contact"
      ref={revealRef}
      className="px-6 py-16 md:px-20 min-h-[70vh] bg-[#FFFDF7] flex flex-col lg:flex-row gap-12 justify-between items-center overflow-hidden"
    >
      <div className="w-full lg:w-1/2 flex flex-col gap-7 reveal reveal-left">
        <p className="flex gap-2 items-center text-xs font-aller tracking-widest text-[#C8960A] font-semibold">
          <BsDashLg />
          RESERVE YOUR TABLE
        </p>
        <p className="text-[#0D0600] text-3xl sm:text-4xl leading-tight font-tan">
          We'd Love to<br /> Serve You
        </p>
        <p className="font-aller text-[#5A3A1A] max-w-md font-semibold text-xs sm:text-sm leading-relaxed">
          Reserve your table and let us craft an unforgettable royal dining
          experience for intimate evenings or grand celebrations.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start sm:items-center mt-2">
          <div className="flex gap-3 items-center">
            <div className="p-2.5 bg-[#C8960A1A] rounded-full text-[#C8960A]">
              <IoMdCall size={18} />
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-xs font-bold text-[#0D0600] font-aller">Call Us</p>
              <a href="tel:+918001234567" className="text-xs text-[#8B7050] hover:text-[#C8960A] transition-colors">+91 800 123 4567</a>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="p-2.5 bg-[#C8960A1A] rounded-full text-[#C8960A]">
              <IoLocation size={18} />
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-xs font-bold text-[#0D0600] font-aller">Find Us</p>
              <p className="text-xs text-[#8B7050]">
                Hyderabad, Telangana, Bangalore
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <form 
        onSubmit={(e) => e.preventDefault()}
        className="w-full lg:w-1/2 p-6 sm:p-8 flex flex-col gap-4 bg-[#F6F2E8] border border-[#C8960A20] rounded-lg shadow-lg reveal reveal-right delay-200"
      >
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-[#0D0600] font-aller font-semibold">
            Your Name
          </label>
          <input
            type="text"
            required
            placeholder="Enter your name"
            className="p-2.5 bg-[#FFFDF7] border border-[#C8960A30] focus:border-[#C8960A] focus:ring-1 focus:ring-[#C8960A] outline-none rounded-md text-sm transition-all"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-[#0D0600] font-aller font-semibold">
            Location
          </label>
          <input
            type="text"
            required
            placeholder="Preferred outlet location"
            className="p-2.5 bg-[#FFFDF7] border border-[#C8960A30] focus:border-[#C8960A] focus:ring-1 focus:ring-[#C8960A] outline-none rounded-md text-sm transition-all"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center w-full">
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-xs text-[#0D0600] font-aller font-semibold">
              Date
            </label>
            <input
              type="date"
              required
              className="p-2.5 bg-[#FFFDF7] border border-[#C8960A30] focus:border-[#C8960A] focus:ring-1 focus:ring-[#C8960A] outline-none rounded-md text-sm transition-all w-full"
            />
          </div>
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-xs text-[#0D0600] font-aller font-semibold">
              Guests
            </label>
            <input
              type="number"
              required
              min="1"
              placeholder="Number of guests"
              className="p-2.5 bg-[#FFFDF7] border border-[#C8960A30] focus:border-[#C8960A] focus:ring-1 focus:ring-[#C8960A] outline-none rounded-md text-sm transition-all w-full"
            />
          </div>
        </div>
        <button 
          type="submit"
          className="p-3 px-6 bg-[#0D0600] text-[#F5EDD8] rounded-md font-aller font-bold text-sm hover:bg-[#1a0f05] active:scale-95 hover:shadow-md transition-all duration-200 cursor-pointer mt-2"
        >
          Reserve a Table
        </button>
      </form>
    </section>
  );
}
