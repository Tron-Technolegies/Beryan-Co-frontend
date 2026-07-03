"use client";
import Image from "next/image";
import React from "react";
import { BsDashLg } from "react-icons/bs";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Experience() {
  const revealRef = useScrollReveal();

  return (
    <section 
      ref={revealRef}
      className="px-6 py-16 md:px-20 bg-[#F5EDD8] min-h-[90vh] flex flex-col lg:flex-row gap-12 justify-between items-center overflow-hidden"
    >
      <div className="flex flex-col gap-5 w-full lg:w-1/2 reveal reveal-left">
        <p className="flex gap-3 items-center text-[#C8960A] tracking-widest font-semibold text-xs">
          <BsDashLg />
          THE BIRYANI EXPERIENCE
        </p>
        <h4 className="text-[#0D0600] font-tan text-3xl sm:text-4xl leading-tight">
          More Than Just a Meal,<br />
          <span className="text-[#C8960A]">It's a Royal Experience</span>
        </h4>
        <p className="text-[#5A3A1A] font-aller font-semibold text-xs sm:text-sm max-w-xl">
          We believe that exceptional biryani is the product of discipline,
          heritage and love. Every ingredient is chosen with intent, every
          method carried from one generation to the next.
        </p>
        <div className="mt-5 flex flex-col gap-2">
          <ListItem
            image="/expico-1.png"
            title="No Preservatives"
            content="Every dish made fresh daily—no artificial additives, ever."
          />
          <ListItem
            image="/expico-2.png"
            title="Fresh Ingredients"
            content="Premium produce sourced from their origin regions each morning."
          />
          <ListItem
            image="/expico-3.png"
            title="Authentic Cooking"
            content="Sealed handi, slow flame—the original dum method, unchanged."
          />
          <ListItem
            image="/expico-4.png"
            title="Finest Quality"
            content="Aged basmati, hand-ground masala & saffron from Kashmir."
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-3 reveal reveal-right delay-200">
        <div className="flex gap-3 items-start">
          <div className="relative flex-1 aspect-[4/5] h-auto">
            <Image
              src={"/exp-1.jpg"}
              alt={"experience"}
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              priority
              className="object-cover w-full rounded-md shadow-md"
            />
          </div>
          <div className="relative flex-1 aspect-[4/3] h-auto mt-6">
            <Image
              src={"/exp-2.jpg"}
              alt={"experience"}
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              priority
              className="object-cover w-full rounded-md shadow-md"
            />
          </div>
        </div>
        <div className="flex gap-3 items-start">
          <div className="relative flex-1 aspect-[4/5] h-auto -mt-6">
            <Image
              src={"/exp-3.jpg"}
              alt={"experience"}
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              priority
              className="object-cover w-full rounded-md shadow-md"
            />
          </div>
          <div className="relative flex-1 aspect-[4/3] h-auto">
            <Image
              src={"/exp-4.jpg"}
              alt={"experience"}
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              priority
              className="object-cover w-full rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ListItem({
  image,
  title,
  style,
  content,
}: {
  image: string;
  title: string;
  style?: string;
  content: string;
}) {
  return (
    <div className={`flex gap-5 w-full items-center pb-3 ${style}`}>
      <div>
        <div className="relative w-10 h-10">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width:768px) 100vw, 100vw"
            priority
            className="object-cover w-full rounded-full"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <p className="font-aller text-[#0D0600] text-sm font-semibold">
          {title}
        </p>
        <p className="font-aller text-[#8B7050] text-xs">{content}</p>
      </div>
    </div>
  );
}
