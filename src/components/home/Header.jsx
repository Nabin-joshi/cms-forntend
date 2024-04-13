import React, { useEffect, useState } from "react";
import { donateUs } from "../../services/NewsLetterUserService";
import { ToastContainer, toast } from "react-toastify";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import coverImg from "../../assets/img/cover.jpg";
import {
  getAboutUsImages,
  getGetInvolvedImages,
  getOurWorkImages,
  getPopupPage,
  getResourcesImages,
  getSocialLinks,
} from "../../services/api";
import PopUp from "../shared/CustomModal/PopUp";

export default function Header() {
  const [locale, setlocale] = useState("EN");
  const [aboutUsImages, setAboutUsImages] = useState();
  const [ourWorkImage, setOurWorkImage] = useState();
  const [resourcesImages, setResourcesImages] = useState();
  const [getInvolved, setGetInvolved] = useState();
  const [socialLinks, setSocialLinks] = useState();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await getAboutUsImages();
        if (res.data) {
          setAboutUsImages(res.data);
        }

        let ourWorkImages = await getOurWorkImages();
        if (ourWorkImages.data) {
          setOurWorkImage(ourWorkImages.data);
        }

        let resources = await getResourcesImages();
        if (resources.data) {
          setResourcesImages(resources.data);
        }

        let getInvolved = await getGetInvolvedImages();
        if (getInvolved.data) {
          setGetInvolved(getInvolved.data);
        }

        let socialLinks = await getSocialLinks();
        if (socialLinks.data) {
          setSocialLinks(socialLinks.data);
        }

        let popup = await getPopupPage();
        console.log(popup);
        if (popup.data.selectedData) {
          if (
            popup.data.selectedData.showPopup &&
            popup.data.selectedData.showPopup === "true"
          ) {
            setTimeout(() => {
              setShowModal(true);
            }, 1000);
          }
        }
      } catch (error) {
        console.error("Error fetching slider content:", error);
      }
    };
    fetchData();

    let locale = localStorage.getItem("locale")
      ? localStorage.getItem("locale") === "eng"
        ? "EN"
        : "NP"
      : "EN";
    setlocale(locale);
  }, []);

  const payViaKhalti = async (amountInfo) => {
    const formData = {
      return_url: "http://localhost:5000/api/newsLetter/donateUs",
      website_url: "https://www.google.com/",
      amount: amountInfo.amount,
      purchase_order_id: "Order01",
      purchase_order_name: "test",
      customer_info: amountInfo,
    };
    const data = await donateUs(formData);
    console.log(data.responseData);
    toast.success(`going to payment page`, {
      position: "top-center",
      autoClose: 700,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "colored",
    });
    window.location.to = `${data.responseData.payment_url}`;
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const enterAmount = (amount) => {
    toast.info(` redirecting to payment page  `, {
      position: "top-center",
      autoClose: 700,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "colored",
    });
    setModalOpen(false);
    payViaKhalti(amount);
  };

  const onLanguageOptionClicked = (event) => {
    event.preventDefault();
    const isClickInside = document
      .getElementById("language-btn")
      .contains(event.target);
    const isClickOutside = document
      .getElementById("language-dropdown")
      .contains(event.target);
    if (isClickInside) {
      const x = document.getElementById("language-dropdown");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }
    if (isClickOutside) {
      const x = document.getElementById("language-dropdown");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }
  };

  const changeLocale = (event) => {
    event.preventDefault();
    const x = document.getElementById("language-dropdown");
    x.style.display = "none";
    if (event.target.id === "nep") {
      setlocale("NP");
    } else {
      setlocale("EN");
    }
    localStorage.locale = event.target.id;
    window.location.reload();
  };

  const handleToggle = (event) => {
    event.preventDefault();
    const isClickInside = document
      .getElementById("hamburger-menu")
      .contains(event.target);
    if (isClickInside) {
      const x = document.getElementById("main-menu");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && <PopUp onCloseModal={closeModal} />}
      <header className="header-main" id="header">
        <div className="font-size-16">
          <div className="topbar">
            <div className=" container py-1 d-flex align-items-center flex-wrap">
              <div className="topbar-item topbar-underline px-3">
                <NavLink to="/">
                  <i className="fas fa-phone-alt"></i>{" "}
                  {locale === "EN" ? "Need Help" : "मदद चाहिए"}?{" "}
                  <span className="font-weight-bold">
                    {locale === "EN" ? "Call" : "कल"}: +91 1234567890
                  </span>
                </NavLink>
              </div>
              <div className="d-flex align-items-center">
                <div className="topbar-item topbar-underline px-3">
                  <NavLink to="/">
                    {locale === "EN"
                      ? "Take a mental health test"
                      : "मानसिक स्वास्थ्य परीक्षण गर्नुहोस्।"}{" "}
                  </NavLink>
                </div>
                <div className="topbar-item topbar-underline px-3">
                  <NavLink to="/">{locale === "EN" ? "Blog" : "ब्लग"}</NavLink>
                </div>
              </div>
              <div className="flex-fill"></div>
              <div className="d-flex align-items-center">
                <div className="topbar-item px-3">
                  <div
                    className="search-btn d-flex align-items-center justify-content-center"
                    id="search-btn"
                  >
                    <i className="fas fa-search"></i>
                  </div>
                  <div id="search-box" className="search-box">
                    <input
                      type="text"
                      className="w-full"
                      placeholder="Search..."
                    />
                    <div className="ml-2 search-btn-big  px-3 d-flex align-items-center justify-content-center">
                      <i className="fas fa-search mr-1"></i> Search
                    </div>
                  </div>
                </div>
                <div className="topbar-item px-3">
                  <div onClick={onLanguageOptionClicked} id="language-btn">
                    <span>{locale} </span> <i className="fas fa-angle-down"></i>
                  </div>
                  <div id="language-dropdown">
                    <div>
                      <NavLink name="english" id="eng" onClick={changeLocale}>
                        EN
                      </NavLink>
                    </div>
                    <div>
                      <NavLink name="nepali" id="nep" onClick={changeLocale}>
                        NP
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="social-icons px-3">
                  <Link
                    to={
                      socialLinks && socialLinks.facebook
                        ? socialLinks.facebook
                        : ""
                    }
                  >
                    <i className="fab fa-facebook-f pr-3"></i>
                  </Link>
                  <Link to={socialLinks && socialLinks.x ? socialLinks.x : ""}>
                    <i className="fab fa-x-twitter pr-3"></i>
                  </Link>
                  <Link
                    to={
                      socialLinks && socialLinks.instagram
                        ? socialLinks.instagram
                        : ""
                    }
                  >
                    <i className="fab fa-instagram pr-3"></i>
                  </Link>
                  <Link
                    to={
                      socialLinks && socialLinks.youtube
                        ? socialLinks.youtube
                        : ""
                    }
                  >
                    <i className="fab fa-youtube"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-flex align-items-center justify-content-between">
          <div className="strip d-flex justify-content-between py-3 bg-light">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className=""
                style={{ height: "90px", width: "237px" }}
              />
            </Link>
          </div>
          <div className="right-section-header py-2">
            <div className="d-flex align-items-center">
              <NavLink to="/donation" className="donate-btn d-none d-sm-flex">
                <i className="fas fa-hand-holding-heart text-red"></i>
                <div className="ml-3 d-flex flex-column">
                  <span
                    style={{ fontSize: "24px" }}
                    className="font-weight-bold"
                  >
                    {locale === "EN" ? "Donate" : "दान गर्नुहोस्"}
                  </span>
                  <span
                    style={{ marginTop: "-10px" }}
                    className="make-a-difference"
                  >
                    {locale === "EN" ? "Make a difference" : "फरक पर्नुहोस्"}
                  </span>
                </div>
              </NavLink>
              <div
                onClick={handleToggle}
                className="hamburger-menu ml-3"
                id="hamburger-menu"
              >
                <i className="fas fa-bars"></i>
              </div>
            </div>

            <nav className="navbar-main mt-2" id="main-menu">
              <div className="navbar-main-menu d-flex justify-content-center">
                <div className="navbar-main-item">
                  <NavLink to="/" className="navbar-main-link">
                    <i className="fas fa-home"></i>
                  </NavLink>
                </div>
                <div className="navbar-main-item">
                  <NavLink to="#" className="navbar-main-link">
                    {locale === "EN" ? "About Us" : "हाम्रो बारेमा"}{" "}
                    <i className="fa fa-angle-down text-blue-grey"></i>
                  </NavLink>
                  <div className="submenu p-4">
                    <div className="container">
                      <div className="row">
                        <div className="col-6 col-md-3 nav-item">
                          <NavLink to="/aboutUs/history" className="nav-link">
                            <img
                              src={
                                aboutUsImages &&
                                aboutUsImages.aboutUsHistory &&
                                aboutUsImages.aboutUsHistory !== ""
                                  ? aboutUsImages.aboutUsHistory
                                  : coverImg
                              }
                              alt="menu img"
                              className="nav-img"
                            />
                            <div className="nav-overlay"></div>
                            <span className="submenu-text">
                              {locale === "EN" ? "History" : "इतिहास"}
                            </span>
                          </NavLink>
                        </div>
                        <div className="col-6 col-md-3 nav-item position-relative">
                          <NavLink to="/aboutUs/whoWeAre" className="nav-link">
                            <img
                              src={
                                aboutUsImages &&
                                aboutUsImages.aboutUsIntroduction &&
                                aboutUsImages.aboutUsIntroduction !== ""
                                  ? aboutUsImages.aboutUsIntroduction
                                  : coverImg
                              }
                              alt="menu img"
                              className="nav-img"
                            />
                            <div className="nav-overlay"></div>
                            <span className="submenu-text">
                              {locale === "EN" ? "Introduction" : "परिचय"}
                            </span>
                          </NavLink>
                        </div>
                        <div className="col-6 col-md-3 nav-item position-relative">
                          <NavLink
                            to="aboutUs/boardCommittees"
                            className="nav-link"
                          >
                            <img
                              src={
                                aboutUsImages &&
                                aboutUsImages.aboutUsOurTeam &&
                                aboutUsImages.aboutUsOurTeam !== ""
                                  ? aboutUsImages.aboutUsOurTeam
                                  : coverImg
                              }
                              alt="menu img"
                              className="nav-img"
                            />
                            <div className="nav-overlay"></div>
                            <span className="submenu-text">
                              {locale === "EN" ? "Our Teams" : "हाम्रा टोलीहरू"}
                            </span>
                          </NavLink>
                        </div>

                        <div className="col-6 col-md-3 nav-item position-relative">
                          <NavLink
                            to="/aboutUsOurPartners"
                            className="nav-link"
                          >
                            <img
                              src={
                                aboutUsImages &&
                                aboutUsImages.aboutUsOurPartners &&
                                aboutUsImages.aboutUsOurPartners !== ""
                                  ? aboutUsImages.aboutUsOurPartners
                                  : coverImg
                              }
                              alt="menu img"
                              className="nav-img"
                            />
                            <div className="nav-overlay"></div>
                            <span className="submenu-text">
                              {locale === "EN"
                                ? "Our Partners"
                                : "हाम्रा साझेदारहरू"}
                            </span>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="navbar-main-item">
                  <NavLink to="#" className="navbar-main-link">
                    {locale === "EN" ? "Our Work" : "हाम्रो काम"}{" "}
                    <i className="fa fa-angle-down text-blue-grey"></i>
                  </NavLink>
                  <div className="submenu p-4">
                    <div className="container">
                      <div className="row">
                        <div className="col-6 col-md-3 nav-item">
                          <NavLink
                            to="ourProgram/advocacyAwarness"
                            className="nav-link"
                          >
                            <img
                              src={
                                ourWorkImage && ourWorkImage.advocacyAwarness
                                  ? ourWorkImage.advocacyAwarness
                                  : coverImg
                              }
                              alt="menu img"
                              className="nav-img"
                            />
                            <div className="nav-overlay"></div>
                            <span className="submenu-text">
                              {locale === "EN"
                                ? "Advocacy Awarness"
                                : "अधिवक्तात्मक जागरूकता"}
                            </span>
                          </NavLink>
                        </div>

                        <div className="col-6 col-md-3 nav-item">
                          <NavLink
                            to="ourProgram/empowermentAndCommunityInclusion"
                            className="nav-link"
                          >
                            <img
                              src={
                                ourWorkImage && ourWorkImage.empowerment
                                  ? ourWorkImage.empowerment
                                  : coverImg
                              }
                              alt="menu img"
                              className="nav-img"
                            />
                            <div className="nav-overlay"></div>
                            <span className="submenu-text">
                              {locale === "EN"
                                ? "Empowerment And Community Inclusion"
                                : "शक्तिकरण र समुदाय समावेश"}
                            </span>
                          </NavLink>
                        </div>

                        <div className="col-6 col-md-3 nav-item">
                          <NavLink
                            to="ourProgram/strengthenCommunitySupportSystem"
                            className="nav-link"
                          >
                            <img
                              src={
                                ourWorkImage && ourWorkImage.support
                                  ? ourWorkImage.support
                                  : coverImg
                              }
                              alt="menu img"
                              className="nav-img"
                            />
                            <div className="nav-overlay"></div>
                            <span className="submenu-text">
                              {locale === "EN"
                                ? "Strengthen Community Support System"
                                : "समुदाय समर्थन प्रणाली मजबूत गर्नुहोस्।"}
                            </span>
                          </NavLink>
                        </div>

                        <div className="col-6 col-md-3 nav-item">
                          <NavLink
                            to="ourProgram/organizationalDevelopment"
                            className="nav-link"
                          >
                            <img
                              src={
                                ourWorkImage && ourWorkImage.orgDevelopment
                                  ? ourWorkImage.orgDevelopment
                                  : coverImg
                              }
                              alt="menu img"
                              className="nav-img"
                            />
                            <div className="nav-overlay"></div>
                            <span className="submenu-text">
                              {locale === "EN"
                                ? "Organizational Development"
                                : "संगठनिक विकास"}
                            </span>
                          </NavLink>
                        </div>

                        <div className="col-6 col-md-3 nav-item">
                          <NavLink to="ourProgram/ecsc" className="nav-link">
                            <img
                              src={
                                ourWorkImage && ourWorkImage.ecsc
                                  ? ourWorkImage.ecsc
                                  : coverImg
                              }
                              alt="menu img"
                              className="nav-img"
                            />
                            <div className="nav-overlay"></div>
                            <span className="submenu-text">
                              {locale === "EN" ? "ECSC" : "ECSC"}
                            </span>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="navbar-main-item">
                  <NavLink to="#" className="navbar-main-link">
                    {locale === "EN" ? "Resources" : "स्रोतहरू"}{" "}
                    <i className="fa fa-angle-down text-blue-grey"></i>
                  </NavLink>
                  <div className="submenu p-4">
                    <div className="container">
                      <div className="row">
                        <div className="col-6 col-md-3 nav-item">
                          <NavLink
                            to="/resources/procurement"
                            className="nav-link"
                          >
                            <img
                              src={
                                resourcesImages && resourcesImages.procurement
                                  ? resourcesImages.procurement
                                  : coverImg
                              }
                              alt="menu img"
                              className="nav-img"
                            />
                            <div className="nav-overlay"></div>
                            <span className="submenu-text">
                              {" "}
                              {locale === "EN"
                                ? "News & Events"
                                : "समाचार र कार्यक्रम"}
                            </span>
                          </NavLink>
                        </div>
                        <div className="col-6 col-md-3 nav-item position-relative">
                          <NavLink to="/resources/vacancy" className="nav-link">
                            <img
                              src={
                                resourcesImages && resourcesImages.vacancy
                                  ? resourcesImages.vacancy
                                  : coverImg
                              }
                              alt="menu img"
                              className="nav-img"
                            />
                            <div className="nav-overlay"></div>
                            <span className="submenu-text">
                              {locale === "EN" ? "Media" : "मिडिया"}
                            </span>
                          </NavLink>
                        </div>

                        <div className="col-6 col-md-3 nav-item position-relative">
                          <NavLink to="/resources/lives" className="nav-link">
                            <img
                              src={
                                resourcesImages &&
                                resourcesImages.transformingLives
                                  ? resourcesImages.transformingLives
                                  : coverImg
                              }
                              alt="menu img"
                              className="nav-img"
                            />
                            <div className="nav-overlay"></div>
                            <span className="submenu-text">
                              {locale === "EN" ? "Publications" : "प्रकाशन"}
                            </span>
                          </NavLink>
                        </div>

                        <div className="col-6 col-md-3 nav-item position-relative">
                          <NavLink to="/resources/blog" className="nav-link">
                            <img
                              src={
                                resourcesImages && resourcesImages.blog
                                  ? resourcesImages.blog
                                  : coverImg
                              }
                              alt="menu img"
                              className="nav-img"
                            />
                            <div className="nav-overlay"></div>
                            <span className="submenu-text">
                              {" "}
                              {locale === "EN" ? "Blog" : "ब्लग"}
                            </span>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="navbar-main-item">
                  <NavLink to="#" className="navbar-main-link">
                    {locale === "EN" ? "Get Involved" : "संलग्न हुनुहोस्"}{" "}
                    <i className="fa fa-angle-down text-blue-grey"></i>
                  </NavLink>
                  <div className="submenu p-4">
                    <div className="container">
                      <div className="row">
                        <div className="col-6 col-md-3 nav-item">
                          <NavLink
                            to="/getInvolved/vacancy"
                            className="nav-link"
                          >
                            <img
                              src={
                                getInvolved && getInvolved.vacancy
                                  ? getInvolved.vacancy
                                  : coverImg
                              }
                              alt="menu img"
                              className="nav-img"
                            />
                            <div className="nav-overlay"></div>
                            <span className="submenu-text">
                              {locale === "EN" ? "Vacancy" : "रिक्ति"}
                            </span>
                          </NavLink>
                        </div>

                        <div className="col-6 col-md-3 nav-item">
                          <NavLink
                            to="/getInvolved/procurement"
                            className="nav-link"
                          >
                            <img
                              src={
                                getInvolved && getInvolved.procurement
                                  ? getInvolved.procurement
                                  : coverImg
                              }
                              alt="menu img"
                              className="nav-img"
                            />
                            <div className="nav-overlay"></div>
                            <span className="submenu-text">
                              {locale === "EN" ? "Procurement" : "खरिदारी"}
                            </span>
                          </NavLink>
                        </div>

                        <div className="col-6 col-md-3 nav-item">
                          <NavLink
                            to="/getInvolved/volunteer"
                            className="nav-link"
                          >
                            <img
                              src={
                                getInvolved && getInvolved.volunteer
                                  ? getInvolved.volunteer
                                  : coverImg
                              }
                              alt="menu img"
                              className="nav-img"
                            />
                            <div className="nav-overlay"></div>
                            <span className="submenu-text">
                              {locale === "EN" ? "Volunteer" : "स्वयंसेवक"}
                            </span>
                          </NavLink>
                        </div>

                        <div className="col-6 col-md-3 nav-item">
                          <NavLink
                            to="/getInvolved/donate"
                            className="nav-link"
                          >
                            <img
                              src={
                                getInvolved && getInvolved.donate
                                  ? getInvolved.donate
                                  : coverImg
                              }
                              alt="menu img"
                              className="nav-img"
                            />
                            <div className="nav-overlay"></div>
                            <span className="submenu-text">
                              {locale === "EN" ? "Donate" : "दान गर्नुहोस्"}
                            </span>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="navbar-main-item">
                  <NavLink to="/contactUs" className="navbar-main-link">
                    {locale === "EN"
                      ? "Contact Us"
                      : "हामीलाई सम्पर्क गर्नुहोस्"}
                  </NavLink>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
