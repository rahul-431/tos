"use client";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/others/About";
import Bifocals from "@/components/others/Bifocals";
import Connect from "@/components/others/Connect";
import Features from "@/components/others/Features";
import { HeroSection } from "@/components/others/Herosection";
import NearBy from "@/components/others/NearBy";
import Products from "@/components/others/Products";

import { useEffect, useState } from "react";

const App = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById("hero");
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNavbar(!entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (heroSection) observer.unobserve(heroSection);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setShowNavbar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div id="hero" className="h-fit bg-gray-200">
        <HeroSection />
      </div>
      {showNavbar && (
        <div className="fixed z-50 top-0 w-full bg-white shadow-md transition-all duration-300">
          <Navbar />
        </div>
      )}
      <About />
      <Features />
      <Products />
      <Bifocals />
      <NearBy />
      <Connect />
      <Footer />
    </div>
  );
};

export default App;
