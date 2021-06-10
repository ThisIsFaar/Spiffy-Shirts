import React, { useState } from "react";
import { emailVerification } from "./helper/userapicalls";

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
    <div>
      <div className="col-md-6 offset-sm-3 text-left">
        <form>
          {successMessage()}
          {errorMessage()}
          <div className="form-group">
            <label className="text-light">Email Id</label>
            <input
              onChange={handleChange}
              className="form-control"
              type="text"
            />
          </div>

          <button onClick={onSubmit} className="btn btn-success btn-block">
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
