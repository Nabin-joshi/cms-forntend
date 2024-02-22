import React, { useEffect, useState } from "react";
import { getOurPartnerHeading } from "../../services/ourPartnerService";

const OurPartners = () => {
  const [ourPartners, setourPartners] = useState({});

  async function fetchAllourPartners() {
    try {
      const response = await getOurPartnerHeading();
      setourPartners(response.data.data);
    } catch (error) {}
  }
  useEffect(() => {
    fetchAllourPartners();
  }, []);
  return (
    <>
      <hr />
      <div className="row">
        <p className="text-center">
          {" "}
          <span>
            {ourPartners && ourPartners.heading}/
            {ourPartners && ourPartners.headingNepali}
          </span>
        </p>

        {ourPartners &&
          ourPartners.contents &&
          ourPartners.contents.map((data, index) => {
            return (
              <div className="col-md-3">
                <div>
                  <img
                    style={{ minWidth: "100px", maxWidth: "130px" }}
                    src={data.icon}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default OurPartners;
