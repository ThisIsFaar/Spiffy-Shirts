import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";
import CartToast from "./CartToast";
import styled from "styled-components";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [sortType, setsortType] = useState("");

  const loadAllproduct = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllproduct();
  }, []);
  //sort Functionality
  useEffect(() => {
    sortArray(sortType);
  }, [sortType]);

  const compare = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };
  const sortArray = (type) => {
    console.log(type);
    const types = {
      name: "name",
      price: "price",
      stock: "stock",
      sold: "sold",
    };

    const sortProperty = types[type];
    const sorted =
      type === "name"
        ? [...products].sort(compare)
        : [...products].sort((a, b) => a[sortProperty] - b[sortProperty]);
    console.log(sorted);
    setProducts(sorted);
  };

  return (
    <Base title="Home Page" description="welcome to the t-shirt store">
      <div className="row text-center">
        <h1 className="text-white">All of t-shirts</h1>
        <div className="row">
          <label>Sort-By</label>
          <select
            onChange={(e) => setsortType(e.target.value)}
            placeholder="Sort-By"
          >
            <option value="name">By Name</option>
            <option value="stock">By Stock</option>
            <option value="price">By Price</option>
            <option value="sold">Most Sold</option>
          </select>
          {products.map((product, index) => {
            return (
              <div key={index} className="col-6 mb-4">
                <Card product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
}
