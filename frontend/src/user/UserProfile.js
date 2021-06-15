import React from "react";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { Menu, MenuButton, Container, Menudiv } from "./elements/userprofile";
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
  const { user, token } = isAuthenticated();

  const myProfile = () => {
    return (
      //   <div className="card mb-4">
      //     <h4 className="card-header text-secondary">User Profile</h4>
      //     <ul className="list-group">
      //       <li className="list-group-item">
      //         <span className="badge bg-success">Name:</span>
      //         {user.name}
      //       </li>
      //       <li className="list-group-item">
      //         <span className="badge bg-success">Email:</span>
      //         {user.email}
      //       </li>
      //     </ul>
      //   </div>
      // );
      <Container class="container">
        <div class="images">
          <img src={profile} />
        </div>
        <div class="product">
          <h1>
            Hello <span>{user.name}</span>
          </h1>
          <h2>
            Email:<span>{user.email}</span>
          </h2>
          <p class="desc"></p>
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
    <Base title="Profile" description="User Profile Page">
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
      <div className="row ">
        <div className="col-md-8 offset-md-2">{myProfile()}</div>
      </div>
    </Base>
  );
};

export default UserProfile;
