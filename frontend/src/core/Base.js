import React from "react";
import Menu from "./Menu";
import "../styles.css";
import { API } from "../backend";
import styled, { css } from "styled-components";

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
const Footer = styled.footer`
  background-color: #66fcf1;
  border: solid 2px white;
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

      <footer className="footer  mt-auto py-3">
        <Footer className="container-fluid  text-black text-center py-3">
          <h4>have any ques?</h4>
          <button className="btn btn-warning btn-lg">Contact us</button>
        </Footer>
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
