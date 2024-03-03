import React from "react";

import ourWorkImage1 from "../../assets/img/work-1.png";
import ourWorkImage2 from "../../assets/img/work-2.png";
import ourWorkImage3 from "../../assets/img/work-3.png";

function OurWork() {
  return (
    <>
      <section className="mt-5">
        <div className="container">
          <h2 className="heading text-center text-blue">Our Work</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis placeat pariatur iusto tempore? Nostrum, earum tempora
            officia vel dolorem, veniam consequatur a reprehenderit ut nam
            eveniet ipsum, totam delectus natus!
          </p>
          <div className="row">
            <div className="col-12 col-lg-4 mb-4">
              <div className="our-work-card topbar-underline">
                <img
                  src={ourWorkImage1}
                  alt="Our Work 1"
                  className="img-fluid"
                />
                <h3 className="font-weight-bold text-blue">Education</h3>
                <a href="#" className="text-blue-grey">
                  Learn More <i className="fas fa-circle-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-4">
              <div className="our-work-card topbar-underline">
                <img
                  src={ourWorkImage2}
                  alt="Our Work 1"
                  className="img-fluid"
                />
                <h3 className="font-weight-bold text-blue">Education</h3>
                <a href="#" className="text-blue-grey">
                  Learn More <i className="fas fa-circle-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-4">
              <div className="our-work-card topbar-underline">
                <img
                  src={ourWorkImage3}
                  alt="Our Work 1"
                  className="img-fluid"
                />
                <h3 className="font-weight-bold text-blue">Education</h3>
                <a href="#" className="text-blue-grey">
                  Learn More <i className="fas fa-circle-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-blue-inverted mt-3">
              View All <i className="fas fa-circle-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurWork;
