import Image from "next/image";
import React from "react";
import { BsDashLg } from "react-icons/bs";

export default function Experience() {
  return (
    <section className="p-5 md:px-20 bg-[#F5EDD8] min-h-[90vh] flex justify-between items-center">
      <div className="flex flex-col gap-5 w-full">
        <p className="flex gap-3 items-center text-[#C8960A] tracking-widest font-semibold text-xs">
          <BsDashLg />
          THE BIRYANI EXPERIENCE
        </p>
        <h4 className="text-[#0D0600] font-tan text-4xl">
          More Than Just a Meal,
        </h4>
        <h4 className="text-[#C8960A] font-tan text-4xl">
          It's a Royal Experience
        </h4>
        <p className="text-[#5A3A1A] font-aller font-semibold text-sm max-w-130">
          We believe that exceptional biryani is the product of discipline,
          heritage and love. Every ingredient is chosen with intent, every
          method carried from one generation to the next.
        </p>
        <div className="mt-5">
          <ListItem
            image="/expico-1.png"
            title="No Preservatives"
            content="Every dish made fresh daily no artificial additives, ever."
          />
          <ListItem
            image="/expico-2.png"
            title="Fresh Ingredients"
            content="Premium produce sourced from their origin regions each morning."
          />
          <ListItem
            image="/expico-3.png"
            title="Authentic Cooking"
            content="Sealed handi, slow flame the original dum method, unchanged."
          />
          <ListItem
            image="/expico-4.png"
            title="Finest Quality"
            content="Aged basmati, hand-ground masala & saffron from Kashmir."
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-3">
        <div className="flex gap-2 items-start">
          <div className="relative w-50 h-60">
            <Image
              src={"/exp-1.jpg"}
              alt={"experience"}
              fill
              sizes="(max-width:768px) 100vw, 100vw"
              priority
              className="object-cover w-full rounded-md"
            />
          </div>
          <div className="relative w-50 h-40">
            <Image
              src={"/exp-2.jpg"}
              alt={"experience"}
              fill
              sizes="(max-width:768px) 100vw, 100vw"
              priority
              className="object-cover w-full rounded-md"
            />
          </div>
        </div>
        <div className="flex gap-2 items-start">
          <div className="relative w-50 h-60">
            <Image
              src={"/exp-3.jpg"}
              alt={"experience"}
              fill
              sizes="(max-width:768px) 100vw, 100vw"
              priority
              className="object-cover w-full rounded-md"
            />
          </div>
          <div className="relative w-50 h-40">
            <Image
              src={"/exp-4.jpg"}
              alt={"experience"}
              fill
              sizes="(max-width:768px) 100vw, 100vw"
              priority
              className="object-cover w-full rounded-md"
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
