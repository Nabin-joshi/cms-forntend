import React, { useState } from "react";
import { donateUs } from "../../services/NewsLetterUserService";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CustomModal from "../auth/admin/section/NewLetter/popup/CustomModal";
import DonateModal from "../auth/admin/section/NewLetter/popup/DonateModal";

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
      <header
        id="header"
        className="fixed-top d-flex align-items-center header-transparent header-scrolled"
      >
        <div className="container d-flex justify-content-between align-items-center">
          <div className="logo">
            <h1 className="text-light">
              <a href="index.html">
                <span>Koshish Nepal</span>
              </a>
            </h1>
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="active " href="/">
                  Home
                </a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="services.html">Services</a>
              </li>
              <li>
                <a href="portfolio.html">Portfolio</a>
              </li>
              <li>
                <a href="team.html">Team</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li className="dropdown">
                <a href="/">
                  <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="/">Drop Down 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="/">
                      <span>Deep Drop Down</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="/">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="/">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="/">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="/">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="/">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="/">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="/">Drop Down 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
              <li>
                <button className="ml-2" onClick={() => setModalOpen(true)}>
                  Donate Us
                </button>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
        <CustomModal
          isOpen={isModalOpen}
          onRequestClose={() => setModalOpen(false)}
          contentComponent={<DonateModal enteredDonationAmount={enterAmount} />}
        ></CustomModal>
        <ToastContainer />
      </header>
    </>
  );
}
