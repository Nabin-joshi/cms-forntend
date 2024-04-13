import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { createNewsLetterUser } from "../../services/NewsLetterUserService";
import { getFooter } from "../../services/footerService";

import footerImage from "../../assets/img/logo-inverted.png";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [footer, setFooter] = useState({});
  const [locale, setLocale] = useState("eng");

  const subscribe = async (event) => {
    event.preventDefault();
    let isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      toast.error("Invalid Email !!!", {
        position: "top-center",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "colored",
      });
      return;
    }
    const name = email.split("@")[0];
    const res = await createNewsLetterUser({ name: name, email: email });
    if (res.success === true) {
      toast.success(`suscribed with email ${email}`);
    }

    setEmail("");
  };

  useEffect(() => {
    async function fetchFooter() {
      try {
        let response = await getFooter();
        setFooter(response.data.data);
      } catch (error) {}
    }
    fetchFooter();

    let locale = localStorage.getItem("locale")
      ? localStorage.getItem("locale")
      : "eng";
    setLocale(locale);
  }, []);
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="footer-logo">
                <img
                  src={footerImage}
                  alt="Koshish Logo"
                  className="img-fluid"
                />
              </div>

              <div className="footer-address text-white">
                <div className="d-flex align-items-center">
                  <i className="fas fa-map-marker-alt"></i>
                  <span className="ml-3">
                    {" "}
                    {locale
                      ? locale === "eng"
                        ? footer.address
                        : footer.addressNepali
                      : "Kusunti, Lalitpur-14, Nepal"}{" "}
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fas fa-phone-alt"></i>
                  <span className="ml-3">
                    Phone:{" "}
                    {locale
                      ? locale === "eng"
                        ? footer.phone
                        : footer.phoneNepali
                      : "(977) 5454545"}{" "}
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fas fa-envelope"></i>
                  <span className="ml-3">
                    {" "}
                    {footer && footer.email
                      ? footer.email
                      : "info@koshishnepal.org"}{" "}
                  </span>
                </div>
              </div>
              <div className="footer-address mt-4 mb-4">
                <div className="font-weight-bold">
                  {locale
                    ? locale === "eng"
                      ? " For any concerns, suggestions or feedback:"
                      : "समस्या, सुझाव वा प्रतिक्रिया को लागि:"
                    : " For any concerns, suggestions or feedback:"}
                </div>
                <div className="d-flex align-items-center">
                  <i className="fas fa-phone"></i>
                  <span className="ml-3">
                    Toll Free{" "}
                    {locale
                      ? locale === "eng"
                        ? footer.tollFreePhone
                        : footer.tollFreePhoneNepali
                      : "(+977) 969.6642.456"}{" "}
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fas fa-envelope"></i>
                  <span className="ml-3">
                    {" "}
                    {footer && footer.email
                      ? footer.feedBackEmail
                      : "feedback@koshish.org.np"}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-4 d-flex justify-content-start justify-content-lg-center">
              <div>
                <h4 className="text-white font-weight-bold">Quick Links</h4>
                <ul className="footer-quick-links text-white">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Our Work</a>
                  </li>
                  <li>
                    <a href="#">Resources</a>
                  </li>
                  <li>
                    <a href="#">Get Involved</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ paddingLeft: "215px" }} className="col-12 col-lg-4">
              <div className="footer-social-icons">
                <h4 className="text-white font-weight-bold">Follow us</h4>
                <div className="d-flex">
                  <a href="#">
                    <i className="fab fa-facebook-f pr-3"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram pr-3"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-x-twitter pr-3"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin pr-3"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
              <div className="make-a-difference mt-4">
                <h4 className="text-white font-weight-bold">
                  Make a difference
                </h4>
                <Link to="/donation">
                  <button className="btn btn-blue border mt-2">
                    <i className="fas fa-hand-holding-heart mr-2"></i>
                    Donate Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-5 topbar-underline text-center">
            <a href="#" className="font-weight-bold">
              <i className="fas fa-users mr-2"></i>Need Help? Call 1166{" "}
            </a>{" "}
            |<a href="#"> Take a mental health test </a> |
            <a href="#"> Terms of Service </a> |<a href="#"> Privacy Policy </a>{" "}
            |<a href="#"> FAQ </a>
            <div className="border-bottom mt-2 mb-2"></div>
            <p className="text-center text-white">
              © 2024 Koshish Nepal. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
