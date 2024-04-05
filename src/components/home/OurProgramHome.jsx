import React, { useEffect, useState } from "react";
import { getOurProgramData } from "../../services/ourProgramService";
import { useParams } from "react-router-dom";

const OurProgramHome = () => {
  const [field, setFieldValue] = useState("");
  const [locale, setLocale] = useState("eng");

  const { programType } = useParams();
  const fetchFieldValue = async (field) => {
    try {
      const res = await getOurProgramData(field);
      const stateData = res.data.data;
      setFieldValue(stateData[field]);
    } catch (error) {}
  };

  useEffect(() => {
    if (locale === "eng") {
      fetchFieldValue(programType);
    } else if (locale === "nep") {
      fetchFieldValue(programType + "Nepali");
    }
  }, [programType]);

  return (
    <>
      <section class="about-us-section my-3">
        <div class="container">
          <div class="card">
            <div class="card-body">
              <div dangerouslySetInnerHTML={{ __html: field }}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProgramHome;
