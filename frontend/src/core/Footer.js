import React from "react";
import styled from "styled-components";

function Footer() {
  const Footer = styled.div`
    background: #c31432;
    background: -webkit-linear-gradient(to bottom, #240b36, #c31432);
    background: linear-gradient(to bottom, #240b36, #c31432);

    button {
      background: #0f2027; /* fallback for old browsers */
      background: -webkit-linear-gradient(
        to bottom,
        #2c5364,
        #203a43,
        #0f2027
      ); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(
        to bottom,
        #2c5364,
        #203a43,
        #0f2027
      ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

      color: #fff;
    }
  `;

  return (
    <div>
      <Footer className="container-fluid  text-black text-center py-3">
        <h4 className="text-white">
          Made By &nbsp;<i class="fas fa-heart"></i>
        </h4>

        <p className="text-white ">
          &#169;All Rights Reserved By Spiffy-Shirts
        </p>
        <p className=" text-white">
          {" "}
          <i class="fas fa-at"></i> Developer Contact{" "}
        </p>
        <a
          class="github-button"
          href="https://github.com/vipulkr059"
          data-size="large"
          aria-label="Follow @vipulkr059 on GitHub"
        >
          <button className="p-2 m-3 rounded-pill">
            <i class="fab fa-github"></i>&nbsp;Follow @vipulkr059
          </button>
        </a>
        <a
          class="github-button"
          href="https://github.com/ThisIsFaar"
          data-size="large"
          aria-label="Follow @ThisIsFaar on GitHub"
        >
          <button className="p-2 m-3 rounded-pill">
            <i class="fab fa-github"></i> &nbsp;Follow @ThisIsFaar
          </button>
        </a>
      </Footer>
    </div>
  );
}

export default Footer;
