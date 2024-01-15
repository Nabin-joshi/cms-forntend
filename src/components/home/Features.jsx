import React from "react";
import featureImage1 from "../../assets/img/features-1.svg";
import featureImage2 from "../../assets/img/features-2.svg";
import featureImage3 from "../../assets/img/features-3.svg";
import featureImage4 from "../../assets/img/features-4.svg";

export default function Features() {
  return (
    <>
      <section className="features">
        <div className="container">
          <div className="section-title">
            <h2>Features</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="row" data-aos="fade-up">
            <div className="col-md-5">
              <img src={featureImage1} className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 pt-4">
              <h3>
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda.
              </h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </li>
                <li>
                  <i className="bi bi-check"></i> Duis aute irure dolor in
                  reprehenderit in voluptate velit.
                </li>
              </ul>
            </div>
          </div>

          <div className="row" data-aos="fade-up">
            <div className="col-md-5 order-1 order-md-2">
              <img src={featureImage2} className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 pt-5 order-2 order-md-1">
              <h3>Corporis temporibus maiores provident</h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
            </div>
          </div>

          <div className="row" data-aos="fade-up">
            <div className="col-md-5">
              <img src={featureImage3} className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 pt-5">
              <h3>
                Sunt consequatur ad ut est nulla consectetur reiciendis animi
                voluptas
              </h3>
              <p>
                Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus
                quia minima quod. Sunt saepe odit aut quia voluptatem hic
                voluptas dolor doloremque.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </li>
                <li>
                  <i className="bi bi-check"></i> Duis aute irure dolor in
                  reprehenderit in voluptate velit.
                </li>
                <li>
                  <i className="bi bi-check"></i> Facilis ut et voluptatem
                  aperiam. Autem soluta ad fugiat.
                </li>
              </ul>
            </div>
          </div>

          <div className="row" data-aos="fade-up">
            <div className="col-md-5 order-1 order-md-2">
              <img src={featureImage4} className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 pt-5 order-2 order-md-1">
              <h3>
                Quas et necessitatibus eaque impedit ipsum animi consequatur
                incidunt in
              </h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
