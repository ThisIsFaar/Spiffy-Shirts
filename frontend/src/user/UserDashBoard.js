import React from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper/index";
import { Link } from "react-router-dom";

const UserDashBoard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();
  const userLeftSide = () => {
    return (
      <div className="card">
        <h4 className="card-header bg-dark tet-white">User Navigations</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/user/profile" className="nav-link text-success">
              Profile
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/user/myorders" className="nav-link text-success">
              Your Orders
            </Link>
          </li>
        </ul>
      </div>
    );
  };
  const userRightSide = () => {
    return <div>Hello User!</div>;
  };
  return (
    <Base
      title=" Welcome User"
      description="User's Stuff Page"
      class="container bg-info p-4"
    >
      <div className="row">
        <div className="col-3">{userLeftSide()}</div>
        <div className="col-9">{userRightSide()}</div>
      </div>
    </Base>
  );
};

export default UserDashBoard;
