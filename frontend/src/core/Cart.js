import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { loadCart, removeItemFromCart } from "./helper/CartHelper";
import StripeCheckout from "./StripeCheckout";
import cartToast from "./CartToast";
import { Cartdiv } from "./elements/CartStyle";
import ToastImg from "./helper/ToastImg";

const Cart = () => {
  const [Product, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadCart);
  }, [reload]);

  const loadAllProducts = (Product) => {
    // return (
    //   <div>
    //     <h2 className="text-white">this section is to load products</h2>

    //     {Product.map((product, index) => (
    //       <Card
    //         key={index}
    //         product={product}
    //         addtoCart={false}
    //         removeFromCart={true}
    //         setReload={setReload}
    //         reload={reload}
    //       />
    //     ))}
    //   </div>
    // );
    return (
      <Cartdiv>
        <div className="row">
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col-3">
                  <h4>
                    <b>Shopping Cart</b>
                  </h4>
                </div>
                <div className="col-7 text-right " />
                {Product.length}&nbsp; items
              </div>
            </div>

            {Product.map((product, index) => (
              <div key={index} className="row border-top border-bottom">
                <div className="row main align-items-center">
                  <div className="col-3">
                    <ToastImg product={product} />
                  </div>
                  <div className="col">
                    <div id="name" className="row ">
                      {product.name}
                    </div>
                    <div className="row">{product.description}</div>
                  </div>
                  <div className="col">
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
                  </div>
                  <div className="col">
                    ₹ {product.price} &nbsp;{" "}
                    <button
                      id="close"
                      onClick={() => {
                        removeItemFromCart(product._id);
                        setReload(!reload);
                      }}
                    >
                      &#10005;
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-4 summary">
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
        </div>
      </Cartdiv>
    );
  };
  return (
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
    </Base>
  );
};

export default Cart;
