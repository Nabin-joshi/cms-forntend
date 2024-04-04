import React, { useEffect, useState } from "react";
import { getNews } from "../../../services/api";
import { useParams } from "react-router-dom";

function LatestNewsReadMore() {
  const [latestNews, setLatestNews] = useState("");
  const [locale, setLocale] = useState("eng");
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getNews();
        setTimeout(() => {
          if (res.data) {
            let individualWork = res.data.news.find(
              (item) => item._id.toString() === id.toString()
            );
            if (individualWork) {
              setLatestNews(individualWork);
            } else {
              setLatestNews(res.data.work[0]);
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
          {locale
            ? locale === "eng"
              ? "Latest News"
              : "नवीनतम समाचार"
            : "Latest News"}
        </h2>
        <div className="d-flex align-items-center justify-content-center flex-wrap flex-lg-nowrap ">
          <div className="">
            <div dangerouslySetInnerHTML={{ __html: latestNews.details }} />
          </div>
        </div>
      </section>
    </>
  );
}

export default LatestNewsReadMore;
