"use client";
import React, { useEffect, useState } from "react";
import { BsDashLg } from "react-icons/bs";

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

  useEffect(() => {
    const item: Menu = menuItems.find((item) => item.name === active) as Menu;
    setCurrent(item);
  }, [active]);
  return (
    <section className="flex items-center min-h-[90vh]">
      <div className="w-2/5 bg-[#0A0400] min-h-[90vh] flex flex-col justify-center gap-7 p-5 md:px-20">
        <p className="text-[#F5EDD8] font-aller text-xs tracking-widest">
          OUR MENU
        </p>
        <div className="flex flex-col gap-4 font-tan">
          <MenuItem
            active={active}
            setActive={setActive}
            keyword="Hyderabadi Dum"
          />
          <MenuItem
            active={active}
            setActive={setActive}
            keyword="Lucknowi Nawabi"
          />
          <MenuItem
            active={active}
            setActive={setActive}
            keyword="Chicken Tikka"
          />
          <MenuItem active={active} setActive={setActive} keyword="Ambur Dum" />
          <MenuItem
            active={active}
            setActive={setActive}
            keyword="Persian Saffron"
          />
          <MenuItem
            active={active}
            setActive={setActive}
            keyword="Vegetarian"
          />
        </div>
        <p className="text-[#4A3820] text-xs font-aller">
          Starting from <span className="text-sm text-[#C8960A]">140+</span> ·
          All prices include taxes
        </p>
      </div>
      <div
        className="w-3/5 min-h-[90vh] bg-cover relative flex flex-col gap-3 justify-end p-5"
        style={{ backgroundImage: `url(${current.image})` }}
      >
        <div className="absolute inset-0 bg-linear-to-t from-black"></div>
        <div className="z-30 mb-7">
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
      className={` text-2xl flex gap-2 items-center hover:text-[#F5EDD8] ease-in-out duration-300 hover:ml-3 ${active === keyword ? "text-[#F5EDD8]" : "text-[#7A6B50]"}`}
    >
      {active === keyword && (
        <span>
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
      <div className="flex gap-2 items-center">
        {features.map((item) => (
          <p
            key={item}
            className="p-1 rounded-s-full rounded-e-full px-2 text-xs font-aller tracking-widest text-[#C8B090] border border-[#C8960A40]"
          >
            {item}
          </p>
        ))}
      </div>
      <p className="text-4xl font-tan text-[#F5EDD8]">{item}</p>
      <p className="font-aller text-sm text-[#C8B09087] max-w-150">{desc}</p>
    </div>
  );
}
