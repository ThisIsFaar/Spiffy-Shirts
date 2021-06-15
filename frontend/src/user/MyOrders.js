import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { getOrders } from "../admin/helper/adminapicall";
import StatusModal from "./Modal";
import $ from "jquery";
import profile from "../images/profile.jpg";
import styled from "styled-components";
import { Container, Menu, MenuButton } from "./elements/orders";
import Image from "./helper/Image";

const MyOrders = () => {
  function open() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = "none";
  }
  function close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
  }
  const { user, token } = isAuthenticated();
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState("");
  const [temp, settemp] = useState("");
  let productId = {};

  const preload = () => {
    getOrders(user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setOrders(data);
      }
    });
  };
  const handleChange = (event) => {
    console.log(event.target.value);
    setStatus(event.target.value);
  };
  useEffect(() => {
    preload();
  }, [temp]);

  const TrackOrder = (order) => (event) => {
    event.preventDefault();
    console.log(order);
    settemp(event.target.value);
    console.log("THE EVENT IS", event.target.value);
    document.getElementById("con").style.filter = "blur(8px)";

    $("#id").text(order);
    $("#main").css("display", "block");
    //   $(".modal").css("background-color", "rgb(0 0 0 / 60%)");
  };
  return (
    <Base title="" description="" className="">
      <Menu
        class="w3-sidebar w3-bar-block w3-card w3-animate-left"
        id="mySidebar"
      >
        <ul className="list-group">
          <li className="list-group-item ">
            <button className="w3-bar-item w3-large" onClick={close}>
              {" "}
              &times;
            </button>
          </li>
          <li className="list-group-item">
            <i class="fas fa-home"></i>&nbsp;
            <Link className="" to="/user/dashboard">
              <span className="">Home</span>
            </Link>
          </li>
          <li className="list-group-item ">
            <i class="fas fa-id-card"></i>&nbsp;
            <Link to="/user/profile" className="">
              Profile
            </Link>
          </li>
          <li className="list-group-item">
            <i class="fas fa-box-open"></i>&nbsp;
            <Link to="/user/myorders" className="">
              Your Orders
            </Link>
          </li>
        </ul>
      </Menu>
      <MenuButton id="openNav" className="" onClick={open}>
        &#9776;
      </MenuButton>
      <div id="con" className="row">
        <h2 className="text-center text-white my-3">Your Orders</h2>
        <div key="" className="row text-center mb-2 "></div>
        <div className="col-12">
          {orders.map((order, index) => {
            const products = order.products;
            let PriceIs = 0;
            let countProducts = 0;
            return (
              // <div key={index} className="row card text-center mb-2 flex-row">
              //   <div className="col-12">
              //     {products.map((product) => {
              //       PriceIs += product.price;
              //       countProducts++;
              //     })}
              //     <div>
              //       <div class="images">
              //         <img src={profile} />
              //       </div>
              //       <h3 className="text-info text-left">
              //         {products[0].name}
              //         {countProducts != 1 ? (
              //           <span> and {countProducts - 1} others</span>
              //         ) : (
              //           <span></span>
              //         )}
              //       </h3>
              //       <h3 className="text-info text-left">Total :₹ {PriceIs}</h3>
              //     </div>
              //   </div>

              //   <div className="col-12">
              //     <button
              //       type="button"
              //       class="btn btn-info"
              //       onClick={TrackOrder(`${order.status}`)}
              //       value={order.status}
              //     >
              //       Track
              //     </button>
              //     {/* <h3 className="text-success text-left">{order.status}</h3> */}
              //   </div>
              // </div>
              <Container className="container col-12">
                {products.map((product) => {
                  PriceIs += product.price;
                  countProducts++;
                  productId = product;
                })}
                <div class="images">
                  <Image product={productId} />
                </div>
                <div class="product">
                  <h1>
                    <span>
                      {products[0].name}
                      {countProducts != 1 ? (
                        <span> and {countProducts - 1} others</span>
                      ) : (
                        <span></span>
                      )}
                    </span>
                  </h1>
                  <h2>
                    <span>Total :₹ {PriceIs}</span>
                  </h2>
                  <p class="desc">{products[0].description}</p>
                  <br />
                  <br />
                  <div class="buttons">
                    <button
                      type="button"
                      onClick={TrackOrder(`${order._id}`)}
                      value={order.status}
                    >
                      Track Order <i class="fas fa-shipping-fast"></i>
                    </button>
                  </div>
                </div>
              </Container>
            );
          })}
        </div>
      </div>
      <StatusModal order={temp} />
    </Base>
  );
};

export default MyOrders;
