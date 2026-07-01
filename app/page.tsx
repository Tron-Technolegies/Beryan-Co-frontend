import Header from "@/components/Header";
import AboutUs from "@/components/Home/AboutUs";
import ArtOfDum from "@/components/Home/ArtOfDum";
import Experience from "@/components/Home/Experience";
import LandingSection from "@/components/Home/LandingSection";
import OurPhilosophy from "@/components/Home/OurPhilosophy";
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
    </>
  );
}
