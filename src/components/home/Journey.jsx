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

    // Journey Javascript
    const journeyContainer = document.querySelector(".journey-container");
    const locationMarkersContainer =
      document.querySelector(".location-markers");

    // Sample data for location markers
    const locations = [
      {
        date: "2024-01-01",
        description:
          "This is a short sentence that highlights the accomplishments of Koshish. It is presented in this manner here. It cannot be too long or else it might not fit. ",
      },
      {
        date: "2024-02-01",
        description:
          "This is a short sentence that highlights the accomplishments of Koshish. It is presented in this manner here. It cannot be too long or else it might not fit. ",
      },
      { date: "2024-02-01", description: "Location 3" },
      { date: "2024-02-01", description: "Location 4" },
      { date: "2024-02-01", description: "Location 5" },
      { date: "2024-02-01", description: "Location 6" },
      { date: "2024-02-01", description: "Location 7" },
      { date: "2024-02-01", description: "Location 8" },
      { date: "2024-02-01", description: "Location 9" },
      { date: "2024-02-01", description: "Location 10" },
      // Add more locations as needed
    ];
    //road width based on the number of elements
    const road = document.getElementById("road");
    const container = document.getElementById("journey-container");
    container.style.width = `100%`;

    road.style.width = `${locations.length * 250 + 250}px`;

    // Create location markers
    locations.forEach((location, index) => {
      const marker = document.createElement("div");
      marker.classList.add("location-marker");
      marker.textContent = index + 1; // You can customize the marker content
      //if index is even, place marker above the road
      if (index % 2 === 0) {
        marker.classList.add("below");
        marker.style.left = `${(index + 1) * 250 - 35}px`; // Adjust position of markers
        marker.title = `${location.date}: ${location.description}`;
        marker.innerHTML = `<i class= 'fas fa-location-dot' style='transform: rotate(180deg);'></i><div class='location-date'>${location.date}</div><div class='location-description'>${location.description}</div>`;
      } else {
        marker.classList.add("above");
        marker.style.left = `${index * 250 + 215}px`; // Adjust position of markers
        marker.title = `${location.date}: ${location.description}`;
        marker.innerHTML = `<div class='location-date'>${location.date}</div><div class='location-description'>${location.description}</div><i class= 'fas fa-location-dot'></i>`;
      }

      locationMarkersContainer.appendChild(marker);
    });

    //query selector for scroll buttons
    const scrollButtonLeft = document.querySelector(".scroll-button.left");
    const scrollButtonRight = document.querySelector(".scroll-button.right");
    const scrollStep = 100; // Adjust scroll step as needed
    // Add event listeners to scroll buttons
    scrollButtonLeft.addEventListener("click", function () {
      journeyContainer.scrollLeft -= scrollStep;
    });

    scrollButtonRight.addEventListener("click", function () {
      journeyContainer.scrollLeft += scrollStep;
    });

    let isDragging = false;
    let startX;
    let scrollLeft;

    // Touch event handlers for touch and drag functionality
    journeyContainer.addEventListener("touchstart", (e) => {
      isDragging = true;
      startX = e.touches[0].clientX - journeyContainer.offsetLeft;
      scrollLeft = journeyContainer.scrollLeft;
    });

    journeyContainer.addEventListener("touchend", () => {
      isDragging = false;
    });

    journeyContainer.addEventListener("touchmove", (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.touches[0].clientX - journeyContainer.offsetLeft;
      const walk = (x - startX) * 2; // Adjust scrolling sensitivity
      journeyContainer.scrollLeft = scrollLeft - walk;
    });
  }, []);
  return (
    <>
      <section className="mt-5 position-relative">
        <h2 className="heading text-center text-blue">
          the journey of Koshish
        </h2>
        <p className="text-center">
          Our journey to championing mental health and psychosocial well-being.
        </p>
        <button className="scroll-button left" style={{ zIndex: "500" }}>
          &lt;
        </button>
        <div className="journey-container" id="journey-container">
          <div className="road" id="road"></div>
          <div className="location-markers"></div>
        </div>
        <button className="scroll-button right">&gt;</button>
      </section>
    </>
  );
};

export default TheJourney;
