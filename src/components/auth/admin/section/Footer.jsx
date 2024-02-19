import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { addFooter, getFooter } from "../../../../services/footerService";

const Footer = () => {
  const [footerData, setFooterData] = useState({
    address: "",
    addressNepali: "",
    phone: "",
    phoneNepali: "",
    email: "",
    tollFreePhone: "",
    tollFreePhoneNepali: "",
    feedBackEmail: "",
  });

  const handleOnChange = async (e) => {
    setFooterData({ ...footerData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await addFooter(footerData);
      toast.success("Footer data saved successfully!", {
        position: "top-center",
        autoClose: 2000,
      });
    } catch (error) {
      toast.error(error.response.data.errormessage, {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  useEffect(() => {
    // Fetch existing footer data if needed
    async function fetchFooterInfo() {
      const response = await getFooter();
      const rData = response.data.data;
      if (rData) {
        setFooterData(rData);
      }
    }
    fetchFooterInfo();
  }, []);

  return (
    <>
      <main className="main">
        <div className="pagetitle">
          <h1>Footer Management</h1>
        </div>
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"> Footer Information</h5>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <label htmlFor="address" className="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          value={footerData.address}
                          name="address"
                          onChange={handleOnChange}
                        />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label htmlFor="addressNepali" className="form-label">
                          Address (Nepali)
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={footerData.addressNepali}
                          id="addressNepali"
                          name="addressNepali"
                          onChange={handleOnChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <label htmlFor="phone" className="form-label">
                          Phone
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={footerData.phone}
                          id="phone"
                          name="phone"
                          onChange={handleOnChange}
                        />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label htmlFor="phoneNepali" className="form-label">
                          Phone (Nepali)
                        </label>
                        <input
                          type="text"
                          value={footerData.phoneNepali}
                          className="form-control"
                          id="phoneNepali"
                          name="phoneNepali"
                          onChange={handleOnChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={footerData.email}
                          onChange={handleOnChange}
                        />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label htmlFor="tollFreePhone" className="form-label">
                          Toll-Free Phone
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="tollFreePhone"
                          name="tollFreePhone"
                          onChange={handleOnChange}
                          value={footerData.tollFreePhone}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <label
                          htmlFor="tollFreePhoneNepali"
                          className="form-label"
                        >
                          Toll-Free Phone (Nepali)
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="tollFreePhoneNepali"
                          name="tollFreePhoneNepali"
                          onChange={handleOnChange}
                          value={footerData.tollFreePhoneNepali}
                        />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label htmlFor="feedbackEmail" className="form-label">
                          Feedback Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="feedbackEmail"
                          name="feedBackEmail"
                          onChange={handleOnChange}
                          value={footerData.feedBackEmail}
                        />
                      </div>
                    </div>
                    <div className="row text-center">
                      <div className="col-md-12">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                          onClick={handleSubmit}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
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
