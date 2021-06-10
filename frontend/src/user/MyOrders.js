import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { getOrders } from "../admin/helper/adminapicall";
import StatusModal from "./Modal";
import $ from 'jquery';

const MyOrders = () => {
  const { user, token } = isAuthenticated();
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState("");
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
  }, []);

  const TrackOrder = (name) => (event) => {
    
    event.preventDefault()
    console.log("THE EVENT IS",event.target.value);

    $('#exampleModal').addClass('show')
    $('#OrderStatus').text(event.target.value)
    $('.modal').css('display', 'block')
    $('.modal').css('background-color', 'rgb(0 0 0 / 60%)')
  };
  return (
    <Base
      title="Profile"
      description="User Profile Page"
      className="container bg-info p-4"
    >
    <StatusModal/>
      <Link className="btn btn-danger" to={`/user/dashboard`}>
        <span className="">Main Menu</span>
      </Link>
      <div className="row">
        <h2 className="text-center text-white my-3">Total 3 products</h2>
        <div key="" className="row text-center mb-2 ">
          <div className="col-4">
            <h3 className="text-warning text-left">Product Names</h3>
          </div>
          <div className="col-8">
            <h3 className="text-warning text-left">Status</h3>
          </div>
        </div>
        <div className="col-12">
          {orders.map((order, index) => {
            const products = order.products;
            let PriceIs = 0;
            let countProducts = 0;
            return (
              <div key={index} className="row card text-center mb-2 flex-row">
                <div className="col-6">
                  {products.map((product) => {
                    PriceIs += product.price;
                    countProducts++;
                  })}
                  <div>
                    <h3 className="text-secondary text-left">
                      {products[0].name}
                      {countProducts != 1 ? (
                        <span> and {countProducts - 1} others</span>
                      ) : (
                        <span></span>
                      )}
                    </h3>
                    <h3 className="text-secondary text-left">
                      Total :₹ {PriceIs}
                    </h3>
                  </div>
                </div>

                <div className="col-6">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={TrackOrder(`${order.status}`)}
                    value={order.status}
                  >
                    Track
                  </button>
                  {/* <h3 className="text-success text-left">{order.status}</h3> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
};

export default MyOrders;
