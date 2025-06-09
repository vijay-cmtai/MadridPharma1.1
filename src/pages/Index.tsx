// src/pages/index.tsx (If this is your main page component for the "/" route)
import React from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InnovationSection from "@/components/InnovationSection";
import ProductsSection from "@/components/ProductsSection";
import ApproachSection from "@/components/ApproachSection";
import TherapiesSection from "@/components/TherapiesSection";
import Footer from "@/components/Footer";
// import OurProductsAndStats from "@/components/OurProductsAndStats"; // Uncomment if used

const IndexPage = () => {
  // Renamed to IndexPage for clarity if it's a page
  return (
    // This outermost div is for overall page structure (like sticky footer)
    // It should be 'flex flex-col' and 'min-h-screen' but NOT restrict width.
    <div className="flex flex-col min-h-screen bg-slate-50">
      {" "}
      {/* Changed bg for contrast */}
      <TopBar />
      <Navbar />
      {/* This 'main' tag needs to take full width */}
      <main className="flex-grow w-full">
        {" "}
        {/* <<< ADDED 'flex-grow w-full' HERE */}
        <HeroSection />
        <InnovationSection />
        {/* <OurProductsAndStats /> */}
        <ProductsSection />
        <ApproachSection />
        {/* <TherapiesSection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;
