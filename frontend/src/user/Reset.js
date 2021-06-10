import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PasswordReset } from "./helper/userapicalls";

const Reset = ({ match }) => {
  const [password, setpassword] = useState();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    console.log(event);
    setError("");
    setpassword(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    PasswordReset({ password }, match.params.token)
      .then((data) => {
        if (data.error) {
          setError(data.error);
          setSuccess(false);
        } else {
          setError(false);
          setSuccess(true);
        }
      })
      .catch(console.log("error in password update"));
  };
  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            Password is updated <Link to="/signin">Login Here</Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="col-md-6 offset-sm-3 text-left">
        <form>
          {successMessage()}
          {errorMessage()}
          <div className="form-group">
            <label className="text-light">New Password</label>
            <input
              onChange={handleChange}
              className="form-control"
              type="password"
            />
          </div>

          <button onClick={onSubmit} className="btn btn-success btn-block">
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reset;
