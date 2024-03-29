import React, { useEffect, useState } from "react";
import {
  getAllSupportData,
  saveEnglishYourSupportData,
  saveNepaliYourSupportData,
} from "../../../../services/api";
import { ToastContainer } from "react-toastify";
import { toastError, toastSuccess } from "../../../../services/ToastService";
const YourSupport = () => {
  const [englishYourSupport, setEnglishYourSupport] = useState({
    header: "",
    details: "",
    description: "",
    quotation: "",
    quotationBy: "",
  });

  const [nepaliYourSupport, setNepaliYourSupport] = useState({
    header: "",
    details: "",
    description: "",
    quotation: "",
    quotationBy: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await getAllSupportData();
        if (res.data.yourSupport) {
          res.data.yourSupport.forEach((item) => {
            if (item.locale === "eng") {
              setEnglishYourSupport((prevState) => ({
                ...prevState,
                header: item.header,
                details: item.details,
                description: item.description,
                quotation: item.quotation,
                quotationBy: item.quotationBy,
              }));
            } else if (item.locale === "nep") {
              setNepaliYourSupport((prevState) => ({
                ...prevState,
                header: item.header,
                details: item.details,
                description: item.description,
                quotation: item.quotation,
                quotationBy: item.quotationBy,
              }));
            }
          });
        }
      } catch (error) {}
    };

    fetchData();
  }, []);

  const onSubmit = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      if (englishYourSupport) {
        await saveEnglishYourSupportData(englishYourSupport);
      }

      if (nepaliYourSupport) {
        await saveNepaliYourSupportData(nepaliYourSupport);
      }

      toastSuccess();
    } catch (error) {
      console.log(error);
      toastError();
    }
  };

  return (
    <>
      <main className="main">
        <div className="pagetitle">
          <h1>Your Support</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Auth</a>
              </li>
              <li className="breadcrumb-item">Components</li>
              <li className="breadcrumb-item active">Your Support</li>
            </ol>
          </nav>
        </div>
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Add </h5>
                  <hr className="border-2" />
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="card-title">English </h4>
                      <hr className="border-2" />
                      <div className="mb-3">
                        <label className="form-label">Header</label>
                        <input
                          type="text"
                          className="form-control"
                          value={englishYourSupport.header}
                          onChange={(e) =>
                            setEnglishYourSupport({
                              ...englishYourSupport,
                              header: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Details</label>
                        <input
                          type="text"
                          className="form-control"
                          value={englishYourSupport.details}
                          onChange={(e) =>
                            setEnglishYourSupport({
                              ...englishYourSupport,
                              details: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input
                          type="text"
                          className="form-control"
                          value={englishYourSupport.description}
                          onChange={(e) =>
                            setEnglishYourSupport({
                              ...englishYourSupport,
                              description: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Quotation</label>
                        <input
                          type="text"
                          className="form-control"
                          value={englishYourSupport.quotation}
                          onChange={(e) =>
                            setEnglishYourSupport({
                              ...englishYourSupport,
                              quotation: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Quotation By</label>
                        <input
                          type="text"
                          className="form-control"
                          value={englishYourSupport.quotationBy}
                          onChange={(e) =>
                            setEnglishYourSupport({
                              ...englishYourSupport,
                              quotationBy: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <h4 className="card-title">Nepali </h4>
                      <hr className="border-2" />
                      <div className="mb-3">
                        <label className="form-label">Header</label>
                        <input
                          type="text"
                          className="form-control"
                          value={nepaliYourSupport.header}
                          onChange={(e) =>
                            setNepaliYourSupport({
                              ...nepaliYourSupport,
                              header: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Details</label>
                        <input
                          type="text"
                          className="form-control"
                          value={nepaliYourSupport.details}
                          onChange={(e) =>
                            setNepaliYourSupport({
                              ...nepaliYourSupport,
                              details: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Desription</label>
                        <input
                          type="text"
                          className="form-control"
                          value={nepaliYourSupport.description}
                          onChange={(e) =>
                            setNepaliYourSupport({
                              ...nepaliYourSupport,
                              description: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Quotation</label>
                        <input
                          type="text"
                          className="form-control"
                          value={nepaliYourSupport.quotation}
                          onChange={(e) =>
                            setNepaliYourSupport({
                              ...nepaliYourSupport,
                              quotation: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Quotation By</label>
                        <input
                          type="text"
                          className="form-control"
                          value={nepaliYourSupport.quotationBy}
                          onChange={(e) =>
                            setNepaliYourSupport({
                              ...nepaliYourSupport,
                              quotationBy: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    style={{ marginTop: "10px" }}
                    className="d-flex justify-content-center"
                  >
                    <button
                      onClick={(e) => onSubmit(e)}
                      type="button"
                      className="btn btn-primary "
                    >
                      Save
                    </button>
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

export default YourSupport;
