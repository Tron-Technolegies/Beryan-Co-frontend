import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCall, IoLocation, IoMail } from "react-icons/io5";

export default function Footer() {
  const date = new Date();
  return (
    <footer className="p-5 py-10 md:px-20 bg-[#0D0600] text-[#8B7355] font-dm">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
        <div className="flex flex-col gap-5">
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
          <p className="text-xs max-w-70">
            A legacy of authentic dum biryani, rooted in Mughal culinary
            tradition since 1847.
          </p>
          <div className="flex gap-3 items-center">
            <a href="" className="relative w-9 h-9">
              <Image
                src={"/twitter.png"}
                alt="Logo"
                fill
                priority
                sizes="(max-width:768px) 100vw, 100vw"
                className="object-cover w-full "
              />
            </a>
            <a href="" className="relative w-9 h-9">
              <Image
                src={"/fb.png"}
                alt="Logo"
                fill
                priority
                sizes="(max-width:768px) 100vw, 100vw"
                className="object-cover w-full "
              />
            </a>
            <a href="" className="relative w-9 h-9">
              <Image
                src={"/insta.png"}
                alt="Logo"
                fill
                priority
                sizes="(max-width:768px) 100vw, 100vw"
                className="object-cover w-full "
              />
            </a>
          </div>
        </div>
        <div>
          <p className="text-sm text-[#FAF3E3] mb-5">QUICK LINKS</p>
          <div className="text-xs flex flex-col gap-3 ">
            <Link href={"#home"}>Home</Link>
            <Link href={"#menu"}>Menu</Link>
            <Link href={"#gallery"}>Gallery</Link>
            <Link href={"#about"}>About Us</Link>
            <Link href={"#contact"}>Contact</Link>
          </div>
        </div>
        <div>
          <p className="text-sm text-[#FAF3E3] mb-5">Our Menu</p>
          <div className="text-xs flex flex-col gap-3 ">
            <p>Hyderabadi Dum</p>
            <p>Lucknowi Nawabi</p>
            <p>Chicken Tikka</p>
            <p>Ambur Dum</p>
            <p>Persian Saffron</p>
            <p>Vegetarian</p>
          </div>
        </div>
        <div>
          <p className="text-sm text-[#FAF3E3] mb-5">Visit Us</p>
          <div className="text-xs flex flex-col gap-3 ">
            <p className="flex gap-2 items-center">
              <IoLocation />
              12, Royal Heritage Lane, Hyderabad, Telangana 500001
            </p>
            <p className="flex gap-2 items-center">
              <IoCall />
              +91 800 123 4567
            </p>
            <p className="flex gap-2 items-center">
              <IoMail />
              hello@biryanico.in
            </p>
          </div>
        </div>
      </div>
      <div className="pt-10 border-t border-[#4A3020]">
        <p className="text-xs text-[#4A3020]">
          © {date.getFullYear()} BeryanCo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
