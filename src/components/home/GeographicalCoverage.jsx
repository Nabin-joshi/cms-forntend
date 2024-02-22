import React, { useEffect, useState } from "react";
import {
  getEnglishGeographicalCoverage,
  getNepaliGeographicalCoverage,
} from "../../services/api";

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
    <section>
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
        }}
        className="container"
      >
        <h2 style={{ color: "#343a40", textAlign: "center" }}>
          Geopgraphical Coverage
        </h2>
        <div
          style={{
            display: "flex",

            alignItems: "center",
            marginTop: "20px",

            justifyContent: "space-between",
          }}
        >
          <div style={{ flex: 1, padding: "10px" }}>
            <h3 style={{ margin: "10px 0", color: "#343a40" }}>Drstricts</h3>
            <p style={{ fontSize: "14px" }}>
              English: {englishGeographicalCoverage.districts} Nepali:{" "}
              {nepaliGeographicalCoverage.districts}
            </p>
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            <h3 style={{ margin: "10px 0", color: "#343a40" }}>RMs</h3>
            <p style={{ fontSize: "14px" }}>
              English: {englishGeographicalCoverage.RMs} Nepali:{" "}
              {nepaliGeographicalCoverage.RMs}
            </p>
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            <h3 style={{ margin: "10px 0", color: "#343a40" }}>PNGOs</h3>
            <p style={{ fontSize: "14px" }}>
              English: {englishGeographicalCoverage.PNGOs} Nepali:{" "}
              {nepaliGeographicalCoverage.PNGOs}
            </p>
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            <h3 style={{ margin: "10px 0", color: "#343a40" }}>Schools</h3>
            <p style={{ fontSize: "14px" }}>
              English: {englishGeographicalCoverage.schools} Nepali:{" "}
              {nepaliGeographicalCoverage.schools}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GeographicalCoverage;
