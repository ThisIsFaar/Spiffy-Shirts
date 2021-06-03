import React from "react";
import Menu from "./Menu";

import "../styles.css";

import { API } from "../backend";

const Base = ({
  title = "My title",
  description = "my long desc",
  className = "bg-dark text-white p-4",
  children,
}) => {
  console.log("API is ", API);
  return (
    <div>
      <Menu />
      <div className="container-fluid">
        <div className="jumbotron bg-dark text-white text-center">
          <h2 className="display-4"> {title} </h2>
          <p className="lead"> {description} </p>
        </div>
        <div className={className}>{children}</div>
      </div>

      <footer className="footer bg-dark mt-auto py-3">
        <div className="container-fluid bg-success text-white text-center py-3">
          <h4>have any ques?</h4>
          <button className="btn btn-warning btn-lg">Contact us</button>
        </div>
        <div className="container">
          <span className="text-muted">
            amazing place to by <span className="text-white">T-shirts</span>{" "}
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Base;
