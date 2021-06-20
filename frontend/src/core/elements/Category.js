import styled from "styled-components";

export const Categorydiv = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-align: center;

  img {
    width: 50%;
    height: 100%;
    object-fit: cover;

    -webkit-box-reflect: below 2px
      linear-gradient(transparent, transparent, #0004);

    transform-origin: center;
    transform: perspective(800px) rotateY(25deg);
    transition: 0.5s;
  }

  img {
    width: 50%;
    height: 100%;
    object-fit: cover;

    -webkit-box-reflect: below 2px
      linear-gradient(transparent, transparent, #0004);

    transform-origin: center;
    transform: perspective(800px) rotateY(25deg);
    transition: 0.5s;
  }

  .container {
    max-width: 600px;
    max-height: 350px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    span {
      display: none;
      position: relative;
      z-index: 1;
      color: white;
      top: 0px;
    }
  }
  .container:hover img {
    opacity: 0.3;
  }
  .container img:hover {
    transform: perspective(800px) rotateY(0deg);
    opacity: 1;
  }
`;
