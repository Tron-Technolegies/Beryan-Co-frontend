import React from "react";

export default function ArtOfDum() {
  return (
    <section className="p-5 md:px-20 bg-[#0D0600] min-h-[90vh] flex justify-between items-center">
      <div className="flex flex-col gap-5 w-full">
        <p className="text-[#C8960A] font-aller tracking-widest text-xs">
          THE ART OF DUM
        </p>
        <h4 className="text-[#FAF3E3] font-tan text-4xl max-w-75 leading-tight">
          Perfection in Every <span className="text-[#C8960A]">Layer</span>
        </h4>
        <p className="text-[#C8B99A] font-aller text-sm max-w-110">
          True dum biryani demands patience. We seal each handi with dough, let
          steam and spice work their magic over hours never rushing what time
          alone perfects.
        </p>
        <div className="flex flex-col gap-3">
          <Steps
            step="01"
            heading="Marinate"
            content="Overnight rest in a blend of 22 hand-ground spices"
          />
          <Steps
            step="02"
            heading="Layer"
            content="Alternating rice and meat with fried onions and saffron"
          />
          <Steps
            step="03"
            heading="Seal"
            content="Handi sealed airtight with a flour-dough lid"
          />
          <Steps
            step="04"
            heading="Dum Cook"
            content="Low flame for 3–4 hours — zero shortcuts, zero compromises"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5 place-content-stretch w-full">
        <StatsItem stat="12+" content="Years of Culinary Heritage" />
        <StatsItem stat="50K+" content="Happy Guests Served" />
        <StatsItem stat="18" content="Award Winning Recipes" />
        <StatsItem stat="4.9★" content="Average Guest Rating" />
      </div>
    </section>
  );
}

function StatsItem({ stat, content }: { stat: string; content: string }) {
  return (
    <div className="bg-[#DAD3C20D] border border-[#C8960A26] flex flex-col gap-3 items-center justify-center rounded-xl h-28">
      <p className="text-[#C8960A] text-3xl font-bold font-aller">{stat}</p>
      <p className="text-[#C8B99A] font-aller text-xs">{content}</p>
    </div>
  );
}

function Steps({
  step,
  heading,
  content,
}: {
  step: string;
  heading: string;
  content: string;
}) {
  return (
    <div className="flex gap-7 items-start">
      <p className="text-[#C8960A99] font-tan text-xs mt-3">{step}</p>
      <div className="py-2 border-t border-[#C8960A4D] md:w-100 w-80">
        <p className="text-[#F5EDD8]">{heading}</p>
        <p className="text-[#F5EDD880] text-sm">{content}</p>
      </div>
    </div>
  );
}
