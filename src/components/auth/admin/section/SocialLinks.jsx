import React, { useEffect, useState } from "react";
import { getSocialLinks, saveSocialLinks } from "../../../../services/api";
import { toastSuccess } from "../../../../services/ToastService";

const SocialLinks = () => {
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    youtube: "",
    instagram: "",
    x: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getSocialLinks();

        console.log(res.data);
        if (res.data) {
          setSocialLinks(res.data);
        }
      } catch (error) {}
    };

    fetchData();
  }, []);

  const onSubmit = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (socialLinks) {
      await saveSocialLinks(socialLinks);
      toastSuccess();
    }
  };

  return (
    <>
      <main className="main">
        <div className="pagetitle">
          <h1>Social Links</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Auth</a>
              </li>
              <li className="breadcrumb-item">Components</li>
              <li className="breadcrumb-item active">Social Links</li>
            </ol>
          </nav>
        </div>
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Add Social Links</h5>
                  <hr className="border-2" />
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Facebook</label>
                        <input
                          type="text"
                          className="form-control"
                          value={socialLinks.facebook}
                          onChange={(e) =>
                            setSocialLinks({
                              ...socialLinks,
                              facebook: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Youtube</label>
                        <input
                          type="text"
                          className="form-control"
                          value={socialLinks.youtube}
                          onChange={(e) =>
                            setSocialLinks({
                              ...socialLinks,
                              youtube: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Instagram</label>
                        <input
                          type="text"
                          className="form-control"
                          value={socialLinks.instagram}
                          onChange={(e) =>
                            setSocialLinks({
                              ...socialLinks,
                              instagram: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">X</label>
                        <input
                          type="text"
                          className="form-control"
                          value={socialLinks.x}
                          onChange={(e) =>
                            setSocialLinks({
                              ...socialLinks,
                              x: e.target.value,
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
    </>
  );
};

export default SocialLinks;
