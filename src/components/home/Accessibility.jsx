import React, { useState } from "react";

function Accessibility() {
  const handleAccessibility = (event) => {
    event.preventDefault();
    const isClickInside = document
      .getElementById("accessibility-btn")
      .contains(event.target);
    if (isClickInside) {
      const x = document.getElementById("accessibility-sidebar");
      if (x.style.left != "0px") {
        x.style.left = "0px";
      } else {
        x.style.left = "-188px";
      }
    }
  };

  const handleClick = (action) => {
    var allElements = document.querySelectorAll("*");

    switch (action) {
      case "increase-font":
        allElements.forEach(function (element) {
          var computedStyle = window.getComputedStyle(element);
          var currentSize = parseFloat(computedStyle.fontSize);
          var newSize = currentSize * 1.2; // Increase font size by 20%
          element.style.fontSize = newSize + "px";
        });
        break;
      case "decrease-font":
        allElements.forEach(function (element) {
          var computedStyle = window.getComputedStyle(element);
          var currentSize = parseFloat(computedStyle.fontSize);
          var newSize = currentSize / 1.2; // Decrease font size by 20%
          element.style.fontSize = newSize + "px";
        });
        break;
      case "high-contrast":
        allElements.forEach((element) => {
          element.classList.toggle("high-contrast");
        });
        break;
      case "negative-contrast":
        allElements.forEach(function (element) {
          element.classList.toggle("negative-contrast");
        });
        break;
      case "underline-links":
        var allLinks = document.querySelectorAll("a");
        allLinks.forEach(function (link) {
          link.classList.toggle("underline");
        });
        break;
      case "reset-accessibility":
        allElements.forEach(function (element) {
          element.style.fontSize = "";
          element.classList.remove("high-contrast");
          element.classList.remove("negative-contrast");
        });
        var allLinks = document.querySelectorAll("a");
        allLinks.forEach(function (link) {
          link.classList.remove("underline");
        });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <section className="accessibility-sidebar" id="accessibility-sidebar">
        <div
          onClick={(e) => handleClick(e.target.id)}
          className="accessibility-icons"
        >
          <div className="accessibility-icon" id="increase-font">
            <i className="fas fa-font"></i> Increase-font
          </div>
          <div className="accessibility-icon" id="decrease-font">
            <i className="fas fa-font"></i> Decrease-font
          </div>
          <div className="accessibility-icon" id="high-contrast">
            <i className="fas fa-adjust"></i> High Contrast
          </div>
          <div className="accessibility-icon" id="negative-contrast">
            <i className="fas fa-adjust"></i> Negative Contrast
          </div>
          <div className="accessibility-icon" id="underline-links">
            <i className="fas fa-underline"></i> Underline Links
          </div>
          <div className="accessibility-icon" id="reset-accessibility">
            <i className="fas fa-sync-alt"></i> Reset
          </div>
        </div>
        <div
          className="accessibility-btn"
          id="accessibility-btn"
          onClick={handleAccessibility}
        >
          <i className="fas fa-universal-access"></i>
        </div>
      </section>
    </>
  );
}

export default Accessibility;
