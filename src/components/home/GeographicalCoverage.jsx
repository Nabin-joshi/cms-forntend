import React, { useEffect, useState } from "react";
import { getGeographicalCoverage } from "../../services/api";

import map from "../../assets/img/Vector Map.svg";

function GeographicalCoverage() {
  const [geographicalCoverage, setGeographicalCoverage] = useState({
    districts: "",
    RMs: "",
    PNGOs: "",
    schools: "",
  });

  const [locale, setLocale] = useState("eng");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getGeographicalCoverage();
        if (res) {
          setGeographicalCoverage(res.data.geographicalCoverage);
        }
      } catch (error) {}
    };

    let locale = localStorage.getItem("locale")
      ? localStorage.getItem("locale")
      : "eng";
    setLocale(locale);

    fetchData();
  }, []);
  return (
    <section className="mt-5 geo-coverage-section">
      <div className="container py-5">
        {locale === "eng" ? (
          <h2 className="heading text-center text-blue">
            Geographical Coverage
          </h2>
        ) : (
          <h2 className="heading text-center text-blue">भूगोलिक कवरेज</h2>
        )}

        <div className="d-flex justify-content-between flex-wrap mt-5">
          <div className="geo-coverage-subtitle">
            {locale === "eng" ? (
              <h3 className="">
                Working Areas of <br />{" "}
                <span className="font-weight-bold">Koshish Nepal</span>{" "}
              </h3>
            ) : (
              <h3 className="">
                कोशिश नेपाल <br />{" "}
                <span className="font-weight-bold"> को कामका क्षेत्रहरू</span>{" "}
              </h3>
            )}
          </div>
          <div className="d-flex align-items-center">
            <div className="d-flex flex-column align-items-center p-2 border-right">
              <h1 className="text-blue"> {geographicalCoverage.districts} </h1>
              {locale === "eng" ? <h4>Districts</h4> : <h4>जिल्लाहरू</h4>}
            </div>
            <div className="d-flex flex-column align-items-center p-2 border-right">
              <h1 className="text-blue"> {geographicalCoverage.RMs} </h1>

              {locale === "eng" ? <h4>RMs</h4> : <h4>गाउँपालिकाहरू</h4>}
            </div>
            <div className="d-flex flex-column align-items-center p-2 border-right">
              <h1 className="text-blue"> {geographicalCoverage.PNGOs} </h1>

              {locale === "eng" ? (
                <h4>PNGOs</h4>
              ) : (
                <h4>स्थानीय गैरसरकारी संगठनहरू</h4>
              )}
            </div>
            <div className="d-flex flex-column align-items-center p-2">
              <h1 className="text-blue"> {geographicalCoverage.schools} </h1>

              {locale === "eng" ? <h4>Schools</h4> : <h4>विद्यालयहरू</h4>}
            </div>
          </div>
        </div>
      </div>
      <div className="geo-blue-bg">
        <img
          src={map}
          alt="Nepal Map"
          className={locale === "nep" ? "nepal-map-nep" : "nepal-map-eng"}
        />
        <div className="geo-legend">
          <div className="legend-item">
            <div
              className="legend-color"
              style={{ backgroundColor: "red" }}
            ></div>

            {locale === "eng" ? (
              <div className="legend-text">Districts</div>
            ) : (
              <div className="legend-text">जिल्लाहरू</div>
            )}
          </div>
          <div className="legend-item">
            <div
              className="legend-color"
              style={{ backgroundColor: "green" }}
            ></div>

            {locale === "eng" ? (
              <div className="legend-text">RMs</div>
            ) : (
              <div className="legend-text">गाउँपालिकाहरू</div>
            )}
          </div>
          <div className="legend-item">
            <div
              className="legend-color"
              style={{ backgroundColor: "yellow" }}
            ></div>

            {locale === "eng" ? (
              <div className="legend-text">PNGOs</div>
            ) : (
              <div className="legend-text">स्थानीय गैरसरकारी संगठनहरू</div>
            )}
          </div>
          <div className="legend-item">
            <div
              className="legend-color"
              style={{ backgroundColor: "pink" }}
            ></div>

            {locale === "eng" ? (
              <div className="legend-text">Schools</div>
            ) : (
              <div className="legend-text">विद्यालयहरू</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GeographicalCoverage;
