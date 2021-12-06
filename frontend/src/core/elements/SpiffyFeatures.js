import styled from "styled-components";

export const SpiffyFeatureDesign = styled.div`
  justify-content: center;
  display: grid;
  grid-template: repeat(3, 20rem) / repeat(3, 20rem);
  grid-template-areas: "first first second" "third fifth fifth" "fourth fifth fifth";
  justify-items: stretch;
  align-items: stretch;
  gap: 1rem;
  @media only screen and (max-width: 950px) {
    grid-template: repeat(3, 11rem) / repeat(3, 11rem);
    grid-template-areas: "first first second" "third fifth fifth" "fourth fifth fifth";
  }
  @media only screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    .firstFDiv p{
        font-size: 8vw!important;
      }
    .secondFDiv p{
        font-size: 8vw!important;
      }
    .thirdFDiv p{
        font-size: 8vw!important;
      }
    .fourthFDiv p{
        font-size: 8vw!important;
      }
    .fifthFDiv p{
        font-size: 8vw!important;
      }
    }
  }

  .firstFDiv {
    p {
      font-size: 4vw;
      margin-top: 15%;
    }
    img {
      float: left;
      width: 40%;
    }
    grid-area: first;
    background: #1f1c2c; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #928dab,
      #1f1c2c
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #928dab,
      #1f1c2c
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .secondFDiv {
    img {
      margin: 10% 10%;
      width: 80%;
    }
    p {
      font-size: 4vw;
    }
    grid-area: second;
    background: #4b6cb7; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #182848,
      #4b6cb7
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #182848,
      #4b6cb7
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .thirdFDiv {
    img {
      margin: 10% 10%;
      width: 80%;
    }
    p {
      font-size: 2vw;
      margin: 0%;
    }
    grid-area: third;
    background: #8e0e00; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #1f1c18,
      #8e0e00
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #1f1c18,
      #8e0e00
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .fourthFDiv {
    img {
      margin: 10% 10%;
      width: 80%;
    }
    p {
      font-size: 2vw;
    }
    grid-area: fourth;
    background: #7b4397; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #dc2430,
      #7b4397
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #dc2430,
      #7b4397
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .fifthFDiv {
    grid-area: fifth;
    p {
      font-size: 4vw;
    }
    img {
      margin: 10% 10%;
      width: 80%;
    }
    background: #ff416c; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to top,
      #ff4b2b,
      #ff416c
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to top,
      #ff4b2b,
      #ff416c
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
`;
