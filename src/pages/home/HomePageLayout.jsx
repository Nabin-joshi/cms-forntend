import React, { useEffect, useState } from "react";
import Header from "../../components/home/Header";
import Slider from "../../components/home/Slider";
import Services from "../../components/home/Services";
import Features from "../../components/home/Features";
import Footer from "../../components/home/Footer";
import { getContent } from "../../services/api";

export default function HomePageLayout() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getContent();
        setData(response.data.blog);
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
            <section className="services">
              <div className="container">
                <div className="section-title">
                  <h2>Our Services</h2>

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
        <Services />
        <Features />
        <Footer />
      </main>
    </>
  );
}
