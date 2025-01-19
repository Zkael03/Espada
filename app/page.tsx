"use client";

import React from "react";
import Banner from "./components/Banner";
import ResponsiveNav from "./components/Navbar/ResponsiveNav";
import Footer from "./components/Footer";
import BestSeller from "./components/BestSeller/BestSeller";

export default function Home() {
  return (
    <div>
      <ResponsiveNav />
      <Banner />
      <BestSeller />
      <Footer />
    </div>
  );
}
