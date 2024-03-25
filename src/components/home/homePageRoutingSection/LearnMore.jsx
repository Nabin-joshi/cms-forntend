import React, { useEffect, useState } from "react";
import { getSliderData } from "../../../services/api";

export default function LearnMore() {
  const [learnMore, setLearnMore] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getSliderData();
        if (res) {
          setLearnMore(res.data.slider);
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
            <div dangerouslySetInnerHTML={{ __html: learnMore.learnMore }} />
          </div>
        </div>
      </section>
    </>
  );
}
