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
            <img src={temp} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={temp} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={temp} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
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
          d="M 0,400 C 0,400 0,200 0,200 C 94.85167464114832,182.94736842105263 189.70334928229664,165.89473684210526 284,192 C 378.29665071770336,218.10526315789474 472.0382775119617,287.36842105263156 555,274 C 637.9617224880383,260.63157894736844 710.1435406698565,164.63157894736838 823,144 C 935.8564593301435,123.3684210526316 1089.3875598086124,178.10526315789477 1199,200 C 1308.6124401913876,221.89473684210523 1374.3062200956938,210.9473684210526 1440,200 C 1440,200 1440,400 1440,400 Z"
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
        <div>
          <SpiffyWaveTop />
          <p class="text-center text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum vel
            obcaecati asperiores, quidem nisi sapiente unde voluptatum fugiat?
            Doloremque tempore sequi numquam minima distinctio quo sint quasi
            eaque nostrum earum.
          </p>
          <SpiffyWaveBottom />
        </div>
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
