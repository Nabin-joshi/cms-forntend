import React, { useEffect, useState } from "react";
import Header from "../../components/home/Header";
import Slider from "../../components/home/Slider";
import Services from "../../components/home/Services";
import Features from "../../components/home/Features";
import Footer from "../../components/home/Footer";
import {
  getEnglishServiceTextEditorContent,
  getNepaliServiceTextEditorContent,
} from "../../services/api";
import Stories from "../../components/home/Stories";
import OurImpacts from "../../components/home/OurImpacts";
import OurValues from "../../components/home/OurValues";
import TheJourney from "../../components/home/Journey";
import OurPartners from "../../components/home/OurPartners";
import { Outlet } from "react-router";

export default function HomePageLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
