import React from "react";
import styled from "styled-components";
import Toasty from "./helper/ToastImg";
import { Toast } from "./elements/Toast";
import profile from "../images/profile.jpg";
import { Subbutton } from "../user/elements/signin";

const cartToast = (product) => {
  const close = () => {
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.classList.remove("show");
  };
  const show = () => {
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  };
  return (
    <Toast>
      <div
        id="snackbar"
        class="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <strong>Added To Cart</strong>
          <small>11 mins ago</small>
          <button id="close" type="button" aria-label="Close" onClick={close}>
            <span>&times;</span>
          </button>
        </div>
        <div class="toast-body">
          <Toasty id="image" product={product} />
          {product.name}
          <br />
          {product.price}
        </div>
      </div>
      <button className="butt" onClick={show}>
        Add-To-Cart
      </button>
    </Toast>
  );
};

export default cartToast;
