import React, { useState, useEffect } from "react";
import "../styles.css";
import { getProducts } from "./helper/coreapicalls";
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

//feature img
import costImg from "../images/features/cost.svg";
import fastestDelImg from "../images/features/fastest_delivery.svg";
import influenceImg from "../images/features/influence.svg";
import secureImg from "../images/features/secure.svg";
import trendyImg from "../images/features/trendy.svg";

import { SpiffyFeatureDesign } from "./elements/SpiffyFeatures";
import { AboutSpiffy } from "./elements/AboutStyle";
import Footer from "./Footer";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [setError] = useState(false);
  const [sortType] = useState("");

  const loadAllproduct = () => {
    getProducts().then((data) => {
      if (data) {
        setProducts(data);
      } else {
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
          d="M 0,400 C 0,400 0,200 0,200 C 121.33333333333331,180.39999999999998 242.66666666666663,160.79999999999998 417,168 C 591.3333333333334,175.20000000000002 818.6666666666667,209.20000000000002 998,219 C 1177.3333333333333,228.79999999999998 1308.6666666666665,214.39999999999998 1440,200 C 1440,200 1440,400 1440,400 Z"
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
          <AboutSpiffy>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <div className="lp-intro">
                <h1 className="display-2 text-center text-white">
                  Why Spiffy-Shirts?
                </h1>
                <p
                  className="text-justify m-1
               p-4 text-white"
                >
                  Spiffy Shirts has made a mark as the largest menswear brand .
                  Known for its standardized fits, superior quality, wide range
                  and fashionable styles, the trusted mid-segment brand comes
                  with apparel offerings for young men entering the corporate
                  world. The brand boosts confidence with their clothing that
                  marks the “Beginning of Good Things”. The trendy and
                  contemporary work wear formals are perfect for young
                  professionals who want to express their sartorial tastes.
                </p>
              </div>
              <div className="lp-intro">
                <img className="w-75 mx-5" src={aboutill} alt="" />
              </div>
            </div>
          </AboutSpiffy>

          <SpiffyWaveBottom />
        </div>
      </div>
    );
  };
  const SpiffyCategory = () => {
    return (
      <div>
        <Categorydiv>
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
    return (
      <div>
        <div className="container">
          <h1 class="display-1 text-center text-white py-5">Features</h1>
          <SpiffyFeatureDesign>
            <div className="firstFDiv">
              <img className="mx-5 my-4" src={costImg} alt="" width={250} />
              <p className="text-white text-center display-5">
                Cost Effective!
              </p>
            </div>
            <div className="secondFDiv">
              <img src={secureImg} alt="" width={250} />
              <p className="text-white display-5 text-center">Secured!</p>
            </div>
            <div className="thirdFDiv">
              <p className="text-white h2 text-center">Loved By Influencers!</p>
              <img src={influenceImg} alt="" width={250} />
            </div>
            <div className="fourthFDiv">
              <p className="text-white h2 text-center">Trendy Collections!</p>
              <img className="mx-3" src={trendyImg} alt="" width={250} />{" "}
            </div>
            <div className="fifthFDiv">
              <p className="text-white display-5 text-center">
                Fastest Delivery!
              </p>
              <img src={fastestDelImg} alt="" width={400} />
            </div>
          </SpiffyFeatureDesign>
        </div>
        <SpiffyWaveBottom />
      </div>
    );
  };

  return (
    <div>
      <Menu />
      <SpiffyCarousel />
      <SpiffyAbout />
      <SpiffyCategory />
      <SpiffyFeature />
      <Footer />
    </div>
  );
}
