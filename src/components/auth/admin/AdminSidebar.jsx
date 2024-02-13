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
                <NavLink to="/admin/services">
                  <i className="bi bi-circle"></i>
                  <span>Services</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/slider">
                  <i className="bi bi-circle"></i>
                  <span>Slider</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/stories">
                  <i className="bi bi-circle"></i>
                  <span>Stories</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/features">
                  <i className="bi bi-circle"></i>
                  <span>Feature</span>
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
