import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";
import CartToast from "./CartToast";
import styled from "styled-components";
import temp from "../images/temp.png";
import aboutill from "../images/aboutill.svg";
import Menu from "./Menu";
import { Categorydiv } from "./elements/Category";
import summer2 from "../images/SummerNew.jpg";
import winter2 from "../images/WinterNew.jpg";
import beach2 from "../images/BeachNew.jpg";
import party2 from "../images/Party.jpg";
import carousel1 from "../images/carousel1.jpg";
import carousel2 from "../images/carousel2.jpg";
import carousel3 from "../images/carousel3.jpg";
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
  const SpiffyCarousel = () => {
    return (
      <div
        id="carouselExampleCaptions"
        className="carousel slide p-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carousel1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={carousel2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={carousel3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  };

  const SpiffyWaveTop = () => {
    return (
      <svg
        height="100%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="5%" stop-color="#7bdcb5ff"></stop>
            <stop offset="95%" stop-color="#9900efff"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 118.08612440191388,178.8133971291866 236.17224880382776,157.6267942583732 327,147 C 417.82775119617224,136.3732057416268 481.3971291866029,136.30622009569376 559,145 C 636.6028708133971,153.69377990430624 728.2392344497607,171.14832535885165 828,193 C 927.7607655502393,214.85167464114835 1035.6459330143541,241.1004784688995 1139,243 C 1242.3540669856459,244.8995215311005 1341.1770334928228,222.44976076555025 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          class="transition-all duration-300 ease-in-out delay-150"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
    );
  };
  const SpiffyWaveBottom = () => {
    return (
      <svg
        height="100%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="5%" stop-color="#7bdcb5ff"></stop>
            <stop offset="95%" stop-color="#9900efff"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 79.78947368421055,220.1244019138756 159.5789473684211,240.2488038277512 265,255 C 370.4210526315789,269.7511961722488 501.47368421052624,279.12918660287085 619,254 C 736.5263157894738,228.87081339712918 840.5263157894738,169.23444976076556 913,163 C 985.4736842105262,156.76555023923444 1026.421052631579,203.933014354067 1109,219 C 1191.578947368421,234.066985645933 1315.7894736842104,217.03349282296648 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          class="transition-all duration-300 ease-in-out delay-150"
        ></path>
      </svg>
    );
  };
  const SpiffyAbout = () => {
    return (
      <div>
        <div classnName="container">
          <SpiffyWaveTop />
          <div className="row">
            <div class="col-6 p-5">
              <h1 className="display-1 text-center text-white">
                Spiffy-Shirts
              </h1>
              <p className="text-center text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis facilis officiis adipisci dolorem sunt amet labore
                deserunt repellat. Ex nihil voluptatem eum inventore deserunt
                laborum, iure repellat voluptas accusantium amet.
              </p>
            </div>
            <div class="col-6">
              <img className="w-75 pt-5 mt-5" src={aboutill} alt="" />
            </div>
          </div>
          <SpiffyWaveBottom />
        </div>
      </div>
    );
  };
  const SpiffyCategory = () => {
    return (
      <div>
        <Categorydiv>
          <SpiffyWaveTop />
          <h1 className="display-1 text-white text-center py-5 m-0">
            Categories
          </h1>
          <div className="container">
            <img src={summer2} alt="" />
            <span>SUMMER</span>
            <img src={winter2} alt="" />
            <span>WINTER</span>
            <img src={beach2} alt="" />
            <span>BEACH</span>
            <img src={party2} alt="" />
            <span>PARTY</span>
          </div>
          <SpiffyWaveBottom />
        </Categorydiv>
      </div>
    );
  };
  const SpiffyFeature = () => {
    return <div>SpiffyFeature</div>;
  };
  const SpiffyFooter = () => {
    return <div>SpiffyFooter</div>;
  };
  return (
    <div>
      <Menu />
      <SpiffyCarousel />
      <SpiffyAbout />
      <SpiffyCategory />
      <SpiffyFeature />
      <SpiffyFooter />
    </div>
  );
}
