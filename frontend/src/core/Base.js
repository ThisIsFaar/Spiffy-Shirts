import React from "react";
import Menu from "./Menu";
import "../styles.css";
import { API } from "../backend";
import styled from "styled-components";
import Footer from "./Footer";

const H2 = styled.h2`
  font-family: "Merriweather Sans", sans-serif;
`;

const Base = ({
  title = "Reset Password",
  description = "lost or forgot your password? no worries! Reset It Now ",
  className = " text-white p-5 m-2",
  children,
}) => {
  console.log("API is ", API);
  return (
    <div>
      <Menu />
      <div className="container-fluid">
        <div className="jumbotron  text-white text-center">
          <H2 className="display-4">{title}</H2>
          <p className="lead"> {description} </p>
        </div>
        <div className={className}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Base;
