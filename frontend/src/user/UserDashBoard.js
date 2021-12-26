import React from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper/index";
import { Link } from "react-router-dom";
import { Menu, MenuButton, Container, Menudiv } from "./elements/userprofile";
import profile from "../images/profile.jpg";
import styled from "styled-components";

const Ml = styled.div`
  @media only screen and (max-width: 425px) {
    #prd-ml {
      padding: 1rem !important;
    }
  }
`;
const UserDashBoard = () => {
  function open() {
    const main = document.getElementById("main");
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = "none";
    const menu = document.getElementById("menu");
    menu.classList.remove("col-0");
    menu.classList.add("col-3");
    main.classList.remove("col-12");
    main.classList.add("col-9");
  }
  function close() {
    document.getElementById("main").style.marginLeft = "0%";
    const main = document.getElementById("main");
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
    const menu = document.getElementById("menu");
    menu.classList.remove("col-3");
    menu.classList.add("col-0");
    main.classList.remove("col-9");
    main.classList.add("col-13");
  }
  const {
    user: { name, email },
  } = isAuthenticated();
  const userLeftSide = () => {
    return (
      <div>
        <div
          style={{
            display: "flex",
            gap: "5rem",
            justifyContent: "center",
            color: "#fffff",
            textDecoration: "underline",
            fontSize: "2rem",
          }}
        >
          {/* <Link
            to="/user/profile"
            className=""
            style={{ textDecoration: "none" }}
          >
            Profile
          </Link> */}
          <Link
            to="/user/myorders"
            className=""
            style={{ textDecoration: "none" }}
          >
            Your Orders
          </Link>
        </div>
      </div>
    );
  };
  const userRightSide = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#837777c4",
          padding: "2rem",
          borderRadius: "3rem",
        }}
      >
        <div class="images">
          <i class="fas fa-user-circle fa-10x"></i>
        </div>
        <div style={{ width: "100%" }}>
          <h1 className="text-center" style={{ textTransform: "Capitalize" }}>
            {name}
          </h1>
          <h2 className="text-center" style={{ fontSize: "1rem" }}>
            Email:<span>{email}</span>
          </h2>
          <p class="desc" style={{ textAlign: "justify" }}>
            Spiffy-Shirts respects and care about your data and privacy we
            dont't store any of your personal data. so worry less while using
            spiffy.
          </p>
        </div>
      </div>
    );
  };
  return (
    <Ml>
      <Base
        title={`Howdy ${name}`}
        description="All Your perosonal Data lie here!"
        class="container bg-info p-4"
      >
        <div margin="3rem" className="row">
          <Menudiv id="menu" className="col-0">
            {userLeftSide()}
          </Menudiv>
        </div>
        <div id="main" className="col-12">
          {userRightSide()}
        </div>
      </Base>
    </Ml>
  );
};

export default UserDashBoard;
