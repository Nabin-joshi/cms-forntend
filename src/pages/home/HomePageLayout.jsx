import React, { useEffect, useState } from "react";
import Header from "../../components/home/Header";
import Slider from "../../components/home/Slider";
import Services from "../../components/home/Services";
import Features from "../../components/home/Features";
import Footer from "../../components/home/Footer";
import {
  getEnglishServiceTextEditorContent,
  getNepaliServiceTextEditorContent,
} from "../../services/api";
import Stories from "../../components/home/Stories";

export default function HomePageLayout() {
  const [data, setData] = useState(null);
  const [selectedLocale, setSelectedLocale] = useState("english");

  const handleOptionChange = async (event) => {
    setSelectedLocale(event.target.value);
    if (event.target.value === "nepali") {
      try {
        const response = await getNepaliServiceTextEditorContent();
        setData(response.data.service);
      } catch (error) {}
    } else if (event.target.value === "english") {
      try {
        const response = await getEnglishServiceTextEditorContent();
        setData(response.data.service);
      } catch (error) {}
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getEnglishServiceTextEditorContent();
        setData(response.data.service);
      } catch (error) {}
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Slider />
      <main>
        {data ? (
          <>
            <section id="homeServces" className="services">
              <div className="container">
                <div className="section-title">
                  <h2>Our Services</h2>
                  <div
                    className="btn-group btn-group-toggle"
                    data-toggle="buttons"
                  >
                    <div>
                      <label className="btn btn-secondary ">
                        <input
                          id="option1"
                          type="radio"
                          name="locale"
                          style={{ appearance: "none" }}
                          checked={selectedLocale === "nepali"}
                          onChange={handleOptionChange}
                          value="nepali"
                        />
                        Nepali
                      </label>
                    </div>
                    <div style={{ marginRight: "10px" }}></div>
                    <div>
                      <label className="btn btn-secondary">
                        <input
                          type="radio"
                          name="locale"
                          style={{ appearance: "none" }}
                          value="english"
                          id="option2"
                          checked={selectedLocale === "english"}
                          onChange={handleOptionChange}
                        />
                        English
                      </label>
                    </div>
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: data.content }} />
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            <div>
              <h1>No Data From api</h1>
            </div>
          </>
        )}
        <Stories />
        <Services />
        <Features />
        <Footer />
      </main>
    </>
  );
}
