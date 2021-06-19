import React from "react";
import styled, { css } from "styled-components";
import bg from "../../images/bg.jpg";

export const Subbutton = styled.button`
  display: block;
  font-family: "Varela Round", sans-serif;
  border-radius: 50px;
  background-color: transparent;
  border: solid 2px #66fcf1;
  color: #ffffff;
  text-align: center;
  font-size: 25px;
  padding: 10px;
  width: 70%;
  margin-left: 15%;
  transition: all 0.5s;
  cursor: pointer;
  margin-top: 30px;
  margin-bottom: 20px;

  &:hover {
    background-color: #66fcf1;
    color: black;
  }
`;

export const Divone = styled.div`
  //background-color: transparent;
  background-image: url(${bg});
  background-size: cover;
  mix-blend-mode: lighten;
  color: #c5c6c7;
  font-size: 2.5em;
  span {
    color: #66fcf1;
  }
  p {
    font-size: 0.8em;
  }
  button {
    display: inline-block;
    border-radius: 50px;
    background-color: transparent;
    border: solid 2px #66fcf1;
    color: #ffffff;
    text-align: center;
    font-size: 15px;
    padding: 10px;
    width: 25%;
    transition: all 0.5s;
    cursor: pointer;
    margin-top: 10px;
    font-family: "Varela Round", sans-serif;
    &:hover {
      background-color: #66fcf1;
      color: black;
    }
  }
`;

export const Form = styled.form`
  Link {
    text-decoration: none;
    margin-top: 20px;
  }
  span {
    color: #66fcf1;
    text-decoration: underline;
  }
`;

export const Inputdiv = styled.div`
  label {
    font-family: "Varela Round", sans-serif;
  }
  i {
    color: #66fcf1;
  }
  input {
    background-color: transparent;
    border-bottom: solid 2px #66fcf1;
    border-top: transparent;
    border-left: transparent;
    border-right: transparent;

    color: white;
  }
  input:focus,
  input:active {
    background-color: transparent;
    color: white;
    font-family: "Varela Round", sans-serif;
  }
`;
