import React, { useEffect, useState } from "react";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";
import { SpiffyBtn } from "./elements/SpiffyBtn";
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
const Products = () => {
  const [productsList, setProducts] = useState([]);

  const [sortType, setsortType] = useState("");

  const loadAllproduct = async () => {
    await getProducts().then((data) => {
      if (data) {
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
        ? [...productsList].sort(compare)
        : [...productsList].sort((a, b) => a[sortProperty] - b[sortProperty]);
    console.log(sorted);
    setProducts(sorted);
  };
  const [ismodelOpen, setIsmodelOpen] = useState(false);
  const [selectedGlb, setSelectedGlb] = useState(null);
  return (
    <>
      <Ml>
        <Base title="All Products" description="Find all our own creation">
          {ismodelOpen && (
            <div
              style={{
                position: "fixed",
                background: "white",
                inset: "0",
                height: "100vh",
                width: "100vw",
                padding: "0",
                margin: "0",
                maxWidth: "none",
                color: "black",
                "background":"linear-gradient(to top, #333399, #360033)"
              }}
            >
                <model-viewer
                  src={selectedGlb}
                  ar
                  shadow-intensity="1"
                  camera-controls
                  touch-action="pan-y"
                  style={{
                    width: "100%",
                    height: "100%"
                  }}
                ></model-viewer>
              <div
                style={{
                  position: "absolute",
                  bottom: "10%",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
              
               <SpiffyBtn onClick={() => setIsmodelOpen(false)} >Back to 2D</SpiffyBtn>
                
              </div>
            </div>
          )}
          <ToastContainer />
          <select
            class="Sort_Button p-2 rounded m-3"
            onChange={(e) => setsortType(e.target.value)}
          >
            <option selected>Sort-By</option>
            <option value="stock">Stock</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="sold">Sold</option>
          </select>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "2rem",
            }}
          >
            {productsList.map((product, index) => {
              return (
                // <div key={index} className="col-6">
                <Card product={product} setSelectedGlb={setSelectedGlb} setIsmodelOpen={setIsmodelOpen} />
                // </div>
              );
            })}
          </div>
        </Base>
      </Ml>
    </>
  );
};

export default Products;
