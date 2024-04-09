import React, { useEffect, useState } from "react";
import { donateUs } from "../../services/NewsLetterUserService";
import { ToastContainer, toast } from "react-toastify";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import coverImg from "../../assets/img/cover.jpg";
import { getAboutUsImages } from "../../services/api";

export default function Header() {
  const [locale, setlocale] = useState("EN");
  const [aboutUsImages, setAboutUsImages] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await getAboutUsImages();
        if (res.data) {
          setAboutUsImages(res.data);
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

  return (
    <>
      <header className="header-main" id="header">
        <div className="font-size-16">
          <div className="topbar container-fluid py-1 d-flex align-items-center flex-wrap">
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
                <i className="fab fa-facebook-f pr-2"></i>
                <i className="fab fa-x-twitter pr-2"></i>
                <i className="fab fa-instagram pr-2"></i>
                <i className="fab fa-youtube"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-flex align-items-center justify-content-between">
          <div className="strip d-flex justify-content-between py-1 bg-light">
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
              <NavLink to="/" className="donate-btn d-none d-sm-flex">
                <i className="fas fa-hand-holding-heart text-red"></i>
                <div className="ml-3 d-flex flex-column">
                  <span className="font-weight-bold">
                    {locale === "EN" ? "Donate" : "दान गर्नुहोस्"}
                  </span>
                  <span className="make-a-difference mt-n3">
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
                            <span className="submenu-text">History</span>
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
                            <span className="submenu-text">Introduction</span>
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
                            <span className="submenu-text">Our Teams</span>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="navbar-main-item">
                  <NavLink to="#" className="navbar-main-link">
                    Our Work <i className="fa fa-angle-down text-blue-grey"></i>
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
                              src={coverImg}
                              alt="menu img"
                              className="nav-img"
                            />
                            <div className="nav-overlay"></div>
                            <span className="submenu-text">
                              Advocacy Awarness
                            </span>
                          </NavLink>
                        </div>

                        <div className="col-6 col-md-3 nav-item">
                          <NavLink
                            to="ourProgram/empowermentAndCommunityInclusion"
                            className="nav-link"
                          >
                            <img
                              src={coverImg}
                              alt="menu img"
                              className="nav-img"
                            />
                            <div className="nav-overlay"></div>
                            <span className="submenu-text">
                              Empowerment And Community Inclusion
                            </span>
                          </NavLink>
                        </div>

                        <div className="col-6 col-md-3 nav-item">
                          <NavLink
                            to="ourProgram/strengthenCommunitySupportSystem"
                            className="nav-link"
                          >
                            <img
                              src={coverImg}
                              alt="menu img"
                              className="nav-img"
                            />
                            <div className="nav-overlay"></div>
                            <span className="submenu-text">
                              Strengthen Community Support System
                            </span>
                          </NavLink>
                        </div>

                        <div className="col-6 col-md-3 nav-item">
                          <NavLink
                            to="ourProgram/organizationalDevelopment"
                            className="nav-link"
                          >
                            <img
                              src={coverImg}
                              alt="menu img"
                              className="nav-img"
                            />
                            <div className="nav-overlay"></div>
                            <span className="submenu-text">
                              Organizational Development
                            </span>
                          </NavLink>
                        </div>

                        <div className="col-6 col-md-3 nav-item">
                          <NavLink to="ourProgram/ecsc" className="nav-link">
                            <img
                              src={coverImg}
                              alt="menu img"
                              className="nav-img"
                            />
                            <div className="nav-overlay"></div>
                            <span className="submenu-text">Ecsc</span>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="navbar-main-item">
                  <NavLink to="#" className="navbar-main-link">
                    Resources{" "}
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
                              src={coverImg}
                              alt="menu img"
                              className="nav-img"
                            />
                            <div className="nav-overlay"></div>
                            <span className="submenu-text">Procurement</span>
                          </NavLink>
                        </div>
                        <div className="col-6 col-md-3 nav-item position-relative">
                          <NavLink to="/resources/vacancy" className="nav-link">
                            <img
                              src={coverImg}
                              alt="menu img"
                              className="nav-img"
                            />
                            <div className="nav-overlay"></div>
                            <span className="submenu-text">Vacancy</span>
                          </NavLink>
                        </div>

                        <div className="col-6 col-md-3 nav-item position-relative">
                          <NavLink
                            to="/resources/volunteer"
                            className="nav-link"
                          >
                            <img
                              src={coverImg}
                              alt="menu img"
                              className="nav-img"
                            />
                            <div className="nav-overlay"></div>
                            <span className="submenu-text">Volunteer</span>
                          </NavLink>
                        </div>

                        <div className="col-6 col-md-3 nav-item position-relative">
                          <NavLink
                            to="/resources/digitalLibrary"
                            className="nav-link"
                          >
                            <img
                              src={coverImg}
                              alt="menu img"
                              className="nav-img"
                            />
                            <div className="nav-overlay"></div>
                            <span className="submenu-text">
                              Digital Library
                            </span>
                          </NavLink>
                        </div>

                        <div className="col-6 col-md-3 nav-item position-relative">
                          <NavLink to="/resources/lives" className="nav-link">
                            <img
                              src={coverImg}
                              alt="menu img"
                              className="nav-img"
                            />
                            <div className="nav-overlay"></div>
                            <span className="submenu-text">
                              Transforming Lives
                            </span>
                          </NavLink>
                        </div>

                        <div className="col-6 col-md-3 nav-item position-relative">
                          <NavLink to="/resources/blog" className="nav-link">
                            <img
                              src={coverImg}
                              alt="menu img"
                              className="nav-img"
                            />
                            <div className="nav-overlay"></div>
                            <span className="submenu-text">Blog</span>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="navbar-main-item">
                  <NavLink to="#" className="navbar-main-link">
                    Get Involved{" "}
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
                              src={coverImg}
                              alt="menu img"
                              className="nav-img"
                            />
                            <div className="nav-overlay"></div>
                            <span className="submenu-text">Vacancy</span>
                          </NavLink>
                        </div>

                        <div className="col-6 col-md-3 nav-item">
                          <NavLink
                            to="/getInvolved/procurement"
                            className="nav-link"
                          >
                            <img
                              src={coverImg}
                              alt="menu img"
                              className="nav-img"
                            />
                            <div className="nav-overlay"></div>
                            <span className="submenu-text">Procurement</span>
                          </NavLink>
                        </div>

                        <div className="col-6 col-md-3 nav-item">
                          <NavLink
                            to="/getInvolved/volunteer"
                            className="nav-link"
                          >
                            <img
                              src={coverImg}
                              alt="menu img"
                              className="nav-img"
                            />
                            <div className="nav-overlay"></div>
                            <span className="submenu-text">Volunteer</span>
                          </NavLink>
                        </div>

                        <div className="col-6 col-md-3 nav-item">
                          <NavLink
                            to="/getInvolved/donate"
                            className="nav-link"
                          >
                            <img
                              src={coverImg}
                              alt="menu img"
                              className="nav-img"
                            />
                            <div className="nav-overlay"></div>
                            <span className="submenu-text">Donate</span>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="navbar-main-item">
                  <NavLink to="/contactUs" className="navbar-main-link">
                    Contact Us
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
