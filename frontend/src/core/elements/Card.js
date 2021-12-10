import styled from "styled-components";

export const CardDesign = styled.div`
  height: 35rem;
  flex: 0 0 30%;
  border-radius: 4rem;
  padding: 1rem;
  @media only screen and (max-width: 768px) {
    flex: 0 0 45%;
  }
  @media only screen and (max-width: 425px) {
    flex: 0 0 100%;
  }
  .card-btns {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .Card_Title {
    color: #66fcf1;
    text-transform: capitalize;
  }
  .Card_Desc {
    font-size: 12px;
    margin: 0;
    overflow: auto;
    color: #c5c6c7;
    font-family: "Varela Round";
    text-transform: capitalize;
  }
  .Card_Price {
    margin: 0;
    color: #66fcf1;
    font-weight: 600;
  }
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #434343,
    #000000
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #434343,
    #000000
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
