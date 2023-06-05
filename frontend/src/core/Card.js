import React, { useState } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/CartHelper";
import CartToast from "./CartToast";
import { CardDesign } from "./elements/Card";
import { SpiffyBtn } from "./elements/SpiffyBtn";
import shirtFile from "./mens_casual_shirt.glb";
import one2d from "./assets/2d/one.png";
import one3d from "./assets/3d/one.glb";

import two2d from "./assets/2d/two.png";
import two3d from "./assets/3d/two.glb";

import three2d from "./assets/2d/three.png";
import three3d from "./assets/3d/three.glb";

import four2d from "./assets/2d/four.png";
import four3d from "./assets/3d/four.glb";

import five2d from "./assets/2d/five.png";
import five3d from "./assets/3d/five.glb";

import six2d from "./assets/2d/six.png";
import six3d from "./assets/3d/six.glb";

import seven2d from "./assets/2d/seven.png";
import seven3d from "./assets/3d/seven.glb";

import eight2d from "./assets/2d/eight.png";
import eight3d from "./assets/3d/eight.glb";

import nine2d from "./assets/2d/nine.png";
import nine3d from "./assets/3d/nine.glb";



const Card = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  setReload = (f) => f,
  // function(f){return f}
  reload = undefined,
  setSelectedGlb,
  setIsmodelOpen,
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
  console.log();
  const imgInfo = {
    one: {
      png: one2d,
      glb: one3d,
    },
    two: {
      png: two2d,
      glb: two3d,
    },
    three: {
      png: three2d,
      glb: three3d,
    },
    four: {
      png: four2d,
      glb: four3d,
    },
    five: {
      png: five2d,
      glb: five3d,
    },
    six: {
      png: six2d,
      glb: six3d,
    },
    seven: {
      png: seven2d,
      glb: seven3d,
    },
    eight: {
      png: eight2d,
      glb: eight3d,
    },
    nine: {
      png: nine2d,
      glb: nine3d,
    },
  };

  return (
    <CardDesign>
      <div style={{ height: "50%" }}>
        {getARedirect(redirect)}
        {/* <ImageHelper product={product} /> */}
        <img
          src={imgInfo[product.rank].png}
          alt="pic"
          className="rounded-circle w-100 h-100"
        />
      </div>
      <div className="">
        <div className="Card_Title text-center">{cartTitle}</div>
        <p className="Card_Desc text-wrap">{cartDescription}</p>

        <p className="text-center Card_Price">₹ {cartPrice}</p>
        <div className="card-btns">
          <SpiffyBtn
            onClick={() => {
              setIsmodelOpen(true);
              setSelectedGlb(imgInfo[product.rank].glb);
            }}
          >
            {" "}
            View In 3D
          </SpiffyBtn>
          {showAddToCart(addtoCart)}
          {showBuyNow(addtoCart)}
          {}
        </div>
      </div>
    </CardDesign>
  );
};

export default Card;
