/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./css/dashboard.css";

const Dashboard = ({ children }) => {
  const [sidebarVisibility, setSidebarVisibility] = useState("true");

  const toggleClicker = () => {
    console.log("Btn working");
    setSidebarVisibility((val) => !val);
  };

  return (
    <div id="wrapper">
      <div
        id="sidebar"
        className={`sidebar ${sidebarVisibility ? " " : "collapse"}`}
      >
        <div className="d-flex flex-column align-items-center">
          <ul className="navbar-nav p-0 m-0 mt-3">
            <Link id="dashboard-link" className=" btn btn-sm " to="/">
              <li
                className="nav-item active mb-2 p-2 d-flex"
                id="dashboard-list-el"
              >
                <i
                  id="dashboard-icon"
                  className="fas fa-cog d-none d-md-block p-2 fs-2 custom-icons"
                ></i>
                <h5 className="side-titles">Dashboard</h5>
              </li>
            </Link>
            <hr />
            <li className="nav-item mb-2 p-2 mx-2">
              <button
                className="btn shadow-none d-flex align-items-baseline"
                data-bs-toggle="collapse"
                data-bs-target="#user-menu"
              >
                <i className="fas fa-users d-none d-md-block m-2 custom-icons"></i>
                <h6 className="side-titles">Users</h6>
              </button>
              <div className="collapse" id="user-menu">
                <ul className="list-group bg-transparent border-0 p-2 card p-sm-0 mx-sm-0">
                  <li className="list-group-item">
                    <Link
                      className="text-decoration-none"
                      to="/dashboard/create-user"
                    >
                      Create User
                    </Link>
                  </li>
                  <li className="list-group-item ">
                    <Link
                      className="text-decoration-none"
                      to="/dashboard/all-users"
                    >
                      View all users
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item mb-2 p-2 mx-2">
              <button
                className="btn shadow-none d-flex align-items-baseline"
                data-bs-toggle="collapse"
                data-bs-target="#product-menu"
              >
                <i className="fas fa-truck d-none d-md-block m-2 custom-icons"></i>
                <h6 className="side-titles">Products</h6>
              </button>

              <div className="collapse" id="product-menu">
                <ul className="list-group bg-transparent border-0 p-2 card p-sm-0 mx-sm-0">
                  <li className="list-group-item">
                    <Link
                      className="text-decoration-none"
                      to="/dashboard/create-product"
                    >
                      Create new Product
                    </Link>
                  </li>
                  <li className="list-group-item ">
                    <Link
                      className="text-decoration-none"
                      to="/dashboard/all-products"
                    >
                      View all Products
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        id="content"
        className={`content ${sidebarVisibility ? " " : "fullscreen"}`}
      >
        <nav
          id="navbar"
          className="navbar navbar-expand-md navbar-light bg-light"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#!">
              <h2>CRUD in React</h2>
            </a>
            <a
              href="#!"
              className="position-relative"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Click to toggle Sidebar"
            >
              <img
                className="img-thumbnail rounded-circle me-1 "
                src="data:image/png;base64,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"
                alt="user-avatar"
                width={"50px"}
                height={"40px"}
                onClick={() => toggleClicker()}
              />
              <span
                id="img-status"
                className={`position-absolute top-25 start-60 translate-middle  border border-light rounded-circle ${
                  sidebarVisibility ? "bg-danger" : "bg-success"
                }`}
              ></span>
            </a>
          </div>
        </nav>

        {children}
      </div>
    </div>
  );
};

export default Dashboard;