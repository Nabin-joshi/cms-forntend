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
      <section className="our-impact-section position-relative mt-4">
        <div className="border our-impact-content">
          <div className="">
            <h2 className="heading">Our Impact</h2>
          </div>
          <div className="d-flex align-items-center justify-content-center flex-wrap flex-lg-nowrap">
            <div className="our-impact-fields d-flex flex-column">
              <i className="fas fa-bullhorn our-impact-icon"></i>
              <h3 className="our-impact-number">650,230</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
            </div>
            <div className="slash"></div>
            <div className="our-impact-fields d-flex flex-column">
              <i className="fas fa-hands-holding our-impact-icon"></i>
              <h3 className="our-impact-number">650,230</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
            </div>
            <div className="slash"></div>
            <div className="our-impact-fields d-flex flex-column">
              <i className="fas fa-users-gear our-impact-icon"></i>
              <h3 className="our-impact-number">650,230</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurImpacts;
