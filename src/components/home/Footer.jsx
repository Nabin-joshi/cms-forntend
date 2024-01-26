import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer
        id="footer"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="500"
      >
        <div className="footer-newsletter">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h4>Our Newsletter</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
              </div>
              <div className="col-lg-6">
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="/">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/">About us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/">Services</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/">Terms of service</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/">Empowerment Approach</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/">UNCRPD</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/">Constitution of Nepal</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/">Disability Rights Act-Nepali</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/">National Health Policy</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  Lalitpur Metropolitan <br />
                  City-14 Kusunti,Lalitpur
                  <br />
                  NEPAL <br />
                  <br />
                  <strong>Phone:</strong> +977 1 5121230
                  <br />
                  <strong>Email:</strong> info@koshishnepal.org
                  <br />
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-info">
                <h3>About Koshish Nepal</h3>
                <p>
                  Established in 2008, KOSHISH, a National Mental Health
                  Organization is working in the promotion of mental health and
                  psychosocial well-being in Nepal. KOSHISH promotes
                  self-advocacy in the spirit of “NOTHING ABOUT US WITHOUT US.”
                  KOSHISH aims to create model recovery oriented person centered
                  mental health services, which includes mental health and
                  psychosocial support (MHPSS) in health as well as beyond the
                  health system (i.e. social protection, employment, etc.) that
                  is replicable by the government and other stakeholders.
                </p>
                <div className="social-links mt-3">
                  <a href="/" className="twitter">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="/" className="facebook">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="/" className="instagram">
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a href="/" className="linkedin">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Koshish Nepal</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by <NavLink>Volcosoft pvt ltd</NavLink>
          </div>
        </div>
      </footer>
      <a
        href="/"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}
