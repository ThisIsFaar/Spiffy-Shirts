import styled from "styled-components";

export const Statusdiv = styled.div`
  @media only screen and (max-width: 600px) {
    .status-label {
      display: none;
    }
  }
  display: none;
  z-index: 2;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  #bl {
    background-color: #66fcf1;
  }
  button {
    background-color: transparent;
    color: #1f2833;
    border: none;
    font-size: x-large;
  }
  .card {
    z-index: 2;
    color: #fff;
    background-color: #1f2833;
    padding-bottom: 20px;
    margin-top: 50%;
    margin-bottom: 50px;
    border-radius: 10px;
  }

  .top {
    padding-top: 40px;
    padding-left: 13% !important;
    padding-right: 13% !important;
  }

  #progressbar {
    margin-bottom: 30px;
    overflow: hidden;
    color: #66fcf1;
    padding-left: 0px;
    margin-top: 30px;
  }
  #status {
    margin-bottom: 30px;
    overflow: hidden;
    color: #455a64;
    padding-left: 0px;
    margin-top: 30px;
  }
  #status li {
    list-style-type: none;
    font-size: 20px;
    color: #66fcf1;
    width: 20%;
    float: left;
    position: relative;
    font-weight: 400;
    &:hover {
      color: #fff;
    }
  }

  #progressbar li {
    list-style-type: none;
    font-size: 13px;
    width: 20%;
    float: left;
    position: relative;
    font-weight: 400;
  }

  #progressbar .step0:before {
    font-family: FontAwesome;
    content: "\f10c";
    color: #fff;
  }

  #progressbar li:before {
    width: 40px;
    height: 40px;
    line-height: 45px;
    display: block;
    font-size: 20px;
    background: #c5cae9;
    border-radius: 50%;
    margin: auto;
    padding: 0px;
  }

  #progressbar li:after {
    content: "";
    width: 100%;
    height: 12px;
    background: #c5cae9;
    position: absolute;
    left: 0;
    top: 16px;
    z-index: -1;
  }

  #progressbar li:last-child:after {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    position: absolute;
    left: -50%;
  }

  #progressbar li:nth-child(2):after,
  #progressbar li:nth-child(3):after,
  #progressbar li:nth-child(4):after {
    left: -50%;
  }

  #progressbar li:first-child:after {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    position: absolute;
    left: 50%;
  }

  #progressbar li:last-child:after {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  #progressbar li:first-child:after {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  #progressbar li.active:before,
  #progressbar li.active:after {
    background: #66fcf1;
  }

  #progressbar li.active:before {
    font-family: FontAwesome;
    content: "\f00c";
  }

  .icon {
    width: 50px;
    height: 50px;
    margin-right: 5px;
  }

  .icon-content {
    padding-bottom: 10px;
  }
`;
