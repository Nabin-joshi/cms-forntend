import React from "react";
import { NavLink } from "react-router-dom";

function AdminHeader() {
  return (
    <>
      <header
        id="ikhataHeader"
        className="ikhataHeader adminHeader fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">
          <NavLink className="logoIkhata d-flex align-items-center">
            <img
              src="https://www.koshishnepal.org/wp-content/uploads/2021/09/cropped-main-koshish-1.png"
              alt=""
            />
            <span className="d-none d-lg-block">Koshish Admin</span>
          </NavLink>
          <i className="bi bi-list toggle-sidebar-btn"></i>
        </div>

        <div className="search-bar">
          <form
            className="search-form d-flex align-items-center"
            method="POST"
            action="#"
          >
            <input
              type="text"
              name="query"
              placeholder="Search"
              title="Enter search keyword"
            />
            <button type="submit" title="Search">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>

        <nav className="ikhataHeader-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item d-block d-lg-none">
              <NavLink className="nav-link nav-icon search-bar-toggle " to="/">
                <i className="bi bi-search"></i>
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <NavLink
                className="nav-link nav-icon"
                to="/"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-bell"></i>
                <span className="badge bg-primary badge-number">4</span>
              </NavLink>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-ikhataHeader">
                  You have 4 new notifications
                  <NavLink to="/">
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                      View all
                    </span>
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-exclamation-circle text-warning"></i>
                  <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>30 min. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-x-circle text-danger"></i>
                  <div>
                    <h4>Atque rerum nesciunt</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>1 hr. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-check-circle text-success"></i>
                  <div>
                    <h4>Sit rerum fuga</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>2 hrs. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-info-circle text-primary"></i>
                  <div>
                    <h4>Dicta reprehenderit</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>4 hrs. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-footer">
                  <NavLink to="/">Show all notifications</NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <NavLink
                className="nav-link nav-icon"
                to="/"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-chat-left-text"></i>
                <span className="badge bg-success badge-number">3</span>
              </NavLink>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                <li className="dropdown-ikhataHeader">
                  You have 3 new messages
                  <NavLink to="/">
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                      View all
                    </span>
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                  <NavLink to="/">
                    <img
                      src="assets/img/messages-1.jpg"
                      alt=""
                      className="rounded-circle"
                    />
                    <div>
                      <h4>Maria Hudson</h4>
                      <p>
                        Velit asperiores et ducimus soluta repudiandae labore
                        officia est ut...
                      </p>
                      <p>4 hrs. ago</p>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                  <NavLink to="/">
                    <img
                      src="assets/img/messages-2.jpg"
                      alt=""
                      className="rounded-circle"
                    />
                    <div>
                      <h4>Anna Nelson</h4>
                      <p>
                        Velit asperiores et ducimus soluta repudiandae labore
                        officia est ut...
                      </p>
                      <p>6 hrs. ago</p>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                  <NavLink to="/">
                    <img
                      src="assets/img/messages-3.jpg"
                      alt=""
                      className="rounded-circle"
                    />
                    <div>
                      <h4>David Muldon</h4>
                      <p>
                        Velit asperiores et ducimus soluta repudiandae labore
                        officia est ut...
                      </p>
                      <p>8 hrs. ago</p>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="dropdown-footer">
                  <NavLink to="/">Show all messages</NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown pe-3">
              <NavLink
                className="nav-link nav-profile d-flex align-items-center pe-0"
                to="/"
                data-bs-toggle="dropdown"
              >
                <img
                  src="https://www.koshishnepal.org/wp-content/uploads/2021/09/cropped-main-koshish-1.png"
                  alt="Profile"
                  className="rounded-circle"
                />
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  Nabin Joshi
                </span>
              </NavLink>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li style={{ textAlign: "center" }} className="dropdown-Header">
                  <h6>Nabin Joshi</h6>
                  <span>Full Stack Developer</span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <NavLink
                    className="dropdown-item d-flex align-items-center"
                    to="users-profile.html"
                  >
                    <i className="bi bi-person"></i>
                    <span>My Profile</span>
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <NavLink
                    className="dropdown-item d-flex align-items-center"
                    to="users-profile.html"
                  >
                    <i className="bi bi-gear"></i>
                    <span>Account Settings</span>
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <NavLink
                    className="dropdown-item d-flex align-items-center"
                    to="pages-faq.html"
                  >
                    <i className="bi bi-question-circle"></i>
                    <span>Need Help?</span>
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <NavLink
                    className="dropdown-item d-flex align-items-center"
                    to="/"
                  >
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Sign Out</span>
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default AdminHeader;
