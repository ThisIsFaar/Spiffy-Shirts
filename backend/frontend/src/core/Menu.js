import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper";
import brand from "../images/brand.jpg";
const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ffffff" };
  } else {
    return { color: "#66fcf1" };
  }
};

const Menu = ({ history }) => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <a class="navbar-brand" href="#">
        <img src={brand} width="175" height="40" alt="" />
      </a>
      <div
        className="container-fluid"
        style={{
          marginLeft: -32,
        }}
      >
        <button
          className="navbar-toggler bg-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                style={currentTab(history, "/")}
                className="nav-link active"
                to="/"
              >
                <i class="fas fa-lg fa-home"></i>
                &nbsp; Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={currentTab(history, "/products")}
                className="nav-link active"
                to="/products"
              >
                <i class="fas fa-lg fa-tshirt"></i>
                &nbsp;Products
              </Link>
            </li>
          </ul>
          <ul className="d-flex flex-row-reverse mb-2 mb-lg-0">
            {!isAuthenticated() && (
              <Fragment>
                <li className="nav-item">
                  <Link
                    style={currentTab(history, "/signin")}
                    className="nav-link"
                    to="/signin"
                  >
                    <i class="fas fa-lg fa-sign-in-alt"></i>
                    &nbsp;Signin
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={currentTab(history, "/signup")}
                    className="nav-link"
                    to="/signup"
                  >
                    <i class="fas fa-lg fa-user-plus"></i>
                    &nbsp;Signup
                  </Link>
                </li>
              </Fragment>
            )}
            {isAuthenticated() && (
              <li className="nav-item">
                <span
                  alt="Sign-out"
                  style={currentTab(history, "/signin")}
                  className="nav-link"
                  onClick={() => {
                    signout(() => {
                      history.push("/");
                    });
                  }}
                >
                  <i class="fas fa-lg  fa-sign-out-alt"></i>
                </span>
              </li>
            )}

            {isAuthenticated() && isAuthenticated().user.role === 0 && (
              <Fragment>
                <li className="nav-item">
                  <Link
                    alt="Sign-out"
                    style={currentTab(history, "/cart")}
                    className="nav-link"
                    to="/cart"
                  >
                    <i class="fas fa-lg fa-shopping-cart"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={currentTab(history, "/user/dashboard")}
                    className="nav-link"
                    to="/user/dashboard"
                  >
                    <i class="fas fa-lg fa-user-alt"></i>
                  </Link>
                </li>
              </Fragment>
            )}

            {isAuthenticated() && isAuthenticated().user.role === 1 && (
              <li className="nav-item">
                <Link
                  style={currentTab(history, "/admin/dashboard")}
                  className="nav-link"
                  to="/admin/dashboard"
                >
                  <i class="fas fa-lg fa-user-shield"></i>
                  A.Dashboard
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default withRouter(Menu);
