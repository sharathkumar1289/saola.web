"use client";
import Community from "@/components/Community";
import CoreFeatures from "@/components/CoreFeatures";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import QualityFeatures from "@/components/QualityFeatures";
import Services from "@/components/Services";
import Portfolio from "@/components/Team";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/contact";


export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-32">

      <Navbar />

      <HeroSection />
{/*      
      <QualityFeatures /> */}
      <CoreFeatures />
      <Features />
      <Services />
      <Portfolio/>
      {/* <Contact /> */}
    </div>
  );
}
