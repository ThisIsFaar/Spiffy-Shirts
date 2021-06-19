import React, { useState } from "react";
import Base from "../core/Base";
import Menu from "../core/Menu";
import { emailVerification } from "./helper/userapicalls";
import { Toast } from "../core/elements/Toast";
import { Subbutton, Divone, Form, Inputdiv } from "../user/elements/signin";

const ForgotPassword = () => {
  const [email, setemail] = useState();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    console.log(event);
    setError("");
    setemail(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    emailVerification({ email })
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
            Password Reset Link Is Sent To Your Email
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
    <Base>
      <div>
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            {successMessage()}
            {errorMessage()}
            <Inputdiv className="form-group">
              <label className="text-light">Email Id</label>&nbsp;&nbsp;
              <i class="fas fa-at"></i>
              <input
                onChange={handleChange}
                className="form-control"
                type="text"
              />
            </Inputdiv>

            <Toast>
              <button onClick={onSubmit} className="butt">
                Verify
              </button>
            </Toast>
          </form>
        </div>
      </div>
    </Base>
  );
};

export default ForgotPassword;
