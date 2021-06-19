import React, { useState, useEffect } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/CartHelper";
import CartToast from "./CartToast";
import { CardDesign } from "./elements/Card";
import { Toast } from "./elements/Toast";

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
        <div className="butt" onClick={buyNow}>
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
          className="butt"
        >
          Remove
        </button>
      )
    );
  };
  return (
    <CardDesign className="row m-1 rounded Card_Root">
      <div className="col-md-6 p-0">
        {getARedirect(redirect)}
        <ImageHelper product={product} />
      </div>
      <div className="col-md-6 p-0 Card_Height">
        <div className="Card_Title h5 py-2 px-2">{cartTitle}</div>
        <p className="Card_Desc h6 text-wrap px-1 py-1 h-25">
          {cartDescription}
        </p>

        <p className="h3 text-center h-25 py-4 Card_Price">₹ {cartPrice}</p>
        <div className="row px-2">
          <div className="col-6 p-0">{showAddToCart(addtoCart)}</div>
          <Toast className="col-6 p-0">{showBuyNow(addtoCart)}</Toast>
          <Toast className="col-6 p-0">
            {showRemoveFromCart(removeFromCart)}
          </Toast>

        </div>
      </div>
    </CardDesign>
  );
};

export default Card;
