"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export default function Header() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const heroSection = document.getElementById("home");

    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      {
        threshold: 0.9, // adjust this (0.2–0.5 feels best)
      },
    );

    observer.observe(heroSection);

    return () => {
      if (heroSection) observer.unobserve(heroSection);
    };
  }, [pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`flex justify-between z-50 items-center ${
          menuOpen
            ? "bg-transparent"
            : isHeroVisible
            ? "bg-transparent"
            : "bg-black/90 backdrop-blur-md shadow-lg"
        } p-5 px-6 md:px-20 h-20 fixed left-0 w-full top-0 transition-all duration-300`}
      >
        <div className="flex gap-3 items-center z-50">
          <div className="relative w-8 h-11">
            <Image
              fill
              src={"/logo-1.png"}
              alt="Logo"
              priority
              sizes="(max-width:768px) 100vw, 100vw"
              className="object-cover w-full"
            />
          </div>
          <div className="relative w-40 h-9">
            <Image
              src={"/logo-2.png"}
              alt="Logo"
              fill
              priority
              sizes="(max-width:768px) 100vw, 100vw"
              className="object-cover w-full "
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 items-center">
          <Link
            href={"#home"}
            className="text-[#D4B896] hover:text-[#FAF3E3] font-dm transition-colors duration-200 relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4B896] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href={"#menu"}
            className="text-[#D4B896] hover:text-[#FAF3E3] font-dm transition-colors duration-200 relative group"
          >
            Menu
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4B896] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href={"#gallery"}
            className="text-[#D4B896] hover:text-[#FAF3E3] font-dm transition-colors duration-200 relative group"
          >
            Gallery
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4B896] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href={"#about"}
            className="text-[#D4B896] hover:text-[#FAF3E3] font-dm transition-colors duration-200 relative group"
          >
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4B896] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Desktop Call to Action */}
        <button
          onClick={() => {
            const contactEl = document.getElementById("contact");
            if (contactEl) contactEl.scrollIntoView({ behavior: "smooth" });
          }}
          className="hidden md:block bg-button px-4 py-1.5 font-aller text-white rounded-md hover:bg-opacity-95 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-md"
        >
          Contact Us
        </button>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="block md:hidden text-[#D4B896] hover:text-[#FAF3E3] transition-colors p-2 z-50 focus:outline-none cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {menuOpen ? <HiX size={26} /> : <HiOutlineMenuAlt3 size={26} />}
        </button>
      </header>

      {/* Mobile Menu Overlay Drawer */}
      <div
        className={`fixed inset-0 bg-[#0D0600] z-40 flex flex-col justify-center items-center gap-10 transition-all duration-500 ease-in-out md:hidden ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-8 items-center text-2xl font-dm">
          <Link
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="text-[#D4B896] hover:text-[#FAF3E3] transition-all duration-300 hover:scale-110"
          >
            Home
          </Link>
          <Link
            href="#menu"
            onClick={() => setMenuOpen(false)}
            className="text-[#D4B896] hover:text-[#FAF3E3] transition-all duration-300 hover:scale-110"
          >
            Menu
          </Link>
          <Link
            href="#gallery"
            onClick={() => setMenuOpen(false)}
            className="text-[#D4B896] hover:text-[#FAF3E3] transition-all duration-300 hover:scale-110"
          >
            Gallery
          </Link>
          <Link
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-[#D4B896] hover:text-[#FAF3E3] transition-all duration-300 hover:scale-110"
          >
            About Us
          </Link>
        </nav>
        <button
          onClick={() => {
            setMenuOpen(false);
            const contactEl = document.getElementById("contact");
            if (contactEl) contactEl.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-button px-6 py-2.5 font-aller text-white rounded-md hover:bg-opacity-95 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg cursor-pointer"
        >
          Book A Table
        </button>
      </div>
    </>
  );
}
