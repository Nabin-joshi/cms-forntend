import React, { useState } from "react";
import { donateUs } from "../../services/NewsLetterUserService";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CustomModal from "../auth/admin/section/NewLetter/popup/CustomModal";
import DonateModal from "../auth/admin/section/NewLetter/popup/DonateModal";
import logo from "../../assets/img/logo.png";

export default function Header() {
  const navigate = useNavigate();

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
    window.location.href = `${data.responseData.payment_url}`;
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

  return (
    <>
      <header className="header-main" id="header">
        <div className="">
          <div className="topbar container-fluid py-1 d-flex align-items-center flex-wrap">
            <div className="topbar-item topbar-underline px-3">
              <a href="#">
                <i className="fas fa-phone-alt"></i> Need Help?{" "}
                <span className="font-weight-bold">Call: +91 1234567890</span>
              </a>
            </div>
            <div className="d-flex align-items-center">
              <div className="topbar-item topbar-underline px-3">
                <a href="#"> Take a mental health test</a>
              </div>
              <div className="topbar-item topbar-underline px-3">
                <a href="#">Blog</a>
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
                <div id="language-btn">
                  EN <i className="fas fa-angle-down"></i>
                </div>
                <div id="language-dropdown">
                  <div>
                    <a href="#">EN</a>
                  </div>
                  <div>
                    <a href="#">NP</a>
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
              <a href="#" className="donate-btn d-none d-sm-flex">
                <i className="fas fa-hand-holding-heart text-red"></i>
                <div className="ml-3 d-flex flex-column">
                  <span className="font-weight-bold">Donate</span>
                  <span className="make-a-difference mt-n3">
                    Make a difference
                  </span>
                </div>
              </a>
              <div className="hamburger-menu ml-3" id="hamburger-menu">
                <i className="fas fa-bars"></i>
              </div>
            </div>

            <nav className="navbar-main mt-2" id="main-menu">
              <ul className="navbar-main-menu d-flex justify-content-center">
                <li className="navbar-main-item">
                  <a href="#" className="navbar-main-link">
                    <i className="fas fa-home"></i>
                  </a>
                </li>
                <li className="navbar-main-item">
                  <a href="#" className="navbar-main-link">
                    About Us <i className="fa fa-angle-down text-blue-grey"></i>
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="#"> Submenu 1-1</a>
                    </li>
                    <li>
                      <a href="#"> Submenu 1-2</a>
                    </li>
                  </ul>
                </li>
                <li className="navbar-main-item">
                  <a href="#" className="navbar-main-link">
                    Our Work <i className="fa fa-angle-down text-blue-grey"></i>
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="#"> Submenu 1-1</a>
                    </li>
                    <li>
                      <a href="#"> Submenu 1-2</a>
                    </li>
                  </ul>
                </li>
                <li className="navbar-main-item">
                  <a href="#" className="navbar-main-link">
                    Resources{" "}
                    <i className="fa fa-angle-down text-blue-grey"></i>
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="#"> Submenu 1-1</a>
                    </li>
                    <li>
                      <a href="#"> Submenu 1-2</a>
                    </li>
                  </ul>
                </li>
                <li className="navbar-main-item">
                  <a href="#" className="navbar-main-link">
                    Get Involved{" "}
                    <i className="fa fa-angle-down text-blue-grey"></i>
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="#"> Submenu 1-1</a>
                    </li>
                    <li>
                      <a href="#"> Submenu 1-2</a>
                    </li>
                  </ul>
                </li>
                <li className="navbar-main-item">
                  <a href="#" className="navbar-main-link">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
