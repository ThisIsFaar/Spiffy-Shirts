import styled from "styled-components";

export const SpiffyBtn = styled.div`
  margin: 0.4rem;
  display: block;
  border-radius: 50px;
  background-color: transparent;
  border: solid 2px #66fcf1;
  color: #ffffff;
  text-align: center;
  font-size: 1rem;
  padding: 10px;
  width: 50%;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  cursor: pointer;
  font-family: "Varela Round", sans-serif;
  &:hover {
    background-color: #66fcf1;
    color: black;
  }
`;
