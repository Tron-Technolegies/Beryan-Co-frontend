import React from "react";

export default function AsSeenIn() {
  return (
    <section className="p-5 py-10 md:px-20 bg-[#FAF3E3] flex flex-col gap-7 items-center">
      <p className="text-xs font-aller tracking-widest text-[#8B7355]">
        AS SEEN IN
      </p>
      <div className="flex gap-7 justify-center text-[#1A080080] font-tan">
        <p>Times of India</p>
        <p>Hindustan Times</p>
        <p>Zomato</p>
        <p>Travel & Leisure</p>
        <p>GoodFood</p>
      </div>
    </section>
  );
}
