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
      <div className="row">
        <p className="text-center">
          {" "}
          <span>{ourImpacts.heading}</span>
        </p>

        {ourImpacts.contents &&
          ourImpacts.contents.map((data, index) => {
            return (
              <div className="col-md-3">
                <div>
                  <p>{data.count}</p>
                  <p>{data.countNepali}</p>
                  <p>{data.count}</p>
                  <p>{data.descNepali}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default OurImpacts;
