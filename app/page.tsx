"use client";

import React, { useEffect } from "react";
import Banner from "./components/Banner";
import ResponsiveNav from "./components/Navbar/ResponsiveNav";
import Footer from "./components/Footer";
import BestSeller from "./components/BestSeller/BestSeller";

export default function Home() {
  useEffect(() => {
    fetch('/api/connect')  // Memanggil API untuk log server-side
      .then(response => response.json())
      .then(data => console.log("Data dari server:", data));
  }, []);

  return (
    <div>
      <ResponsiveNav />
      <Banner />
      <BestSeller />
      <Footer />
    </div>
  );
}
