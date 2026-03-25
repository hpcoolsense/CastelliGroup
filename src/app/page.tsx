import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Pain from "@/components/Pain";
import Company from "@/components/Company";
import Methodology from "@/components/Methodology";
import Services from "@/components/Services";
import Qualify from "@/components/Qualify";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <SocialProof />
        <div className="section-divider max-w-6xl mx-auto" />
        <Pain />
        <div className="section-divider max-w-6xl mx-auto" />
        <Company />
        <div className="section-divider max-w-6xl mx-auto" />
        <Methodology />
        <Services />
        <div className="section-divider max-w-6xl mx-auto" />
        <Qualify />
        <Team />
        <div className="section-divider max-w-6xl mx-auto" />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
