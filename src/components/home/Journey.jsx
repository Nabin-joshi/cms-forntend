import React, { useEffect, useState } from "react";
import { getTheJourneyHeading } from "../../services/theJourneyService";

const TheJourney = () => {
  const [theJourney, setTheJourney] = useState({});

  async function fetchAllTheJourney() {
    try {
      const response = await getTheJourneyHeading();
      setTheJourney(response.data.data);
    } catch (error) {}
  }
  useEffect(() => {
    fetchAllTheJourney();
  }, []);
  return (
    <>
      <section class="mt-5 position-relative">
        <h2 class="heading text-center text-blue">
          {theJourney && theJourney.heading}/
          {theJourney && theJourney.headingNepali}
        </h2>
        <p class="text-center">
          {" "}
          {theJourney && theJourney.subHeading}/
          {theJourney && theJourney.subHeadingNepali}
        </p>
        {/* class="scroll-button left" style="z-index: 500;" */}
        <button class="scroll-button left">&lt;</button>
        {theJourney &&
          theJourney.contents &&
          theJourney.contents.map((data, index) => {
            return (
              <div class="journey-container" id="journey-container">
                <div class="road" id="road"></div>
                <div class="location-markers"></div>
              </div>
            );
          })}
        <button class="scroll-button right">&gt;</button>
      </section>
    </>
  );
};

export default TheJourney;
