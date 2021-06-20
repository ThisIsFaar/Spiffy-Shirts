import styled from "styled-components";

export const CardDesign = styled.div`
  .Card_Height {
    height: 275px;
  }
  .Card_Title {
    color: #66fcf1;
    text-transform: capitalize;
  }
  .Card_Desc {
    overflow: auto;
    color: #c5c6c7;
    font-family: "Varela Round";
    text-transform: capitalize;
  }
  .Card_Price {
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
