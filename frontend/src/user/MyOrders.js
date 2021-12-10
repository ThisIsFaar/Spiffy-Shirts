import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { getOrders } from "../admin/helper/adminapicall";
import StatusModal from "./Modal";
import $ from "jquery";
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
    <Base title="Orders" description="order history" className="">
      <div
        style={{
          display: "flex",
          gap: "5rem",
          justifyContent: "center",
          color: "#fffff",
          textDecoration: "underline",
          fontSize: "2rem",
        }}
      >
        <Link
          to="/user/dashboard"
          className="text-white"
          style={{ textDecoration: "none" }}
        >
          Profile
        </Link>
        <Link
          to="/user/myorders"
          className="text-white"
          style={{ textDecoration: "none" }}
        >
          Your Orders
        </Link>
      </div>
      <div id="con" className="row">
        <div key="" className="row text-center mb-2 "></div>
        <div className="col-12">
          {orders.map((order, index) => {
            const products = order.products;
            let PriceIs = 0;
            let countProducts = 0;
            return (
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
                      {countProducts !== 1 ? (
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
