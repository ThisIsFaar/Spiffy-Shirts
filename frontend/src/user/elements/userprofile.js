import React from "react";
import styled, { css } from "styled-components";

export const Menu = styled.div`
  display: none;
  background-color: #1f2833;

  li {
    color: #66fcf1;
    padding-left: 10px;
    background-color: transparent;
    text-decoration: none;
  }
  a:hover {
    color: white;
  }
  Link {
    text-decoration: none;
  }
  button {
    background-color: transparent;
    border: none;
    color: #66fcf1;
  }
  button:hover {
    color: white;
  }
`;

export const MenuButton = styled.button`
  color: #66fcf1;
  background-color: transparent;
  border: none;
  font-size: 25px;
  &:hover {
    background-color: transparent;
  }
`;
export const Container = styled.div`
font-family: 'Fira Sans Condensed', sans-serif;
  position: relative;
  margin: auto;
  overflow: hidden;
  width: 100%;
  height: 350px;
  background:#1f2833 ;
  box-shadow: 5px 5px 15px #66fcf1;
  border-radius: 10px;
}

p {
  font-size: 0.6em;
  letter-spacing: 1px;
}

h1 {
font-family: 'Fira Sans Condensed', sans-serif;
  margin-top: -5px;
  span{
    
      color: #66fcf1;
  }
}

h2 {
  margin-top: -5px;
  font-family: 'Fira Sans Condensed', sans-serif;
  span{
      color: #66fcf1;
  }
}

img {
  width: 290px;
  margin: 17px;
  border-radius: 10px;
}
.product {
  position: absolute;
  width: 60%;
  height: 100%;
  top: 10%;
  left: 40%;
}

.desc {
  font-family: 'Fira Sans Condensed', sans-serif;
  text-transform: none;
  letter-spacing: 0;
  margin-bottom: 17px;
  font-size: 1em;
  line-height: 1.6em;
  margin-right: 25px;
  text-align: justify;
}

button {
  background: transparent;
  padding: 10px;
  font-size:x-large;
  display: inline-block;
  outline: 0;
  border: 0;
  margin: -1px;
  border-radius: 2px;
  letter-spacing: 20px;
  color:white;
  cursor: pointer;
  &:hover {
    color: #66fcf1;
    transition: all .4s ease-in-out;
  }
  span{
      color: #66fcf1;
  }
`;

export const Menudiv = styled.div``;
