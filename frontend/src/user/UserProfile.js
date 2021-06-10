import React from "react";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import { Link } from "react-router-dom";
const UserProfile = () => {
  const { user, token } = isAuthenticated();

  const myProfile = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header text-secondary">User Profile</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge bg-success">Name:</span>
            {user.name}
          </li>
          <li className="list-group-item">
            <span className="badge bg-success">Email:</span>
            {user.email}
          </li>
        </ul>
      </div>
    );
  };
  return (
    <Base
      title="Profile"
      description="User Profile Page"
      className="container bg-info p-4"
    >
      <Link className="btn btn-danger" to={`/user/dashboard`}>
        <span className="">Main Menu</span>
      </Link>
      <div className="row bg-white rounded">
        <div className="col-md-8 offset-md-2">{myProfile()}</div>
      </div>
    </Base>
  );
};

export default UserProfile;
