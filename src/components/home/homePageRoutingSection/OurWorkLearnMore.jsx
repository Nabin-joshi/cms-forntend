import React, { useEffect, useState } from "react";
import { getSliderData } from "../../../services/api";

function OurWorkLearnMore() {
  const [learnMore, setLearnMore] = useState("");
  const [ourValues, setOurValues] = useState();
  const [locale, setLocale] = useState("eng");

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
    let locale = localStorage.getItem("locale")
      ? localStorage.getItem("locale")
      : "eng";
    setLocale(locale);
  }, []);
  return (
    <>
      <section>
        <h2 className="heading text-center text-blue">
          {" "}
          {locale ? (locale === "eng" ? "Our work" : "हाम्रो काम") : "Our work"}
        </h2>
        <div className="d-flex align-items-center justify-content-center flex-wrap flex-lg-nowrap ">
          <div className="">
            <div dangerouslySetInnerHTML={{ __html: learnMore.learnMore }} />
          </div>
        </div>
      </section>
    </>
  );
}

export default OurWorkLearnMore;
