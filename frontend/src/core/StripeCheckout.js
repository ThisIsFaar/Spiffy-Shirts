import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../auth/helper";
import { cartEmpty, loadCart } from "./helper/CartHelper";
import { Link } from "react-router-dom";
import StripeCheckoutButton from "react-stripe-checkout";
import { API } from "../backend";
import { createOrder } from "./helper/OrderHelper";
const StripeCheckout = ({
  products,
  setReload = (f) => f,
  reload = undefined,
}) => {
  const [data, setData] = useState({
    loading: false,
    success: false,
    error: "",
    address: "",
  });

  const tokens = isAuthenticated() && isAuthenticated().token;
  const userId = isAuthenticated() && isAuthenticated().user._id;

  const getFinalAmount = () => {
    let amount = 0;
    products &&
      products.map((p) => {
        amount = amount + p.price;
      });
    return amount;
  };

  const makePayment = (token) => {
    const body = {
      token,
      products,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    return fetch(`${API}/stripepayment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log(response);
        const orderData = {
          products: products,
          amount: getFinalAmount(),
        };
        createOrder(userId, tokens, orderData);
        //call further methods here
        cartEmpty(() => {
          console.log("Did we got a crash");
        });
        setReload(!reload);
      })
      .catch((error) => console.log(error));
  };

  const showStripButton = () => {
    return isAuthenticated() ? (
      <StripeCheckoutButton
        stripeKey="pk_test_51IwQVtSJRad8JjCcuDhOoqA1Qqbq9mWvP7f0K9E74Vt9rDnnGqx7AXVtsOit5ndXjoy08sZF1lTg1AE8UlUC9lZ60034aucp7b"
        // token={makePayment}
        token={makePayment}
        amount={getFinalAmount() * 100}
        name="Buy T-shirt"
        shippingAddress
        billingAddress
      >
        <button className="btn btn-success">Pay with Stripe</button>
      </StripeCheckoutButton>
    ) : (
      <Link to="/signin">
        <button className="btn btn-warning">Signin</button>
      </Link>
    );
  };

  return (
    <div>
      <h3 className="text-white">Stripe Checkout {getFinalAmount()}</h3>
      {showStripButton()}
    </div>
  );
};

export default StripeCheckout;
