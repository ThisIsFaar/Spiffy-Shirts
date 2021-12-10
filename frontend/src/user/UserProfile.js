import React from "react";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { Menu, MenuButton, Container } from "./elements/userprofile";
import profile from "../images/profile.jpg";
const UserProfile = () => {
  function open() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = "none";
  }
  function close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
  }
  const { user } = isAuthenticated();

  const myProfile = () => {
    return (
      <Container class="container">
        <div class="images">
          {/* <img src={profile} alt="img"/> */}
          <i class="fas fa-user-check fa-10x"></i>
        </div>
        <div class="product">
          <h1>
            Howdy <span>{user.name}</span>
          </h1>
          <h2>
            Email:<span>{user.email}</span>
          </h2>
          <p class="desc">
            Spiffy-Shirts respects and care about your data and privacy we
            dont't store any of your personal data. so worry less while using
            spiffy and Why are you reading this so conciously we just want to
            add some data here so that our Ui looks good please stop wasting
            your time. Ohh Dude you are still reading get some help!
          </p>
        </div>
      </Container>
    );
  };
  return (
    <Base title="Profile" description="User Profile Page">
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
        <Link
          to="/user/profile"
          className=""
          style={{ textDecoration: "none" }}
        >
          Profile
        </Link>
        <Link
          to="/user/myorders"
          className=""
          style={{ textDecoration: "none" }}
        >
          Your Orders
        </Link>
      </div>
      <div className="row ">
        <div className="col-md-8 offset-md-2">{myProfile()}</div>
      </div>
    </Base>
  );
};

export default UserProfile;
