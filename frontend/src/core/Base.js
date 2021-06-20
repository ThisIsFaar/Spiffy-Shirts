import React from "react";
import Menu from "./Menu";
import "../styles.css";
import { API } from "../backend";
import styled, { css } from "styled-components";
import Footer from "../core/Footer";

const StyledDiv = styled.div`
  font-size: 1em;
  /* margin: ${({ margin }) => margin || "8rem"};
  padding: 0.5em 1em; */
  border: 2px solid #66fcf1;
  border-radius: 15px;
  background-color: transparent;
`;
const H2 = styled.h2`
  font-family: "Merriweather Sans", sans-serif;
`;

const Base = ({
  title = "My title",
  description = "my long desc",
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
        <StyledDiv className={className}>{children}</StyledDiv>
      </div>
      <Footer />
    </div>
  );
};

export default Base;
