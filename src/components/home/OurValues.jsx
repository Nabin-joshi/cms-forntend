import React, { useEffect, useState } from "react";
import { getOurValuesHeading } from "../../services/ourValuesService";

const OurValues = () => {
  const [ourValues, setOurValues] = useState({});

  async function fetchAllOurValues() {
    try {
      const response = await getOurValuesHeading();
      setOurValues(response.data.data);
    } catch (error) {}
  }
  useEffect(() => {
    fetchAllOurValues();
  }, []);
  return (
    <>
      <section className="thematic-areas-section position-relative mt-5">
        <div className="border thematic-areas-content">
          <h2 className="heading text-center">Our Values/Thematic Areas</h2>
          <div className="row">
            <div className="col-12 col-md-4 d-flex flex-column justify-content-center mb-5">
              <i className="fas fa-bullhorn our-impact-icon"></i>
              <h4 className="mt-3">Empowerment</h4>
            </div>
            <div className="col-12 col-md-4 d-flex flex-column justify-content-center mb-5">
              <i className="fas fa-hands-holding our-impact-icon"></i>
              <h4 className="mt-3">Empowerment</h4>
            </div>
            <div className="col-12 col-md-4 d-flex flex-column justify-content-center mb-5">
              <i className="fas fa-users-gear our-impact-icon"></i>
              <h4 className="mt-3">Empowerment</h4>
            </div>
            <div className="col-12 col-md-4 d-flex flex-column justify-content-center mb-5">
              <i className="fas fa-graduation-cap our-impact-icon"></i>
              <h4 className="mt-3">Empowerment</h4>
            </div>
            <div className="col-12 col-md-4 d-flex flex-column justify-content-center mb-5">
              <i className="fas fa-handshake our-impact-icon"></i>
              <h4 className="mt-3">Empowerment</h4>
            </div>
            <div className="col-12 col-md-4 d-flex flex-column justify-content-center mb-5">
              <i className="fas fa-book our-impact-icon"></i>
              <h4 className="mt-3">Empowerment</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurValues;
