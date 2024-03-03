import React, { useEffect, useState } from "react";
import {
  getEnglishGeographicalCoverage,
  getNepaliGeographicalCoverage,
} from "../../services/api";

import map from "../../assets/img/Vector Map.svg";

function GeographicalCoverage() {
  const [englishGeographicalCoverage, setEnglishGeographicalCoverage] =
    useState({
      districts: "",
      RMs: "",
      PNGOs: "",
      schools: "",
    });

  const [nepaliGeographicalCoverage, setNepaliGeographicalCoverage] = useState({
    districts: "",
    RMs: "",
    PNGOs: "",
    schools: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const englishResponse = await getEnglishGeographicalCoverage();

        const nepaliResponse = await getNepaliGeographicalCoverage();

        if (englishResponse) {
          setEnglishGeographicalCoverage(
            englishResponse.data.geographicalCoverage
          );
        }
        if (nepaliResponse) {
          setNepaliGeographicalCoverage(
            nepaliResponse.data.geographicalCoverage
          );
        }
      } catch (error) {}
    };

    fetchData();
  }, []);
  return (
    <section className="mt-5 geo-coverage-section">
      <div className="container py-5">
        <h2 className="heading text-center text-blue">Geographical Coverage</h2>
        <div className="d-flex justify-content-between flex-wrap mt-5">
          <div className="geo-coverage-subtitle">
            <h3 className="">
              Working Areas of <br />{" "}
              <span className="font-weight-bold">Koshish Nepal</span>{" "}
            </h3>
          </div>
          <div className="d-flex align-items-center">
            <div className="d-flex flex-column align-items-center p-2 border-right">
              <h1 className="text-blue"> 3 </h1>
              <h4>Districts</h4>
            </div>
            <div className="d-flex flex-column align-items-center p-2 border-right">
              <h1 className="text-blue"> 3 </h1>
              <h4>RMs</h4>
            </div>
            <div className="d-flex flex-column align-items-center p-2 border-right">
              <h1 className="text-blue"> 3 </h1>
              <h4>PNGOs</h4>
            </div>
            <div className="d-flex flex-column align-items-center p-2">
              <h1 className="text-blue"> 3 </h1>
              <h4>Schools</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="geo-blue-bg">
        <img src={map} alt="Nepal Map" className="nepal-map" />
        <div className="geo-legend">
          <div className="legend-item">
            <div
              className="legend-color"
              style={{ backgroundColor: "red" }}
            ></div>
            <div className="legend-text">Districts</div>
          </div>
          <div className="legend-item">
            <div
              className="legend-color"
              style={{ backgroundColor: "green" }}
            ></div>
            <div className="legend-text">RMs</div>
          </div>
          <div className="legend-item">
            <div
              className="legend-color"
              style={{ backgroundColor: "yellow" }}
            ></div>
            <div className="legend-text">PNGOs</div>
          </div>
          <div className="legend-item">
            <div
              className="legend-color"
              style={{ backgroundColor: "pink" }}
            ></div>
            <div className="legend-text">Schools</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GeographicalCoverage;
