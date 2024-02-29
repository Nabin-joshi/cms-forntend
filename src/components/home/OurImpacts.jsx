import React, { useEffect, useState } from "react";
import { getAllOurImpacts } from "../../services/ourImpactService";

const OurImpacts = () => {
  const [ourImpacts, setOurImpacts] = useState({});

  async function fetchAllOurImpacts() {
    try {
      const response = await getAllOurImpacts();
      setOurImpacts(response.data.data);
    } catch (error) {}
  }
  useEffect(() => {
    fetchAllOurImpacts();
  }, []);
  return (
    <>
      <section class="our-impact-section position-relative mt-4">
        <div class="border our-impact-content">
          <div class="">
            <h2 class="heading">{ourImpacts.heading}</h2>
          </div>
          <div class="d-flex align-items-center justify-content-center flex-wrap flex-lg-nowrap">
            {ourImpacts.contents &&
              ourImpacts.contents.map((data, index) => {
                return (
                  <>
                    <div class="slash"></div>
                    <div class="our-impact-fields d-flex flex-column">
                      <i class="fas fa-users-gear our-impact-icon"></i>
                      <h3 class="our-impact-number">
                        {data.count}/{data.countNepali}
                      </h3>
                      <p>
                        {data.desc}/{data.descNepali}
                      </p>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurImpacts;
