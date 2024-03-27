import React, { useEffect, useState } from "react";
import { getInvolvedData } from "../../services/getInvolvedService";

export const GetInvolvedHome = () => {
  const [vacancy, setVacancy] = useState("");
  const [procurement, setProcurement] = useState("");
  const [volunteer, setVolunteer] = useState("");
  const [donate, setDonate] = useState("");
  const [locale, setLocale] = useState("nep");
  const stateDatas = {
    vacancy: setVacancy,
    procurement: setProcurement,
    volunteer: setVolunteer,
    donate: setDonate,
  };

  const stateKeys = Object.keys(stateDatas);
  useEffect(() => {
    const getDatasForGetInvolved = async (field, locale = "") => {
      try {
        const res = await getInvolvedData(field + locale);
        const statedData = res.data.data;
        const stateUpdateFunc = stateDatas[field];
        stateUpdateFunc(statedData);
      } catch (error) {}
    };

    stateKeys.forEach((state) => {
      if (locale.toLocaleLowerCase() === "eng") {
        getDatasForGetInvolved(state);
      } else if (locale.toLocaleLowerCase() === "nep") {
        getDatasForGetInvolved(state, "Nepali");
      }
    });
  }, []);

  return (
    <div>
      {" "}
      <section class="about-us-section my-3">
        <div class="container">
          <div class="card">
            <div class="card-body">
              <h3 class="text-center mt-3 ">Vacancy</h3>
              <p dangerouslySetInnerHTML={{ __html: vacancy }}>{}</p>

              <h3 class="text-center mt-3">Procurement </h3>
              <p dangerouslySetInnerHTML={{ __html: procurement }}></p>

              <div class="card p-3 mt-3">
                <h3 class="text-center mt-3">Volunteer </h3>
                <p dangerouslySetInnerHTML={{ __html: volunteer }}></p>
              </div>
              <div class="card p-3 mt-3">
                <h3 class="text-center mt-3">Donate</h3>
                <p dangerouslySetInnerHTML={{ __html: donate }}></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
