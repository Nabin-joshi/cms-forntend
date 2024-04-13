import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import Stories from "./Stories";
import OurImpacts from "./OurImpacts";
import OurValues from "./OurValues";
import TheJourney from "./Journey";
import OurPartners from "./OurPartners";
import GeographicalCoverage from "./GeographicalCoverage";
import OurWork from "./OurWork";
import YourSupport from "./YourSupport";
import LatestNews from "./LatestNews";
import NewsLetter from "./NewsLetter";
import Accessibility from "./Accessibility";

export default function LandingPageLayout() {
  return (
    <>
      <main>
        <Slider />
        <Accessibility />
        <Stories />
        <OurImpacts />
        <OurWork />
        <OurValues />
        <TheJourney />
        <GeographicalCoverage />
        <OurPartners />
        <YourSupport />
        <LatestNews />
        <NewsLetter />
      </main>
    </>
  );
}
