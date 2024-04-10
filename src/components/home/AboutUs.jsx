import React, { useEffect, useState } from "react";
import { getAboutUs } from "../../services/aboutUsService";
import { json, useParams } from "react-router-dom";

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
    // history: setHistory,
    // whoWeAre: setWhoWeAre,
    // ourValues: setOurValues,
    // vision: setVision,
    // mission: setMission,
    // goal: setGoal,
    // ourThematicAreas: setOurThematicAreas,
    // boardCommittees: setBoardCommittees,
    // ourApproach: setOurApproach,
  };

  const [fieldValue, setFieldValue] = useState("");
  const { fieldName } = useParams();

  useEffect(() => {
    const fetchFieldData = async (field, locale = "") => {
      try {
        const resp = await getAboutUs(field + locale);
        const data = resp.data.data;
        setFieldValue(data[field + locale]);
      } catch (error) {}
    };

    if (locale === "eng") {
      fetchFieldData(fieldName);
    } else if (locale === "nep") {
      fetchFieldData(fieldName, "Nepali");
    }
    // const fieldsArray = Object.keys(stateDatas);

    // async function fetchAboutUs(field, locale = "") {
    //   try {
    //     const resp = getAboutUs(field + locale);
    //     const data = (await resp).data.data;
    //     let fieldkey = field;

    //     const setData = stateDatas[fieldkey];
    //     setData(data[fieldkey + locale]);
    //   } catch (error) {}
    // }

    // fieldsArray.forEach((field) => {
    //   if (field === "ourThematicAreas" || field === "boardCommittees") {
    //     fetchAboutUs(field);
    //   } else {
    //     if (locale === "eng") {
    //       fetchAboutUs(field);
    //     } else if (locale === "nep") {
    //       fetchAboutUs(field, "Nepali");
    //     }
    //   }
    // });
  }, [fieldName]);

  return (
    <>
      <section className="about-us-section my-3">
        <div className="about-us-container">
          <div className="card">
            <div className="card-body">
              {fieldName === "history" && (
                <h1 className="text-center text-blue">History </h1>
              )}
              {fieldName === "whoWeAre" && (
                <h1 className="text-center text-blue">Introduction </h1>
              )}
              {fieldName === "boardCommittees" && (
                <h1 className="text-center text-blue">Our Team </h1>
              )}

              {fieldName !== "boardCommittees" && (
                <p dangerouslySetInnerHTML={{ __html: fieldValue }}></p>
              )}
              {fieldName === "boardCommittees" && (
                <div>
                  <h5 className="ml-2">Board Members</h5>
                  <br />
                  <div
                    style={{
                      display: "flex",
                      direction: "row",
                      flexWrap: "wrap",
                      alignContent: "space-between",
                    }}
                  >
                    {fieldName === "boardCommittees" &&
                      fieldValue &&
                      Array.isArray(fieldValue) &&
                      fieldValue.map((item, index) => {
                        if (item.role === "Board Member") {
                          return (
                            <>
                              <div className="ml-2">
                                <div className="card">
                                  <div className="card-body">
                                    {item.photo && (
                                      <img
                                        src={item.photo}
                                        alt="No Img"
                                        style={{
                                          height: "15rem",
                                          width: "15rem",
                                        }}
                                      />
                                    )}
                                    <p>{item.name}</p>
                                    <p>{item.role}</p>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        }
                      })}
                  </div>
                </div>
              )}
              <hr></hr>

              {fieldName === "boardCommittees" && (
                <div>
                  <h5 className="ml-2">Staff</h5>
                  <br />
                  <div
                    style={{
                      display: "flex",
                      direction: "row",
                      flexWrap: "wrap",
                      alignContent: "space-between",
                    }}
                  >
                    {fieldValue &&
                      fieldName === "boardCommittees" &&
                      Array.isArray(fieldValue) &&
                      fieldValue.map((item, index) => {
                        if (item.role === "Staff") {
                          return (
                            <>
                              {" "}
                              <div className="ml-2">
                                <div className="card">
                                  <div className="card-body">
                                    {item.photo && (
                                      <img
                                        src={item.photo}
                                        alt="No Img"
                                        style={{
                                          height: "15rem",
                                          width: "15rem",
                                        }}
                                      />
                                    )}
                                    <p>{item.name}</p>
                                    <p>{item.role}</p>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        } else return;
                      })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
