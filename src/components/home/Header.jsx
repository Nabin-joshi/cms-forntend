import React, { useEffect, useState } from "react";
import { donateUs } from "../../services/NewsLetterUserService";
import { ToastContainer, toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import CustomModal from "../auth/admin/section/NewLetter/popup/CustomModal";
import DonateModal from "../auth/admin/section/NewLetter/popup/DonateModal";
import logo from "../../assets/img/logo.png";

export default function Header() {
  const [locale, setlocale] = useState("EN");

  const navigate = useNavigate();

  useEffect(() => {
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
        <div className="">
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
        <div className="container-fluid d-flex align-items-center justify-content-between position-relative">
          <div className="strip d-flex justify-content-between py-1 bg-light">
            <img
              src={logo}
              alt="logo"
              className=""
              style={{ height: "90px", width: "237px" }}
            />
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
              <ul className="navbar-main-menu d-flex justify-content-center">
                <li className="navbar-main-item">
                  <NavLink to="/" className="navbar-main-link">
                    <i className="fas fa-home"></i>
                  </NavLink>
                </li>
                <li className="navbar-main-item">
                  <NavLink to="#" className="navbar-main-link">
                    {locale === "EN" ? "About Us" : "हाम्रो बारेमा"}{" "}
                    <i className="fa fa-angle-down text-blue-grey"></i>
                  </NavLink>
                  <ul className="submenu">
                    <li>
                      <NavLink to="/aboutUs"> History</NavLink>
                    </li>
                    <li>
                      <NavLink to="/aboutUs"> Introduction</NavLink>
                    </li>{" "}
                    <li>
                      <NavLink to="/aboutUs"> Our Vision</NavLink>
                    </li>{" "}
                    <li>
                      <NavLink to="/aboutUs"> Our Mission</NavLink>
                    </li>{" "}
                    <li>
                      <NavLink to="/aboutUs"> Our Goal</NavLink>
                    </li>{" "}
                    <li>
                      <NavLink to="/aboutUs"> Our Approach</NavLink>
                    </li>
                    <li>
                      <NavLink to="/aboutUs"> Our Thematic Areas</NavLink>
                    </li>{" "}
                    <li>
                      <NavLink to="/aboutUs"> Our Team</NavLink>
                    </li>
                    <li>
                      <NavLink to="/aboutUs"> Staff</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="navbar-main-item">
                  <NavLink to="#" className="navbar-main-link">
                    {locale === "EN" ? "Our Work" : "हाम्रो काम"}{" "}
                    <i className="fa fa-angle-down text-blue-grey"></i>
                  </NavLink>
                  {/* <ul className="submenu">
                    <li>
                      <NavLink to="#"> Submenu 1-1</NavLink>
                    </li>
                    <li>
                      <NavLink to="#"> Submenu 1-2</NavLink>
                    </li>
                  </ul> */}
                </li>
                <li className="navbar-main-item">
                  <NavLink to="#" className="navbar-main-link">
                    {locale === "EN" ? "Resources" : "स्रोतहरू"}{" "}
                    <i className="fa fa-angle-down text-blue-grey"></i>
                  </NavLink>
                  <ul className="submenu">
                    <li>
                      <NavLink to="/resources"> Vacancy</NavLink>
                    </li>
                    <li>
                      <NavLink to="/resources"> Procurement</NavLink>
                    </li>{" "}
                    <li>
                      <NavLink to="/resources"> Volunteer</NavLink>
                    </li>{" "}
                    <li>
                      <NavLink to="/resources"> Digital Library</NavLink>
                    </li>
                    <li>
                      <NavLink to="/resources"> Transforming Lives</NavLink>
                    </li>{" "}
                    <li>
                      <NavLink to="/resources"> Blog</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="navbar-main-item">
                  <NavLink to="#" className="navbar-main-link">
                    {locale === "EN" ? "Get Involved" : "सहभागी हुनुहोस्"}{" "}
                    <i className="fa fa-angle-down text-blue-grey"></i>
                  </NavLink>
                  <ul className="submenu">
                    <li>
                      <NavLink to="/getInvolved"> Vacancy</NavLink>
                    </li>
                    <li>
                      <NavLink to="/getInvolved"> Procurement</NavLink>
                    </li>{" "}
                    <li>
                      <NavLink to="/getInvolved"> Volunteer</NavLink>
                    </li>{" "}
                    <li>
                      <NavLink to="/getInvolved">Donate</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="navbar-main-item">
                  <NavLink to="/getInvolved" className="navbar-main-link">
                    {locale === "EN" ? "Get Involved" : "सम्पर्क गर्नुहोस्"}
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
