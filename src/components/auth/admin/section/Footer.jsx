import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

const Footer = () => {
  const [footerContent, setFooterContent] = useState({
    address: "",
    addressNepali: "",
    phone: "",
    phoneNepali: "",
    email: "",
    tollFreePhone: "",
    tollFreePhoneNepali: "",
    feedBackEmail: "",
  });

  const onChange = (e) => {
    setFooterContent({ ...footerContent, [e.target.name]: e.target.value });
  };

  return (
    <>
      {" "}
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Services</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Auth</a>
              </li>
              <li className="breadcrumb-item">Components</li>
              <li className="breadcrumb-item active">services</li>
            </ol>
          </nav>
        </div>
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Services Rich Text Editor</h5>
                  <hr className="border-2" />{" "}
                  <div className="d-flex justify-content-between">
                    <div className="col-md-5">
                      <div className="mb-3">
                        <label className="form-label"> Address </label>
                        <input
                          name="address"
                          onChange={onChange}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-md-5">
                      <div className="mb-3">
                        <label className="form-label"> Address Nepali</label>
                        <input
                          name="addressNepali"
                          onChange={onchange}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ToastContainer />
    </>
  );
};

export default Footer;
