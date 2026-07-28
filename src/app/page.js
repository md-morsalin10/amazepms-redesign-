import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import PartnerLogos from "@/components/PartnerLogos";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
   <main>
      <HeroSection/>
      <PartnerLogos/>
      <AboutUs/>
      <WhyChooseUs/>
   </main>
  );
}

