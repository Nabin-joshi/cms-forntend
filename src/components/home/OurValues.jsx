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
      <hr />
      <div className="row">
        <span>{ourValues.heading}</span>
        {ourValues.contents &&
          ourValues.contents.map((data, index) => {
            return (
              <div>
                <div>
                  <p>{data.title}</p>
                  <p>{data.titleNepali}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default OurValues;
