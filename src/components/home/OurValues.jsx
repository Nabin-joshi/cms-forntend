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
      <section class="thematic-areas-section position-relative mt-5">
        <div class="border thematic-areas-content">
          <h2 class="heading text-center">{ourValues.heading}</h2>
          <div class="row">
            {ourValues.contents &&
              ourValues.contents.map((data, index) => {
                return (
                  <div class="col-12 col-md-4 d-flex flex-column justify-content-center mb-5">
                    <i class="fas fa-bullhorn our-impact-icon"></i>
                    <h4 class="mt-3">
                      {data.title}/{data.titleNepali}
                    </h4>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurValues;
