import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PasswordReset } from "./helper/userapicalls";
import { Subbutton, Divone, Form, Inputdiv } from "../user/elements/signin";
import { Toast } from "../core/elements/Toast";
import Menu from "../core/Menu";

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
      <Menu />
      <div className="col-md-6 offset-sm-3 text-left">
        <form className="mt-5">
          {successMessage()}
          {errorMessage()}
          <Inputdiv className="form-group">
            <label className="text-light">New Password</label>&nbsp;&nbsp;
            <i class="fas fa-key"></i>
            <input
              onChange={handleChange}
              className="form-control"
              type="password"
            />
          </Inputdiv>

          <Toast>
            <button onClick={onSubmit} className="butt">
              Update
            </button>
          </Toast>
        </form>
      </div>
    </div>
  );
};

export default Reset;
