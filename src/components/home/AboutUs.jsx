import React, { useEffect, useState } from "react";
import { getAboutUs } from "../../services/aboutUsService";
import { json } from "react-router-dom";

const AboutUs = () => {
  const [history, setHistory] = useState("");
  const [whoWeAre, setWhoWeAre] = useState("");
  const [ourValues, setOurValues] = useState("");
  const [vision, setVision] = useState("");
  const [mission, setMission] = useState("");
  const [goal, setGoal] = useState("");
  const [ourThematicAreas, setOurThematicAreas] = useState([]);
  const [boardCommittees, setBoardCommittees] = useState([]);
  const [ourApproach, setOurApproach] = useState("");
  const [locale, setLocale] = useState("eng");
  const stateDatas = {
    history: setHistory,
    whoWeAre: setWhoWeAre,
    ourValues: setOurValues,
    vision: setVision,
    mission: setMission,
    goal: setGoal,
    ourThematicAreas: setOurThematicAreas,
    boardCommittees: setBoardCommittees,
    ourApproach: setOurApproach,
  };

  useEffect(() => {
    const fieldsArray = Object.keys(stateDatas);

    async function fetchAboutUs(field, locale = "") {
      try {
        const resp = getAboutUs(field + locale);
        const data = (await resp).data.data;
        let fieldkey = field;

        const setData = stateDatas[fieldkey];
        setData(data[fieldkey + locale]);
      } catch (error) {}
    }

    fieldsArray.forEach((field) => {
      if (field === "ourThematicAreas" || field === "boardCommittees") {
        fetchAboutUs(field);
      } else {
        if (locale === "eng") {
          fetchAboutUs(field);
        } else if (locale === "nep") {
          fetchAboutUs(field, "Nepali");
        }
      }
    });
  }, []);

  return (
    <>
      <section class="about-us-section my-3">
        <div class="container">
          <div class="card">
            <div class="card-body">
              <h1 class="text-center text-blue">About Us</h1>
              <h3 class="text-center mt-3 ">History</h3>
              <p dangerouslySetInnerHTML={{ __html: history }}>{}</p>

              <h3 class="text-center mt-3">Introduction</h3>
              <p dangerouslySetInnerHTML={{ __html: whoWeAre }}></p>

              <div class="card p-3 mt-3">
                <h3 class="text-center mt-3">Our Vision</h3>
                <p dangerouslySetInnerHTML={{ __html: vision }}></p>
              </div>
              <div class="card p-3 mt-3">
                <h3 class="text-center mt-3">Our Mission</h3>
                <p dangerouslySetInnerHTML={{ __html: mission }}></p>
              </div>
              <div class="card p-3 mt-3 mb-3">
                <h3 class="text-center mt-3">Our Goal</h3>
                <p dangerouslySetInnerHTML={{ __html: goal }}></p>
              </div>
              <h3 class="text-center mt-3">Our Approach</h3>
              <div class="card p-3 mt-3 mb-3">
                <p dangerouslySetInnerHTML={{ __html: ourApproach }}></p>
              </div>
              <h3 class="text-center mt-3">Our Thematic Areas</h3>
              <div class="row">
                {ourThematicAreas &&
                  ourThematicAreas.map((item, index) => {
                    return locale === "eng" ? (
                      <div class="col-12 col-md-6 col-xl-3" key={index}>
                        <div class="card p-3 mt-3">
                          <h4 class="text-center text-blue ">{item.title}</h4>
                        </div>
                      </div>
                    ) : (
                      <div class="col-12 col-md-6 col-xl-3" key={index}>
                        <div class="card p-3 mt-3">
                          <h4 class="text-center text-blue ">
                            {item.titleNepali}
                          </h4>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <h3 class="text-center mt-3">Our Team</h3>
              <table class="team-table table table-striped">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Position</th>
                  </tr>
                  {boardCommittees &&
                    boardCommittees.map((item, index) => {
                      return locale === "eng" ? (
                        <tr key={item._id}>
                          <td>{item.name}</td>
                          <td>{item.gender}</td>
                          <td>{item.position}</td>
                        </tr>
                      ) : (
                        <tr key={item._id}>
                          <td>{item.nameNepali}</td>
                          <td>{item.gender}</td>
                          <td>{item.position}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
              <h3 class="text-center mt-3">Staff</h3>
              <p>Central Office</p>
              <p>Field Office</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
