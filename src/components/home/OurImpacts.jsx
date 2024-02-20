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
        <span>{ourImpacts.heading}</span>
        {ourImpacts.contents &&
          ourImpacts.contents.map((data, index) => {
            return (
              <div>
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
