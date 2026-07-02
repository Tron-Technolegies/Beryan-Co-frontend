import Image from "next/image";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";

export default function SpecialOccassion() {
  return (
    <section className="p-5 md:px-20 bg-[#FAF3E3] min-h-[90vh] flex justify-center items-center">
      <div className="w-full">
        <div className="relative w-120 h-120">
          <Image
            src={"/occassion.jpg"}
            alt="about-us"
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            priority
            className="object-cover w-full rounded-xl"
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-5">
        <p className="text-[#C8960A] font-aller text-xs tracking-widest">
          SPECIAL OCCASSIONS
        </p>
        <h4 className="text-[#1A0800] font-tan text-4xl leading-tight">
          Royal Feast for Special Occasions
        </h4>
        <p className="text-[#6B4E35] font-semibold font-aller">
          From intimate family gatherings to grand weddings and corporate
          celebrations, our catering team brings the full Biryani Co. experience
          to your venue with ceremonial presentation and impeccable service.
        </p>
        <div className="flex flex-col gap-4">
          <ListItem name="Custom menu planning with our head chef" />
          <ListItem name="Live dum biryani cooking station on-site" />
          <ListItem name="Premium crockery and chafing setup included" />
          <ListItem name="Serves 20 to 2,000+ guests seamlessly" />
        </div>
        <button className="flex gap-2 items-center bg-[#1A0800] p-2 px-4 rounded-md text-[#FAF3E3] w-fit">
          Plan Your Event <FaAngleRight />
        </button>
      </div>
    </section>
  );
}

function ListItem({ name }: { name: string }) {
  return (
    <div className="flex gap-3 items-center">
      <div className="relative w-5 h-5">
        <Image
          src={"/tick.png"}
          alt="about-us"
          fill
          sizes="(max-width:768px) 100vw, 50vw"
          priority
          className="object-cover w-full rounded-full"
        />
      </div>
      <p className="text-sm text-[#6B4E35] font-semibold font-aller">{name}</p>
    </div>
  );
}
