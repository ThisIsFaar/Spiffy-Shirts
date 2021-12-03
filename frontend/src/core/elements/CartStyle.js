import styled from "styled-components";

export const Cartdiv = styled.div`
  .card {
    margin: auto;
    max-width: 950px;
    width: 90%;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 1rem;
    border: transparent;
    font-family: "Varela Round", sans-serif;
  }
  #name {
    color: #66fcf1;
  }
  #close {
    background-color: transparent;
    border: none;
    color: #fff;
  }

  @media (max-width: 767px) {
    .card {
      margin: 3vh auto;
    }
  }

  .cart {
    background: #360033; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to bottom,
      #0b8793,
      #360033
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to bottom,
      #0b8793,
      #360033
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    border-right: 1px solid #fff;
    padding: 4vh 5vh;
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 1rem;
    text-transform: capitalize;
  }

  @media (max-width: 767px) {
    .cart {
      padding: 4vh;
      border-bottom-left-radius: unset;
      border-top-right-radius: 1rem;
    }
  }

  .summary {
    font-family: "Varela Round", sans-serif;
    background: #360033; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to bottom,
      #0b8793,
      #360033
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to bottom,
      #0b8793,
      #360033
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    border-color: #000;
    padding: 4vh;
    color: #fff;
  }

  @media (max-width: 767px) {
    .summary {
      border-top-right-radius: unset;
      border-bottom-left-radius: 1rem;
    }
  }

  .summary .col-2 {
    padding: 0;
  }

  .summary .col-10 {
    padding: 0;
  }

  .row {
    margin: 0;
  }

  .title b {
    font-size: 1.5rem;
  }

  .main {
    margin: 0;
    padding: 2vh 0;
    width: 100%;
  }

  .col-2,
  .col {
    padding: 0 1vh;
  }

  a {
    padding: 0 1vh;
  }

  .close {
    margin-left: auto;
    font-size: 0.7rem;
  }

  .back-to-shop {
    margin-top: 4.5rem;
  }

  h3 {
    font-family: "Anton", sans-serif;
  }

  hr {
    margin-top: 1.25rem;
  }

  form {
    padding: 2vh 0;
  }

  select {
    border: 1px solid #1f2833;
    padding: 1.5vh 1vh;
    margin-bottom: 4vh;
    outline: none;
    width: 100%;
    background-color: rgb(247, 247, 247);
  }

  input {
    border: 1px solid #1f2833;
    padding: 1vh;
    margin-bottom: 4vh;
    outline: none;
    width: 100%;
    background-color: rgb(247, 247, 247);
  }

  input:focus::-webkit-input-placeholder {
    color: transparent;
  }

  a {
    color: white;
  }

  a:hover {
    color: #66fcf1;
    text-decoration: none;
  }

  #code {
    background-image: linear-gradient(
        to left,
        rgba(255, 255, 255, 0.253),
        rgba(255, 255, 255, 0.185)
      ),
      url("https://img.icons8.com/small/16/000000/long-arrow-right.png");
    background-repeat: no-repeat;
    background-position-x: 95%;
    background-position-y: center;
  }
`;
