import Header from "@/components/Header";
import AboutUs from "@/components/Home/AboutUs";
import ArtOfDum from "@/components/Home/ArtOfDum";
import AsSeenIn from "@/components/Home/AsSeenIn";
import Contact from "@/components/Home/Contact";
import Experience from "@/components/Home/Experience";
import Gallery from "@/components/Home/Gallery";
import LandingSection from "@/components/Home/LandingSection";
import Menu from "@/components/Home/Menu";
import OurPhilosophy from "@/components/Home/OurPhilosophy";
import Reserve from "@/components/Home/Reserve";
import Reviews from "@/components/Home/Reviews";
import SpecialOccassion from "@/components/Home/SpecialOccassion";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <LandingSection />
      <OurPhilosophy />
      <AboutUs />
      <ArtOfDum />
      <Experience />
      <Menu />
      <SpecialOccassion />
      <Gallery />
      <Reviews />
      <AsSeenIn />
      <Reserve />
      <Contact />
    </>
  );
}
