import React, { useState } from "react";
import Base from "../core/Base";
import { Link, Redirect } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../auth/helper/index";
import styled, { css } from "styled-components";
import { Subbutton, Divone, Form, Inputdiv } from "../user/elements/signin";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            });
          });
        }
      })
      .catch(console.log("signin req failes"));
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/user/dashboard" />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
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

  const signInForm = () => {
    return (
      <div className="row">
        <Divone className="col-6 ">
          Welcome back to <span className="fs-1">SPIFFY-SHIRTS</span>
          <p>
            your favourite place to buy shirts and accessories,HAPPY SHOPPING
            FOLKS!!!
          </p>
          <button>Know More..</button>
        </Divone>
        <div className="col-6  text-left">
          {loadingMessage()}
          {errorMessage()}
          <Form>
            <Inputdiv className="form-group">
              <label className="text-light">Email</label>&nbsp;&nbsp;
              <i class="fas fa-at"></i>
              <input
                onChange={handleChange("email")}
                value={email}
                className="form-control"
                type="text"
              />
            </Inputdiv>
            <Inputdiv className="form-group">
              <label className="text-light">Password</label>&nbsp;&nbsp;
              <i class="fas fa-key"></i>
              <input
                onChange={handleChange("password")}
                value={password}
                className="form-control"
                type="password"
              />
            </Inputdiv>

            <Subbutton onClick={onSubmit}>
              Submit <i class="fab fa-telegram-plane"></i>
            </Subbutton>
            <Link to="/user/forgot">
              <span>Forgot Password ?</span>
            </Link>
          </Form>
        </div>
      </div>
    );
  };
  return (
    <Base title=" Sign in to SPIFFY" description="">
      {signInForm()}
      {performRedirect()}
      <p className="text-white text-center">{/*JSON.stringify(values)*/}</p>
    </Base>
  );
};

export default Signin;
