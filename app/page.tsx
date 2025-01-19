"use client";

import React from "react";
import Banner from "./components/Banner";
import ResponsiveNav from "./components/Navbar/ResponsiveNav";
import Footer from "./components/Footer";
import BestSeller from "./components/BestSeller/BestSeller";
import Ulasan from "./components/Ulasan/Ulasan";
import Speciality from "./components/Speciality/Speciality";

export default function Home() {
  return (
    <div>
      <ResponsiveNav />
      <Banner />
      <BestSeller />
      <Ulasan />
      <Speciality />
      <Footer />
    </div>
  );
}
