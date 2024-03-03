import React from "react";

function YourSupport() {
  return (
    <>
      <section className="donate-section">
        <div className="donate-container border-blue p-3">
          <div className="donate-padding">
            <div className="donate-statement">
              <h2 className="text-white font-weight-bold">
                Your support can make a difference
              </h2>
              <p className="text-blue">
                Our work has resulted in positive change. We have rehabilitated
                about mental health conditions and reduced barriers to treatment
                and services. Many persons with mental health conditions have
                sought care and now enjoy fulfilling, productive lives in their
                communities. Help us continue our mission towards our goal.
              </p>
              <button className="btn btn-blue-inverted">
                Donate Now <i className="fas fa-circle-arrow-right ml-2"></i>
              </button>
            </div>

            <div className="donate-quote mt-3">
              <div className="text-blue text-right quote-marks">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis ducimus minima modi dolores, quam voluptatem nobis
                cumque dicta qui amet beatae officiis distinctio nihil, at ad
                dignissimos inventore magnam eius?
                <h4 className="text-blue text-right">John Doe</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default YourSupport;
