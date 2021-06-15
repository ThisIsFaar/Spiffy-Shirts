import React from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper/index";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Menu, MenuButton, Container, Menudiv } from "./elements/userprofile";
import profile from "../images/profile.jpg";

// const margin = "3rem";
// const StyledDiv = styled.div`
//   //font-size: 1em;
//   //margin: 1em;
//   //border: 2px solid #66fcf1;
//   border-radius: 3px;
//   background-color: transparent;
// `;
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
    user: { name, email, role },
  } = isAuthenticated();
  const userLeftSide = () => {
    return (
      // <div className="card">
      //   <h4 className="card-header bg-dark text-white">User Navigations</h4>
      //   <ul className="list-group">
      //     <li className="list-group-item">
      //       <Link to="/user/profile" className="nav-link text-success">
      //         Profile
      //       </Link>
      //     </li>
      //     <li className="list-group-item">
      //       <Link to="/user/myorders" className="nav-link text-success">
      //         Your Orders
      //       </Link>
      //     </li>
      //   </ul>
      // </div>
      <div>
        <Menu
          class="w3-sidebar w3-bar-block w3-card w3-animate-left"
          id="mySidebar"
        >
          <ul className="list-group">
            <li className="list-group-item ">
              <button className="w3-bar-item w3-large" onClick={close}>
                {" "}
                &times;
              </button>
            </li>
            <li className="list-group-item">
              <i class="fas fa-home"></i>&nbsp;
              <Link className="" to="/user/dashboard">
                <span className="">Home</span>
              </Link>
            </li>
            <li className="list-group-item ">
              <i class="fas fa-id-card"></i>&nbsp;
              <Link to="/user/profile" className="">
                Profile
              </Link>
            </li>
            <li className="list-group-item">
              <i class="fas fa-box-open"></i>&nbsp;
              <Link to="/user/myorders" className="">
                Your Orders
              </Link>
            </li>
          </ul>
        </Menu>
        <MenuButton id="openNav" className="" onClick={open}>
          &#9776;
        </MenuButton>
      </div>
    );
  };
  const userRightSide = () => {
    return (
      <Container class="container">
        <div class="images">
          <img src={profile} />
        </div>
        <div class="product">
          <h1>
            Hello <span>{name}</span>
          </h1>
          <h2>
            Email:<span>{email}</span>
          </h2>
          <p class="desc">
            The Nike Epic React Flyknit foam cushioning is responsive yet
            light-weight, durable yet soft. This creates a sensation that not
            only enhances the feeling of moving forward, but makes running feel
            fun, too.
          </p>
          <br />
          <br />
          <div class="buttons">
            <button>
              <i class="fab fa-instagram"></i>
            </button>
            <button>
              <button>
                <i class="fab fa-facebook-square"></i>
              </button>
            </button>
            <button>
              <i class="fab fa-twitter-square"></i>
            </button>
            <button>
              <i class="fab fa-snapchat-square"></i>
            </button>
          </div>
        </div>
      </Container>
    );
  };
  return (
    <Base
      title=" Welcome User"
      description="User's Stuff Page"
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
  );
};

export default UserDashBoard;
