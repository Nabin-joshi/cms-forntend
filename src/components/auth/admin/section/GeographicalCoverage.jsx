import React, { useEffect, useState } from "react";
import {
  getEnglishGeographicalCoverage,
  getNepaliGeographicalCoverage,
  saveEnglishGeographicalCoverage,
  saveNepaliGeographicalCoverage,
} from "../../../../services/api";
import { ToastContainer, toast } from "react-toastify";

function GeographicalCoverage() {
  const [englishGeographicalCoverage, setEnglishGeographicalCoverage] =
    useState({
      districts: "",
      RMs: "",
      PNGOs: "",
      schools: "",
    });

  const [nepaliGeographicalCoverage, setNepaliGeographicalCoverage] = useState({
    districts: "",
    RMs: "",
    PNGOs: "",
    schools: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const englishResponse = await getEnglishGeographicalCoverage();

        const nepaliResponse = await getNepaliGeographicalCoverage();

        if (englishResponse) {
          setEnglishGeographicalCoverage(
            englishResponse.data.geographicalCoverage
          );
        }
        if (nepaliResponse) {
          setNepaliGeographicalCoverage(
            nepaliResponse.data.geographicalCoverage
          );
        }
      } catch (error) {}
    };

    fetchData();
  }, []);

  const onSubmit = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      await saveEnglishGeographicalCoverage(englishGeographicalCoverage);
      await saveNepaliGeographicalCoverage(nepaliGeographicalCoverage);
      toast.success("Content Saved Successfully!", {
        position: "top-center",
        autoClose: 700,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "colored",
      });
    } catch (error) {
      toast.error("Something Went Wrong!", {
        position: "top-center",
        autoClose: 700,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <main className="main">
        <div className="pagetitle">
          <h1>Geographical Coverage</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Auth</a>
              </li>
              <li className="breadcrumb-item">Components</li>
              <li className="breadcrumb-item active">Geographical Coverage</li>
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
                        <label className="form-label">District</label>
                        <input
                          type="text"
                          className="form-control"
                          value={englishGeographicalCoverage.districts}
                          onChange={(e) =>
                            setEnglishGeographicalCoverage({
                              ...englishGeographicalCoverage,
                              districts: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">RMs</label>
                        <input
                          type="text"
                          className="form-control"
                          value={englishGeographicalCoverage.RMs}
                          onChange={(e) =>
                            setEnglishGeographicalCoverage({
                              ...englishGeographicalCoverage,
                              RMs: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">PNGOs</label>
                        <input
                          type="text"
                          className="form-control"
                          value={englishGeographicalCoverage.PNGOs}
                          onChange={(e) =>
                            setEnglishGeographicalCoverage({
                              ...englishGeographicalCoverage,
                              PNGOs: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Schools</label>
                        <input
                          type="text"
                          className="form-control"
                          value={englishGeographicalCoverage.schools}
                          onChange={(e) =>
                            setEnglishGeographicalCoverage({
                              ...englishGeographicalCoverage,
                              schools: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <h4 className="card-title">Nepali </h4>
                      <hr className="border-2" />
                      <div className="mb-3">
                        <label className="form-label">District</label>
                        <input
                          type="text"
                          className="form-control"
                          value={nepaliGeographicalCoverage.districts}
                          onChange={(e) =>
                            setNepaliGeographicalCoverage({
                              ...nepaliGeographicalCoverage,
                              districts: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">RMs</label>
                        <input
                          type="text"
                          className="form-control"
                          value={nepaliGeographicalCoverage.RMs}
                          onChange={(e) =>
                            setNepaliGeographicalCoverage({
                              ...nepaliGeographicalCoverage,
                              RMs: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">PNGOs</label>
                        <input
                          type="text"
                          className="form-control"
                          value={nepaliGeographicalCoverage.PNGOs}
                          onChange={(e) =>
                            setNepaliGeographicalCoverage({
                              ...nepaliGeographicalCoverage,
                              PNGOs: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Schools</label>
                        <input
                          type="text"
                          className="form-control"
                          value={nepaliGeographicalCoverage.schools}
                          onChange={(e) =>
                            setNepaliGeographicalCoverage({
                              ...nepaliGeographicalCoverage,
                              schools: e.target.value,
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
}

export default GeographicalCoverage;
