"use client";
import React, { useEffect, useState } from "react";
import { BsDashLg } from "react-icons/bs";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type Menu = {
  name: string;
  features: string[];
  desc: string;
  image: string;
};

export const menuItems: Menu[] = [
  {
    name: "Hyderabadi Dum",
    image: "/hyderabad.jpg",
    features: ["SIGNATURE", "BESTSELLER", "NON-VEG"],
    desc: "The iconic Hyderabadi biryani prepared with fragrant basmati rice, premium spices, and slow-cooked using the traditional dum method for unmatched aroma and flavor.",
  },
  {
    name: "Lucknowi Nawabi",
    image: "/menu.png",
    features: ["ROYAL RECIPE", "MILD SPICE", "NON-VEG"],
    desc: "An elegant Awadhi-style biryani inspired by the royal kitchens of Lucknow, delicately seasoned with aromatic whole spices for a refined taste.",
  },
  {
    name: "Chicken Tikka",
    image: "/tikka.webp",
    features: ["GRILLED", "JUICY", "CHEF'S SPECIAL"],
    desc: "Tender chicken marinated in yogurt, herbs, and traditional spices, then grilled to perfection with a smoky finish.",
  },
  {
    name: "Ambur Dum",
    image: "/ambur.avif",
    features: ["AUTHENTIC", "SPICY", "TAMIL SPECIAL"],
    desc: "A flavorful Ambur-style biryani made with aromatic spices and slow-cooked to preserve its rich South Indian heritage.",
  },
  {
    name: "Persian Saffron",
    image: "/saffron.webp",
    features: ["SAFFRON", "AROMATIC", "PREMIUM"],
    desc: "A luxurious rice dish infused with premium Persian saffron, subtle spices, and rich flavors for an unforgettable dining experience.",
  },
  {
    name: "Vegetarian",
    image: "/veg.jpeg",
    features: ["VEGETARIAN", "FRESH", "HEALTHY"],
    desc: "A wholesome selection of aromatic vegetarian specialties prepared with fresh vegetables, fragrant herbs, and premium-quality ingredients.",
  },
];

export default function Menu() {
  const [active, setActive] = useState("Hyderabadi Dum");
  const [current, setCurrent] = useState({
    name: "Hyderabadi Dum",
    image: "/hyderabad.jpg",
    features: ["SIGNATURE", "BESTSELLER", "NON-VEG"],
    desc: "The iconic Hyderabadi biryani prepared with fragrant basmati rice, premium spices, and slow-cooked using the traditional dum method for unmatched aroma and flavor.",
  });
  const [fade, setFade] = useState(true);
  const revealRef = useScrollReveal();

  useEffect(() => {
    setFade(false);
    const timer = setTimeout(() => {
      const item: Menu = menuItems.find((item) => item.name === active) as Menu;
      if (item) setCurrent(item);
      setFade(true);
    }, 200);
    return () => clearTimeout(timer);
  }, [active]);

  return (
    <section 
      id="menu" 
      ref={revealRef}
      className="flex flex-col lg:flex-row min-h-[90vh] w-full overflow-hidden"
    >
      <div className="w-full lg:w-2/5 bg-[#0A0400] flex flex-col justify-center gap-7 px-6 py-12 md:px-20 reveal reveal-left">
        <p className="text-[#F5EDD8] font-aller text-xs tracking-widest uppercase">
          OUR MENU
        </p>
        <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-6 lg:gap-4 font-tan pb-4 lg:pb-0 scrollbar-none whitespace-nowrap">
          {menuItems.map((item) => (
            <MenuItem
              key={item.name}
              active={active}
              setActive={setActive}
              keyword={item.name}
            />
          ))}
        </div>
        <p className="text-[#4A3820] text-xs font-aller mt-2">
          Starting from <span className="text-sm text-[#C8960A] font-semibold">140+</span> ·
          All prices include taxes
        </p>
      </div>
      
      <div
        className={`w-full lg:w-3/5 min-h-[45vh] sm:min-h-[55vh] lg:min-h-[90vh] bg-cover bg-center relative flex flex-col gap-3 justify-end p-6 sm:p-12 transition-all duration-500 reveal reveal-right delay-200`}
        style={{ 
          backgroundImage: `url(${current.image})`,
          transitionProperty: "background-image, opacity"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
        <div className={`z-30 mb-2 transition-all duration-500 transform ${
          fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <Item
            features={current.features}
            item={current.name}
            desc={current.desc}
          />
        </div>
      </div>
    </section>
  );
}

function MenuItem({
  active,
  setActive,
  keyword,
}: {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  keyword: string;
}) {
  return (
    <p
      onClick={() => setActive(keyword)}
      className={`text-xl sm:text-2xl flex gap-2 items-center hover:text-[#F5EDD8] cursor-pointer transition-all duration-300 hover:translate-x-1 whitespace-nowrap shrink-0 ${
        active === keyword ? "text-[#F5EDD8]" : "text-[#7A6B50]"
      }`}
    >
      {active === keyword && (
        <span className="shrink-0">
          <BsDashLg />
        </span>
      )}
      {keyword}
    </p>
  );
}

function Item({
  features,
  item,
  desc,
}: {
  features: string[];
  item: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2 items-center flex-wrap">
        {features.map((item) => (
          <p
            key={item}
            className="p-1 rounded-full px-3 text-[10px] font-aller tracking-widest text-[#C8B090] border border-[#C8960A40]"
          >
            {item}
          </p>
        ))}
      </div>
      <p className="text-3xl sm:text-4xl font-tan text-[#F5EDD8]">{item}</p>
      <p className="font-aller text-xs sm:text-sm text-[#C8B090CC] max-w-md leading-relaxed">{desc}</p>
    </div>
  );
}
