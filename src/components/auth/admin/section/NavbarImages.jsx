import React, { useEffect, useRef, useState } from "react";
import { getAboutUs } from "../../../../services/aboutUsService";
import {
  getAboutUsImages,
  getGetInvolvedImages,
  getOurWorkImages,
  getResourcesImages,
  saveAboutUsImages,
  saveGetInvolvedImages,
  saveOurWorkImages,
  saveResourcesImages,
} from "../../../../services/api";
import { toastError, toastSuccess } from "../../../../services/ToastService";
import { ToastContainer } from "react-toastify";

function NavbarImages() {
  const aboutUsHistory = useRef(null);
  const aboutUsIntroductionRef = useRef(null);
  const aboutUsourTeamsRef = useRef(null);
  const aboutUsOurPartners = useRef(null);

  // ourWork
  const ourWorkAdvocacyAwarness = useRef(null);
  const ourWorkEmpowerment = useRef(null);
  const ourWorkSupport = useRef(null);
  const ourWorkOrgDevelopment = useRef(null);
  const ourWorkEcsc = useRef(null);

  // Resources
  const resourcesProcurement = useRef(null);
  const resourcesVacancy = useRef(null);
  const resourcesVolunteer = useRef(null);
  const resourcesDigitalLibrary = useRef(null);
  const resourcesTransformingLives = useRef(null);
  const resourcesBlog = useRef(null);

  // getInvolved
  const getInvolvedProcurement = useRef(null);
  const getInvolvedVacancy = useRef(null);
  const getInvolvedVolunteer = useRef(null);
  const getInvolvedDonate = useRef(null);

  const [aboutUsImages, setAboutUsImages] = useState();
  const [ourWorkImages, setOurWorkImages] = useState();
  const [resourcesImages, setResourcesImages] = useState();
  const [getInvolvedImages, setGetInvolvedImages] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let aboutUsRes = await getAboutUsImages();
        if (aboutUsRes.data) {
          setAboutUsImages(aboutUsRes.data);
        }

        let ourWorkRes = await getOurWorkImages();
        if (ourWorkRes.data) {
          setOurWorkImages(ourWorkRes.data);
        }

        let getInvolvedRes = await getGetInvolvedImages();
        if (getInvolvedRes.data) {
          setGetInvolvedImages(getInvolvedRes.data);
        }

        let resourcesRes = await getResourcesImages();
        if (resourcesRes.data) {
          setResourcesImages(resourcesRes.data);
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
          toastSuccess();
        }
      }

      if (aboutUsIntroductionRef) {
        if (shouldUploadFile(aboutUsIntroductionRef, "image")) {
          const formData = new FormData();
          formData.append("image", aboutUsIntroductionRef.current.files[0]);
          formData.append("name", "aboutUsIntroduction");
          await saveAboutUsImages(formData);
          toastSuccess();
        }
      }
      if (aboutUsourTeamsRef) {
        if (shouldUploadFile(aboutUsourTeamsRef, "image")) {
          const formData = new FormData();
          formData.append("image", aboutUsourTeamsRef.current.files[0]);
          formData.append("name", "aboutUsOurTeam");
          await saveAboutUsImages(formData);
          toastSuccess();
        }
      }

      if (aboutUsOurPartners) {
        if (shouldUploadFile(aboutUsOurPartners, "image")) {
          const formData = new FormData();
          formData.append("image", aboutUsOurPartners.current.files[0]);
          formData.append("name", "aboutUsOurPartners");
          await saveAboutUsImages(formData);
          toastSuccess();
        }
      }
    }

    if (item === "ourwork") {
      if (ourWorkAdvocacyAwarness) {
        if (shouldUploadFile(ourWorkAdvocacyAwarness, "image")) {
          const formData = new FormData();
          formData.append("image", ourWorkAdvocacyAwarness.current.files[0]);
          formData.append("name", "advocacyAwarness");
          await saveOurWorkImages(formData);
          toastSuccess();
        }
      }

      if (ourWorkEmpowerment) {
        if (shouldUploadFile(ourWorkEmpowerment, "image")) {
          const formData = new FormData();
          formData.append("image", ourWorkEmpowerment.current.files[0]);
          formData.append("name", "empowerment");
          await saveOurWorkImages(formData);
          toastSuccess();
        }
      }
      if (ourWorkSupport) {
        if (shouldUploadFile(ourWorkSupport, "image")) {
          const formData = new FormData();
          formData.append("image", ourWorkSupport.current.files[0]);
          formData.append("name", "support");
          await saveOurWorkImages(formData);
          toastSuccess();
        }
      }

      if (ourWorkOrgDevelopment) {
        if (shouldUploadFile(ourWorkOrgDevelopment, "image")) {
          const formData = new FormData();
          formData.append("image", ourWorkOrgDevelopment.current.files[0]);
          formData.append("name", "orgDevelopment");
          await saveOurWorkImages(formData);
          toastSuccess();
        }
      }
      if (ourWorkEcsc) {
        if (shouldUploadFile(ourWorkEcsc, "image")) {
          const formData = new FormData();
          formData.append("image", ourWorkEcsc.current.files[0]);
          formData.append("name", "ecsc");
          await saveOurWorkImages(formData);
          toastSuccess();
        }
      }
    }

    if (item === "getinvolved") {
      if (getInvolvedProcurement) {
        if (shouldUploadFile(getInvolvedProcurement, "image")) {
          const formData = new FormData();
          formData.append("image", getInvolvedProcurement.current.files[0]);
          formData.append("name", "procurement");
          await saveGetInvolvedImages(formData);
          toastSuccess();
        }
      }

      if (getInvolvedVacancy) {
        if (shouldUploadFile(getInvolvedVacancy, "image")) {
          const formData = new FormData();
          formData.append("image", getInvolvedVacancy.current.files[0]);
          formData.append("name", "vacancy");
          await saveGetInvolvedImages(formData);
          toastSuccess();
        }
      }
      if (getInvolvedVolunteer) {
        if (shouldUploadFile(getInvolvedVolunteer, "image")) {
          const formData = new FormData();
          formData.append("image", getInvolvedVolunteer.current.files[0]);
          formData.append("name", "volunteer");
          await saveGetInvolvedImages(formData);
          toastSuccess();
        }
      }

      if (getInvolvedDonate) {
        if (shouldUploadFile(getInvolvedDonate, "image")) {
          const formData = new FormData();
          formData.append("image", getInvolvedDonate.current.files[0]);
          formData.append("name", "donate");
          await saveGetInvolvedImages(formData);
          toastSuccess();
        }
      }
    }

    if (item === "resources") {
      if (resourcesProcurement) {
        if (shouldUploadFile(resourcesProcurement, "image")) {
          const formData = new FormData();
          formData.append("image", resourcesProcurement.current.files[0]);
          formData.append("name", "procurement");
          await saveResourcesImages(formData);
          toastSuccess();
        }
      }

      if (resourcesVacancy) {
        if (shouldUploadFile(resourcesVacancy, "image")) {
          const formData = new FormData();
          formData.append("image", resourcesVacancy.current.files[0]);
          formData.append("name", "vacancy");
          await saveResourcesImages(formData);
          toastSuccess();
        }
      }

      if (resourcesVolunteer) {
        if (shouldUploadFile(resourcesVolunteer, "image")) {
          const formData = new FormData();
          formData.append("image", resourcesVolunteer.current.files[0]);
          formData.append("name", "volunteer");
          await saveResourcesImages(formData);
          toastSuccess();
        }
      }

      if (resourcesDigitalLibrary) {
        if (shouldUploadFile(resourcesDigitalLibrary, "image")) {
          const formData = new FormData();
          formData.append("image", resourcesDigitalLibrary.current.files[0]);
          formData.append("name", "digitalLibrary");
          await saveResourcesImages(formData);
          toastSuccess();
        }
      }

      if (resourcesTransformingLives) {
        if (shouldUploadFile(resourcesTransformingLives, "image")) {
          const formData = new FormData();
          formData.append("image", resourcesTransformingLives.current.files[0]);
          formData.append("name", "transformingLives");
          await saveResourcesImages(formData);
          toastSuccess();
        }
      }

      if (resourcesBlog) {
        if (shouldUploadFile(resourcesBlog, "image")) {
          const formData = new FormData();
          formData.append("image", resourcesBlog.current.files[0]);
          formData.append("name", "blog");
          await saveResourcesImages(formData);
          toastSuccess();
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
                  <div className="container ">
                    <h5 className="card-title">About Us Images</h5>
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
                            aboutUsImages && aboutUsImages.aboutUsHistory
                              ? aboutUsImages.aboutUsHistory
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
                            aboutUsImages && aboutUsImages.aboutUsIntroduction
                              ? aboutUsImages.aboutUsIntroduction
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
                        <input ref={aboutUsourTeamsRef} type="file" />
                      </div>

                      <div className="mb-3 col-md-6">
                        <img
                          style={{
                            height: "200px",
                            width: "300px",
                            objectFit: "contain",
                          }}
                          src={
                            aboutUsImages && aboutUsImages.aboutUsOurTeam
                              ? aboutUsImages.aboutUsOurTeam
                              : ""
                          }
                          alt="uploaded image"
                          accept=".jpg,.jpeg,.png,.gif"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <h4>Our Partners</h4>
                        <label className="form-label">Image</label>
                        <input ref={aboutUsOurPartners} type="file" />
                      </div>

                      <div className="mb-3 col-md-6">
                        <img
                          style={{
                            height: "200px",
                            width: "300px",
                            objectFit: "contain",
                          }}
                          src={
                            aboutUsImages && aboutUsImages.aboutUsOurPartners
                              ? aboutUsImages.aboutUsOurPartners
                              : ""
                          }
                          alt="uploaded image"
                          accept=".jpg,.jpeg,.png,.gif"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        onClick={(e) => onSubmit("aboutUs", e)}
                        type="submit"
                        className="btn btn-primary m-5"
                      >
                        Save About Us Images
                      </button>
                    </div>
                  </div>

                  <div className="container ">
                    <h5 className="card-title">Our Work Images</h5>
                    <hr className="border-2" />
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <h4>Advocacy Awarness</h4>
                        <label className="form-label">Image</label>
                        <input ref={ourWorkAdvocacyAwarness} type="file" />
                      </div>

                      <div className="mb-3 col-md-6">
                        <img
                          style={{
                            height: "200px",
                            width: "300px",
                            objectFit: "contain",
                          }}
                          src={
                            ourWorkImages && ourWorkImages.advocacyAwarness
                              ? ourWorkImages.advocacyAwarness
                              : ""
                          }
                          alt="uploaded image"
                          accept=".jpg,.jpeg,.png,.gif"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <h4>Empowerment</h4>
                        <label className="form-label">Image</label>
                        <input ref={ourWorkEmpowerment} type="file" />
                      </div>

                      <div className="mb-3 col-md-6">
                        <img
                          style={{
                            height: "200px",
                            width: "300px",
                            objectFit: "contain",
                          }}
                          src={
                            ourWorkImages && ourWorkImages.empowerment
                              ? ourWorkImages.empowerment
                              : ""
                          }
                          alt="uploaded image"
                          accept=".jpg,.jpeg,.png,.gif"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <h4>Support</h4>
                        <label className="form-label">Image</label>
                        <input ref={ourWorkSupport} type="file" />
                      </div>

                      <div className="mb-3 col-md-6">
                        <img
                          style={{
                            height: "200px",
                            width: "300px",
                            objectFit: "contain",
                          }}
                          src={
                            ourWorkImages && ourWorkImages.support
                              ? ourWorkImages.support
                              : ""
                          }
                          alt="uploaded image"
                          accept=".jpg,.jpeg,.png,.gif"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <h4>Organization Development</h4>
                        <label className="form-label">Image</label>
                        <input ref={ourWorkOrgDevelopment} type="file" />
                      </div>

                      <div className="mb-3 col-md-6">
                        <img
                          style={{
                            height: "200px",
                            width: "300px",
                            objectFit: "contain",
                          }}
                          src={
                            ourWorkImages && ourWorkImages.orgDevelopment
                              ? ourWorkImages.orgDevelopment
                              : ""
                          }
                          alt="uploaded image"
                          accept=".jpg,.jpeg,.png,.gif"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <h4>ECSC</h4>
                        <label className="form-label">Image</label>
                        <input ref={ourWorkEcsc} type="file" />
                      </div>

                      <div className="mb-3 col-md-6">
                        <img
                          style={{
                            height: "200px",
                            width: "300px",
                            objectFit: "contain",
                          }}
                          src={
                            ourWorkImages && ourWorkImages.ecsc
                              ? ourWorkImages.ecsc
                              : ""
                          }
                          alt="uploaded image"
                          accept=".jpg,.jpeg,.png,.gif"
                        />
                      </div>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        onClick={(e) => onSubmit("ourwork", e)}
                        type="submit"
                        className="btn btn-primary m-5"
                      >
                        Save Our Work Images
                      </button>
                    </div>
                  </div>

                  <div className="container ">
                    <h5 className="card-title">Get Involved Images</h5>
                    <hr className="border-2" />
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <h4>Procurement</h4>
                        <label className="form-label">Image</label>
                        <input ref={getInvolvedProcurement} type="file" />
                      </div>

                      <div className="mb-3 col-md-6">
                        <img
                          style={{
                            height: "200px",
                            width: "300px",
                            objectFit: "contain",
                          }}
                          src={
                            getInvolvedImages && getInvolvedImages.procurement
                              ? getInvolvedImages.procurement
                              : ""
                          }
                          alt="uploaded image"
                          accept=".jpg,.jpeg,.png,.gif"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <h4>Vacancy</h4>
                        <label className="form-label">Image</label>
                        <input ref={getInvolvedVacancy} type="file" />
                      </div>

                      <div className="mb-3 col-md-6">
                        <img
                          style={{
                            height: "200px",
                            width: "300px",
                            objectFit: "contain",
                          }}
                          src={
                            getInvolvedImages && getInvolvedImages.vacancy
                              ? getInvolvedImages.vacancy
                              : ""
                          }
                          alt="uploaded image"
                          accept=".jpg,.jpeg,.png,.gif"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <h4>Volunteer</h4>
                        <label className="form-label">Image</label>
                        <input ref={getInvolvedVolunteer} type="file" />
                      </div>

                      <div className="mb-3 col-md-6">
                        <img
                          style={{
                            height: "200px",
                            width: "300px",
                            objectFit: "contain",
                          }}
                          src={
                            getInvolvedImages && getInvolvedImages.volunteer
                              ? getInvolvedImages.volunteer
                              : ""
                          }
                          alt="uploaded image"
                          accept=".jpg,.jpeg,.png,.gif"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <h4>Donate</h4>
                        <label className="form-label">Image</label>
                        <input ref={getInvolvedDonate} type="file" />
                      </div>

                      <div className="mb-3 col-md-6">
                        <img
                          style={{
                            height: "200px",
                            width: "300px",
                            objectFit: "contain",
                          }}
                          src={
                            getInvolvedImages && getInvolvedImages.donate
                              ? getInvolvedImages.donate
                              : ""
                          }
                          alt="uploaded image"
                          accept=".jpg,.jpeg,.png,.gif"
                        />
                      </div>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        onClick={(e) => onSubmit("getinvolved", e)}
                        type="submit"
                        className="btn btn-primary m-5"
                      >
                        Save Get Involved Images
                      </button>
                    </div>
                  </div>

                  <div className="container ">
                    <h5 className="card-title">Resources Images</h5>
                    <hr className="border-2" />
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <h4>Procurement</h4>
                        <label className="form-label">Image</label>
                        <input ref={resourcesProcurement} type="file" />
                      </div>

                      <div className="mb-3 col-md-6">
                        <img
                          style={{
                            height: "200px",
                            width: "300px",
                            objectFit: "contain",
                          }}
                          src={
                            resourcesImages && resourcesImages.procurement
                              ? resourcesImages.procurement
                              : ""
                          }
                          alt="uploaded image"
                          accept=".jpg,.jpeg,.png,.gif"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <h4>Vacancy</h4>
                        <label className="form-label">Image</label>
                        <input ref={resourcesVacancy} type="file" />
                      </div>

                      <div className="mb-3 col-md-6">
                        <img
                          style={{
                            height: "200px",
                            width: "300px",
                            objectFit: "contain",
                          }}
                          src={
                            resourcesImages && resourcesImages.vacancy
                              ? resourcesImages.vacancy
                              : ""
                          }
                          alt="uploaded image"
                          accept=".jpg,.jpeg,.png,.gif"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <h4>Volunteer</h4>
                        <label className="form-label">Image</label>
                        <input ref={resourcesVolunteer} type="file" />
                      </div>

                      <div className="mb-3 col-md-6">
                        <img
                          style={{
                            height: "200px",
                            width: "300px",
                            objectFit: "contain",
                          }}
                          src={
                            resourcesImages && resourcesImages.volunteer
                              ? resourcesImages.volunteer
                              : ""
                          }
                          alt="uploaded image"
                          accept=".jpg,.jpeg,.png,.gif"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <h4>Transforming Lives</h4>
                        <label className="form-label">Image</label>
                        <input ref={resourcesTransformingLives} type="file" />
                      </div>

                      <div className="mb-3 col-md-6">
                        <img
                          style={{
                            height: "200px",
                            width: "300px",
                            objectFit: "contain",
                          }}
                          src={
                            resourcesImages && resourcesImages.transformingLives
                              ? resourcesImages.transformingLives
                              : ""
                          }
                          alt="uploaded image"
                          accept=".jpg,.jpeg,.png,.gif"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <h4>Blog</h4>
                        <label className="form-label">Image</label>
                        <input ref={resourcesBlog} type="file" />
                      </div>

                      <div className="mb-3 col-md-6">
                        <img
                          style={{
                            height: "200px",
                            width: "300px",
                            objectFit: "contain",
                          }}
                          src={
                            resourcesImages && resourcesImages.blog
                              ? resourcesImages.blog
                              : ""
                          }
                          alt="uploaded image"
                          accept=".jpg,.jpeg,.png,.gif"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <h4>Digital Library</h4>
                        <label className="form-label">Image</label>
                        <input ref={resourcesDigitalLibrary} type="file" />
                      </div>

                      <div className="mb-3 col-md-6">
                        <img
                          style={{
                            height: "200px",
                            width: "300px",
                            objectFit: "contain",
                          }}
                          src={
                            resourcesImages && resourcesImages.digitalLibrary
                              ? resourcesImages.digitalLibrary
                              : ""
                          }
                          alt="uploaded image"
                          accept=".jpg,.jpeg,.png,.gif"
                        />
                      </div>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        onClick={(e) => onSubmit("resources", e)}
                        type="submit"
                        className="btn btn-primary m-5"
                      >
                        Save Get Involved Images
                      </button>
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
}

export default NavbarImages;
