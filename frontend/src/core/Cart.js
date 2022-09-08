import React, { useState, useEffect } from "react";
import "../styles.css";
import Base from "./Base";
import { loadCart, removeItemFromCart } from "./helper/CartHelper";
import StripeCheckout from "./StripeCheckout";
import { Cartdiv } from "./elements/CartStyle";
import ToastImg from "./helper/ToastImg";
import { wrap } from "lodash";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

const Ml = styled.div`
  @media only screen and (max-width: 425px) {
    #prd-ml {
      padding: 1rem !important;
    }
  }
`;
const Cart = () => {
  const [Product, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadCart);
  }, [reload]);

  const loadAllProducts = (Product) => {
    return (
      <Cartdiv
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        <div className="cart">
          <div className="title">
            <div className="">
              <div className="">
                <b>Shopping Cart</b>
              </div>
              <div className=" ">{Product.length}&nbsp; items</div>
            </div>
          </div>

          {Product.map((product, index) => (
            <div key={index} className="row border-top">
              <div className="main cart-products ">
                <div className=" cart-products-cmn cart-products-img">
                  <ToastImg product={product} />
                </div>
                <div className=" cart-products-cmn product-about">
                  <div id="name" className="row ">
                    {product.name}
                  </div>
                  <div className="row">{product.description}</div>
                </div>
                {/* <div className="col">
                    {" "}
                    <a href="#" classNameName="">
                      -
                    </a>
                    <a href="#" className="border ">
                      1
                    </a>
                    <a href="#" classNameName="">
                      +
                    </a>{" "}
                  </div> */}
                <div className=" cart-products-cmn cart-products-close">
                  ₹ {product.price} &nbsp;{" "}
                  <button
                    id="close"
                    onClick={() => {
                      removeItemFromCart(product._id);
                      setReload(!reload);
                    }}
                  >
                    <i class="fas fa-times-circle fa-lg"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="summary">
          <div>
            <h3>Summary</h3>
          </div>
          <hr />
          <div className="row">
            <div className="col ">Items {Product.length}</div>
          </div>
          <form>
            <p>SHIPPING</p>{" "}
            <select>
              <option className="text-muted">Free Delivery</option>
              <option className="text-muted">Fast-Delivery-₹50.00</option>
            </select>
            <p>GIVE CODE</p> <input id="code" placeholder="Enter your code" />
          </form>
          <div
            className="row"
            //style="border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;"
          >
            <StripeCheckout
              products={Product}
              setReload={setReload}
              reload={reload}
            />
          </div>{" "}
        </div>
      </Cartdiv>
    );
  };
  return (
    <Ml>
      <Base title="Your Cart" description="Ready to Checkout">
        <div className="row text-center">
          <div className="col-12 ">
            {Product !== undefined && Product.length > 0 ? (
              loadAllProducts(Product)
            ) : (
              <h3>No products in cart</h3>
            )}
          </div>
        </div>
        <ToastContainer />
      </Base>
    </Ml>
  );
};

export default Cart;
