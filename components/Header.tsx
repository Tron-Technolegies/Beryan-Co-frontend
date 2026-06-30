"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Header() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
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
  return (
    <header
      className={`flex justify-between items-center ${isHeroVisible ? "bg-transparent" : "bg-black"} p-5 md:px-20 h-20 fixed left-0 w-full top-0`}
    >
      <div className="flex gap-3 items-center">
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
      <nav className="flex gap-10 items-center">
        <Link href={"#home"} className={`text-[#D4B896] font-dm`}>
          Home
        </Link>
        <Link href={"#menu"} className="text-[#D4B896] font-dm">
          Menu
        </Link>
        <Link href={"#gallery"} className="text-[#D4B896] font-dm">
          Gallery
        </Link>
        <Link href={"#about"} className="text-[#D4B896] font-dm">
          About Us
        </Link>
      </nav>
      <button className="bg-button px-4 py-1.5 font-aller text-white rounded-md">
        Contact Us
      </button>
    </header>
  );
}
