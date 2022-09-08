import styled from "styled-components";

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
display: flex;
flex-wrap: wrap;
font-family: 'Fira Sans Condensed', sans-serif;
  position: relative;
  overflow: hidden;
  width: 90%;
  background:#1f2833 ;
  border-radius: 10px;

p {
  font-size: 0.6em;
  letter-spacing: 1px;
}

h1 {
font-family: 'Fira Sans Condensed', sans-serif;
  margin-top: -5px;
  span{
    text-transform: capitalize;
      color: #ffffff;
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
  width: 15rem;
  height: 15rem;
  margin: 1rem;
  border-radius: 10px;
}
.product{
  display: flex;
    flex-direction: column;
    gap: 10%;
    margin-top: 2rem;
}
.product span {
  color: white;
  font-size: 2rem;
}
.product p{
  color: #66fcf1;
  font-size: 2rem;
}
@media only screen and (max-width: 600px) {
  .product{
    span{
      font-size: 20px;
    }
    align-items: center;
  }
}
button {
  display: block;
  font-family: "Varela Round", sans-serif;
  border-radius: 50px;
  background-color: transparent;
  border: solid 2px #66fcf1;
  color: #ffffff;
  text-align: center;
  font-size: 20px;
  padding: 10px;
  width: 15rem;
  transition: all 0.5s;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #66fcf1;
    color: black;
  }
  span{
      color: #66fcf1;
  }
`;

export const Images = styled.img`
  @media only screen and (max-width: 600px) {
    width: 75% !important;
    height: 9% !important;
    margin: 10% !important;
  }
  max-width: 100%;
  max-height: 100%;
  margin: 17px;
  border-radius: 10px;
`;
