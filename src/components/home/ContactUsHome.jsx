import { Input } from "@mui/joy";
import React, { useEffect, useState } from "react";
import {
  createGetInTouch,
  getContactUsData,
} from "../../services/ContactUsService";
import { toast } from "react-toastify";
import Accessibility from "./Accessibility";
import contactUsHeaderImage from "../../assets/img/cover.jpg";
const ContactUsHome = () => {
  const [contactUs, setContactUs] = useState({
    header: "",
    headerImage: "",
    description: "",
    phone: "",
    address: "",
    email: "",
  });

  const [getInTouch, setGetInTouch] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleGetInTouchOnChange = (event) => {
    const touchName = event.target.name;
    const touchValue = event.target.value;
    setGetInTouch((prevData) => ({ ...prevData, [touchName]: touchValue }));
  };

  const submitGetInTouch = async (event) => {
    event.preventDefault();
    try {
      const submitGetInTouchData = await createGetInTouch(getInTouch);
      toast.success("send successfully");
    } catch (error) {
      toast.error(error.response.data.errormessage);
    }
  };

  const [locale, setLocale] = useState("nep");
  const fetchContactUs = async () => {
    try {
      const res = await getContactUsData();
      const resData = res.data.data;
      let processedResponseData = {
        header: "",
        description: "",
        phone: "",
        address: "",
        headerImage: "",
        email: "",
      };

      if (locale === "eng") {
        processedResponseData.header = resData.header;
        processedResponseData.description = resData.description;
        processedResponseData.phone = resData.phone;
        processedResponseData.address = resData.address;
      } else if (locale === "nep") {
        processedResponseData.header = resData.headerNepali;
        processedResponseData.description = resData.descriptionNepali;
        processedResponseData.phone = resData.phoneNepali;
        processedResponseData.address = resData.addressNepali;
      }
      processedResponseData.headerImage = resData.headerImage;
      processedResponseData.email = resData.email;
      setContactUs(processedResponseData);
    } catch (error) {}
  };

  useEffect(() => {
    fetchContactUs();
  }, []);
  return (
    <>
      <main>
        <Accessibility />
        <section className="about-us-section">
          <div
            className="banner"
            style={{
              backgroundImage: `url(${contactUsHeaderImage})`,
            }}
          >
            <div className="banner-content">
              <h1 className="text-white text-center">Contact Koshish</h1>
            </div>
          </div>
        </section>

        <section className="about-us-section my-3">
          <div className="container">
            <div className="card">
              <section className="container my-5">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <h2>Contact Us</h2>
                    <p>
                      For any queries, feedback or suggestions, feel free to
                      contact us. We are here to help you.
                    </p>

                    <div className="contact-info">
                      <div className="d-flex align-items-center mb-3">
                        <i className="address-icon fas fa-map-marker-alt"></i>
                        <span className="ml-3">{contactUs.address}</span>
                      </div>
                      <div className="d-flex align-items-center mb-3">
                        <i className="address-icon fas fa-phone-alt"></i>
                        <span className="ml-3">{contactUs.phone}</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="address-icon fas fa-envelope"></i>
                        <span className="ml-3">{contactUs.email}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <h2>Get in Touch</h2>
                    <form>
                      <div className="form-group">
                        <label for="name">Name </label>
                        <Input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Enter your name"
                          value={getInTouch.name}
                          onChange={handleGetInTouchOnChange}
                        />
                      </div>
                      <div className="form-group">
                        <label for="email">Email address</label>
                        <Input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Enter your email"
                          value={getInTouch.email}
                          onChange={handleGetInTouchOnChange}
                        />
                      </div>
                      <div className="form-group">
                        <label for="message">Message</label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows="5"
                          placeholder="Enter your message"
                          value={getInTouch.message}
                          onChange={handleGetInTouchOnChange}
                        ></textarea>
                      </div>
                      <button
                        className="btn btn-primary"
                        onClick={submitGetInTouch}
                      >
                        Submit
                      </button>
                    </form>

                    <div className="mt-4">
                      <h5>Connect with Us</h5>
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a href="https://www.facebook.com/koshishnepalofficial">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="https://twitter.com/koshish_org">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="https://www.instagram.com/koshishofficial/">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="https://www.linkedin.com/in/koshish-nepal-b98534286/">
                            <i className="fab fa-linkedin"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="https://www.youtube.com/@Koshishnepal">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="container mb-5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.9596256680697!2d85.311472975134!3d27.656720827723117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1738324add6b%3A0x414bc6295c8abb5c!2sKoshish%20-%20National%20Mental%20Health%20Self%20Help%20Organization!5e0!3m2!1sen!2snp!4v1710984254331!5m2!1sen!2snp"
                  width="100%"
                  height="450"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactUsHome;
