import React, { useEffect, useState } from "react";
import {
  getEnglishSliderContent,
  getNepaliSliderContent,
} from "../../../services/api";

export default function LearnMore() {
  const [englishContent, setEnglishContent] = useState("");
  const [nepaliContent, setNepaliContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const englishResponse = await getEnglishSliderContent();

        const nepaliResponse = await getNepaliSliderContent();
        if (englishResponse) {
          setEnglishContent(englishResponse.data.slider);
        }
        if (nepaliResponse) {
          setNepaliContent(nepaliResponse.data.slider);
        }
      } catch (error) {}
    };

    fetchData();
  }, []);
  return (
    <>
      <section>
        <div className="d-flex align-items-center justify-content-center flex-wrap flex-lg-nowrap ">
          <div className="">
            <div
              dangerouslySetInnerHTML={{ __html: englishContent.learnMore }}
            />
          </div>
        </div>
        {/* <div className="d-flex justify-content-between ">
            <div style={{ margin: "10px" }} className="col-6">
              <h3>Nepali Content</h3>
              <div
                dangerouslySetInnerHTML={{ __html: nepaliContent.learnMore }}
              />
            </div>

            <div style={{ margin: "10px" }} className="col-6">
              <h3>English Content</h3>
              <div
                dangerouslySetInnerHTML={{ __html: englishContent.learnMore }}
              />
            </div>
          </div> */}
      </section>
    </>
  );
}
