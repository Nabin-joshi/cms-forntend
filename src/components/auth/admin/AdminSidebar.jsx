import React from "react";
import { NavLink } from "react-router-dom";

function AdminSidebar() {
  return (
    <>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <NavLink className="nav-link " to="/admin">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link collapsed"
              data-bs-target="#components-nav"
              data-bs-toggle="collapse"
            >
              <i className="bi bi-menu-button-wide"></i>
              <span>Components</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </NavLink>
            <ul
              id="components-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <NavLink to="/admin/slider">
                  <i className="bi bi-circle"></i>
                  <span>Slider</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/geoCoverage">
                  <i className="bi bi-circle"></i>
                  <span>Geographical Coverage</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/ourWork">
                  <i className="bi bi-circle"></i>
                  <span>Our Work</span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/admin/yourSupport">
                  <i className="bi bi-circle"></i>
                  <span>Your Support</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/latestnews">
                  <i className="bi bi-circle"></i>
                  <span>Latest News</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/stories">
                  <i className="bi bi-circle"></i>
                  <span>Stories</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/ourValues">
                  <i className="bi bi-circle"></i>
                  <span>Our Values</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/ourImpact">
                  <i className="bi bi-circle"></i>
                  <span>Our Impact</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/theJourney">
                  <i className="bi bi-circle"></i>
                  <span>The Journey</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/ourPartners">
                  <i className="bi bi-circle"></i>
                  <span>Our Partners</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/features">
                  <i className="bi bi-circle"></i>
                  <span>Feature</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/aboutUs">
                  <i className="bi bi-circle"></i>
                  <span>About Us</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/getInvolved">
                  <i className="bi bi-circle"></i>
                  <span>Get Involved</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/resources">
                  <i className="bi bi-circle"></i>
                  <span>Resources</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/getInTouch">
                  <i className="bi bi-circle"></i>
                  <span>Get In Touch</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/nlgmf">
                  <i className="bi bi-circle"></i>
                  <span>Newsletter Group Mapping</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/donation">
                  <i className="bi bi-circle"></i>
                  <span>Donation</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/footer">
                  <i className="bi bi-circle"></i>
                  <span>Footer</span>
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link collapsed"
              data-bs-target="#newsletter-nav"
              data-bs-toggle="collapse"
            >
              <i className="bi bi-menu-button-wide"></i>
              <span>NewsLetters</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </NavLink>
            <ul
              id="newsletter-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <NavLink to="/admin/nwusers">
                  <i className="bi bi-circle"></i>
                  <span>NewsLetter Users</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/nwgroups">
                  <i className="bi bi-circle"></i>
                  <span>NewsLetter Groups</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/nwusersgroupmap">
                  <i className="bi bi-circle"></i>
                  <span>Mapping Users - Group </span>
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default AdminSidebar;
