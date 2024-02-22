import React, { useEffect, useState } from "react";
import { getTheJourneyHeading } from "../../services/theJourneyService";

const TheJourney = () => {
  const [theJourney, setTheJourney] = useState({});

  async function fetchAllTheJourney() {
    try {
      const response = await getTheJourneyHeading();
      setTheJourney(response.data.data);
    } catch (error) {}
  }
  useEffect(() => {
    fetchAllTheJourney();
  }, []);
  return (
    <>
      <hr />
      <div className="row">
        <p className="text-center">
          {" "}
          <span>
            {theJourney && theJourney.heading}/
            {theJourney && theJourney.headingNepali}
          </span>
        </p>
        <p className="text-center">
          {" "}
          <span>
            {theJourney && theJourney.subHeading}/
            {theJourney && theJourney.subHeadingNepali}
          </span>
        </p>

        {theJourney &&
          theJourney.contents &&
          theJourney.contents.map((data, index) => {
            return (
              <div className="col-md-3">
                <div>
                  <p>
                    {data.date}/{data.dateNepali}
                  </p>
                  <p>
                    {data.desc}/{data.descNepali}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default TheJourney;
