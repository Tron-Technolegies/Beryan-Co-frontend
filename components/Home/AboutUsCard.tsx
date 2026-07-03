import Image from "next/image";
import React from "react";

export default function AboutUsCard() {
  return (
    <div className="bg-[#2A1506] p-4 sm:p-6 rounded-2xl flex flex-col gap-4 absolute right-4 bottom-4 lg:-right-8 lg:bottom-10 w-[240px] sm:w-[280px] shadow-2xl">
      <ListItem
        image="/icon1.png"
        title="Mughal Heritage"
        style="border-b border-[#9A7050]"
        content="Inspired by royal kitchens of the 15th–19th century"
      />
      <ListItem
        image="/icon2.png"
        title="Authentic Spices"
        style="border-b border-[#9A7050]"
        content="Handpicked spices sourced from their finest origins"
      />
      <ListItem
        image="/icon3.png"
        title="Dum Perfection"
        content="Slow-sealed to lock the flavours, moisture and aroma"
      />
    </div>
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
    <div className={`flex gap-3 w-full items-center pb-3 ${style}`}>
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
        <p className="font-aller text-[#F5EDD8] font-semibold">{title}</p>
        <p className="font-dm text-[#9A7050] text-sm">{content}</p>
      </div>
    </div>
  );
}
