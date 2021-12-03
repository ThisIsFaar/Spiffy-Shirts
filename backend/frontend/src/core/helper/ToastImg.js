import React from "react";
import { API } from "../../backend";
import { Images } from "../elements/Toastimage";

const ToastImg = ({ product }) => {
  const imageUrl = product
    ? `${API}/product/photo/${product._id}`
    : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
  return (
    <div className="">
      <Images src={imageUrl} alt="photo" />
    </div>
  );
};

export default ToastImg;
