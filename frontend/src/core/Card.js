import React, { useState } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/CartHelper";
import CartToast from "./CartToast";
import { CardDesign } from "./elements/Card";
import { SpiffyBtn } from "./elements/SpiffyBtn";
import shirtFile from "./mens_casual_shirt.glb";

const Card = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  setReload = (f) => f,
  // function(f){return f}
  reload = undefined,
}) => {
  const [redirect, setRedirect] = useState(false);

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
    return addtoCart && <SpiffyBtn onClick={buyNow}>Buy Now</SpiffyBtn>;
  };
  const showAddToCart = (addtoCart) => {
    return addtoCart && <SpiffyBtn onClick={addToCart}>Add To Cart</SpiffyBtn>;
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
    <CardDesign>
      <div style={{ height: "60%" }}>
        {getARedirect(redirect)}
        {/* <ImageHelper product={product} /> */}
        <model-viewer
          src={shirtFile}
          ar
          shadow-intensity="1"
          camera-controls
          touch-action="pan-y"
        ></model-viewer>
      </div>
      <div className="">
        <div className="Card_Title text-center">{cartTitle}</div>
        <p className="Card_Desc text-wrap">{cartDescription}</p>

        <p className="text-center Card_Price">₹ {cartPrice}</p>
        <div className="card-btns">
          {showAddToCart(addtoCart)}
          {showBuyNow(addtoCart)}
          {}
        </div>
      </div>
    </CardDesign>
  );
};

export default Card;
