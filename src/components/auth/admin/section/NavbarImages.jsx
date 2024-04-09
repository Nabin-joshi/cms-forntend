import React, { useEffect, useRef, useState } from "react";
import { getAboutUs } from "../../../../services/aboutUsService";
import { getAboutUsImages, saveAboutUsImages } from "../../../../services/api";
import { toastError } from "../../../../services/ToastService";
import { ToastContainer } from "react-toastify";

function NavbarImages() {
  const aboutUsHistory = useRef(null);
  const aboutUsIntroductionRef = useRef(null);
  const ourTeamsRef = useRef(null);

  const [images, setImages] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await getAboutUsImages();
        if (res.data) {
          setImages(res.data);
        }
      } catch (error) {
        console.error("Error fetching slider content:", error);
        toastError();
      }
    };
    fetchData();
  }, []);

  const onSubmit = async (item, e) => {
    const shouldUploadFile = (fileRef, fileType) => {
      if (!fileRef.current || fileRef.current.files.length === 0) {
        return false;
      }
      const file = fileRef.current.files[0];
      return file && file.type.startsWith(fileType + "/");
    };
    e.preventDefault();
    if (item === "aboutUs") {
      if (aboutUsHistory) {
        if (shouldUploadFile(aboutUsHistory, "image")) {
          const formData = new FormData();
          formData.append("image", aboutUsHistory.current.files[0]);
          formData.append("name", "aboutUsHistory");
          await saveAboutUsImages(formData);
        }
      }

      if (aboutUsIntroductionRef) {
        if (shouldUploadFile(aboutUsIntroductionRef, "image")) {
          const formData = new FormData();
          formData.append("image", aboutUsIntroductionRef.current.files[0]);
          formData.append("name", "aboutUsIntroduction");
          await saveAboutUsImages(formData);
        }
      }
      if (ourTeamsRef) {
        if (shouldUploadFile(ourTeamsRef, "image")) {
          const formData = new FormData();
          formData.append("image", ourTeamsRef.current.files[0]);
          formData.append("name", "aboutUsOurTeam");
          await saveAboutUsImages(formData);
        }
      }
    }
  };
  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Navbar</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Auth</a>
              </li>
              <li className="breadcrumb-item">Components</li>
              <li className="breadcrumb-item active">Navbar</li>
            </ol>
          </nav>
        </div>
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Navbar Images</h5>
                  <hr className="border-2" />

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <h4>AboutUs Header</h4>
                      <label className="form-label">Image</label>
                      <input ref={aboutUsHistory} type="file" />
                    </div>

                    <div className="mb-3 col-md-6">
                      <img
                        style={{
                          height: "200px",
                          width: "300px",
                          objectFit: "contain",
                        }}
                        src={
                          images && images.aboutUsHistory
                            ? images.aboutUsHistory
                            : ""
                        }
                        alt="uploaded image"
                        accept=".jpg,.jpeg,.png,.gif"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <h4>AboutUs Introduction</h4>
                      <label className="form-label">Image</label>
                      <input ref={aboutUsIntroductionRef} type="file" />
                    </div>

                    <div className="mb-3 col-md-6">
                      <img
                        style={{
                          height: "200px",
                          width: "300px",
                          objectFit: "contain",
                        }}
                        src={
                          images && images.aboutUsIntroduction
                            ? images.aboutUsIntroduction
                            : ""
                        }
                        alt="uploaded image"
                        accept=".jpg,.jpeg,.png,.gif"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <h4>Our Teams</h4>
                      <label className="form-label">Image</label>
                      <input ref={ourTeamsRef} type="file" />
                    </div>

                    <div className="mb-3 col-md-6">
                      <img
                        style={{
                          height: "200px",
                          width: "300px",
                          objectFit: "contain",
                        }}
                        src={
                          images && images.aboutUsOurTeam
                            ? images.aboutUsOurTeam
                            : ""
                        }
                        alt="uploaded image"
                        accept=".jpg,.jpeg,.png,.gif"
                      />
                    </div>
                  </div>

                  <div
                    style={{ marginTop: "50px" }}
                    className="d-flex justify-content-center"
                  >
                    <button
                      onClick={(e) => onSubmit("aboutUs", e)}
                      type="submit"
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

export default NavbarImages;
