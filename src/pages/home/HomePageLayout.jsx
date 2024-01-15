import React from "react";
import Header from "../../components/home/Header";
import Slider from "../../components/home/Slider";
import Services from "../../components/home/Services";
import Features from "../../components/home/Features";
import Footer from "../../components/home/Footer";

export default function HomePageLayout() {
  return (
    <>
      <Header />
      <Slider />
      <main>
        <Services />
        <Features />
        <Footer />
      </main>
    </>
  );
}
