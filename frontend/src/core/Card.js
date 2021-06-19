import React, { useState, useEffect } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/CartHelper";
import CartToast from "./CartToast";

const Card = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  setReload = (f) => f,
  // function(f){return f}
  reload = undefined,
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const cartTitle = product ? product.name : `A photo from pexels`;
  const cartDescription = product
    ? product.description
    : `A default description`;
  const cartPrice = product ? product.price : `10 ka 2`;

  const addToCart = () => {
    addItemToCart(product, () => setRedirect(false));
  };
  const buyNow = () => {
    addItemToCart(product, () => setRedirect(true));
  };

  const getARedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };
  const showBuyNow = (addtoCart) => {
    return (
      addtoCart && (
        <div className="btn btn-block btn-outline-success " onClick={buyNow}>
          Buy Now
        </div>
      )
    );
  };
  const showAddToCart = (addtoCart) => {
    return addtoCart && <div onClick={addToCart}>{CartToast(product)}</div>;
  };
  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product._id);
            setReload(!reload);
          }}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          Remove from cart
        </button>
      )
    );
  };
  return (
    <div className="card text-white bg-dark border border-info ">
      <div className="card-header lead">{cartTitle}</div>
      <div className="card-body">
        {getARedirect(redirect)}
        <ImageHelper product={product} />
        <p className="lead bg-success font-weight-normal text-wrap">
          {cartDescription}
        </p>
        <p className="btn btn-success rounded  btn-sm px-4">₹{cartPrice}</p>
        <div className="row">
          <div className="col-12">{showAddToCart(addtoCart)}</div>
          <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
          <div className="col-12">{showBuyNow(addtoCart)}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
