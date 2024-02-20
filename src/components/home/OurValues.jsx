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
        <p className="text-center">
          <span>{ourValues.heading}</span>
        </p>
        {ourValues.contents &&
          ourValues.contents.map((data, index) => {
            return (
              <div className="col-md-3">
                <div>
                  <p>{data.title}</p>
                  <p>{data.titleNepali}</p>
                  <video
                    src={data.icon}
                    style={{ height: "200px", width: "200px" }}
                    controls
                    controlsList="nodownload"
                  ></video>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default OurValues;
