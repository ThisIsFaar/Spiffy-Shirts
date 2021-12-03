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
font-family: 'Fira Sans Condensed', sans-serif;
  position: relative;
  margin: 5px;
  overflow: hidden;
  width: 100%;
  height: 250px;
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
  width: 250px;
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
  display: block;
  font-family: "Varela Round", sans-serif;
  border-radius: 50px;
  background-color: transparent;
  border: solid 2px #66fcf1;
  color: #ffffff;
  text-align: center;
  font-size: 20px;
  padding: 10px;
  width: 25%;
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
  max-width: 100%;
  max-height: 100%;
  margin: 17px;
  border-radius: 10px;
`;
