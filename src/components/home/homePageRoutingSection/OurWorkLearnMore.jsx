import React, { useEffect, useState } from "react";
import { getOurwork, getSliderData } from "../../../services/api";
import { useParams } from "react-router-dom";

function OurWorkLearnMore() {
  const [ourWork, setOurWork] = useState("");
  const [locale, setLocale] = useState("eng");
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getOurwork();
        setTimeout(() => {
          if (res.data) {
            let individualWork = res.data.work.find(
              (item) => item._id.toString() === id.toString()
            );
            if (individualWork) {
              setOurWork(individualWork);
            } else {
              setOurWork(res.data.work[0]);
            }
          }
        });
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
            <div dangerouslySetInnerHTML={{ __html: ourWork.details }} />
          </div>
        </div>
      </section>
    </>
  );
}

export default OurWorkLearnMore;
