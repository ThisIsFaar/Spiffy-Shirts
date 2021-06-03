import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/CartHelper";
import StripeCheckout from "./StripeCheckout";

const Cart = () => {
  const [Product, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadCart);
  }, [reload]);

  const loadAllProducts = (Product) => {
    return (
      <div>
        <h2 className="text-white">this section is to load products</h2>
        {Product.map((product, index) => (
          <Card
            key={index}
            product={product}
            addtoCart={false}
            removeFromCart={true}
            setReload={setReload}
            reload={reload}
          />
        ))}
      </div>
    );
  };
  const loadCheckout = () => {
    return (
      <div>
        <h2 className="text-shite">this section for checkout</h2>
      </div>
    );
  };
  return (
    <Base title="Cart Page" description="Ready to Checkout">
      <div className="row text-center">
        <div className="col-6 ">{Product!== undefined &&  Product.length > 0 ? loadAllProducts(Product) : ( <h3>No products in cart</h3> ) }</div>
        <div className="col-6 ">
          <StripeCheckout
            products={Product}
            setReload={setReload}
            reload={reload}
          />
        </div>
      </div>
    </Base>
  );
};

export default Cart;
