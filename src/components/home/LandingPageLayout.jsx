import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import Stories from "./Stories";
import OurImpacts from "./OurImpacts";
import OurValues from "./OurValues";
import TheJourney from "./Journey";
import OurPartners from "./OurPartners";
import {
  getEnglishServiceTextEditorContent,
  getNepaliServiceTextEditorContent,
} from "../../services/api";
import GeographicalCoverage from "./GeographicalCoverage";
import OurWork from "./OurWork";
import YourSupport from "./YourSupport";
import LatestNews from "./LatestNews";
import NewsLetter from "./NewsLetter";
import Accessibility from "./Accessibility";
import PopUp from "../shared/CustomModal/PopUp";

export default function LandingPageLayout() {
  const [data, setData] = useState(null);
  const [selectedLocale, setSelectedLocale] = useState("english");

  const [showModal, setShowModal] = useState(false);

  const handleOptionChange = async (event) => {
    setSelectedLocale(event.target.value);
    if (event.target.value === "nepali") {
      try {
        const response = await getNepaliServiceTextEditorContent();
        setData(response.data.service);
      } catch (error) {}
    } else if (event.target.value === "english") {
      try {
        const response = await getEnglishServiceTextEditorContent();
        setData(response.data.service);
      } catch (error) {}
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getEnglishServiceTextEditorContent();
        setData(response.data.service);
      } catch (error) {}
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowModal(true);
  //   }, 1000);
  // }, []);

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <main>
        {showModal && <PopUp onCloseModal={closeModal} />}
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
