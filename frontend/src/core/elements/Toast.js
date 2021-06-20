import styled from "styled-components";

export const Toast = styled.div`
  .butt {
    display: inline-block;
    border-radius: 50px;
    background-color: transparent;
    border: solid 2px #66fcf1;
    color: #ffffff;
    text-align: center;
    font-size: 15px;
    padding: 10px;
    width: 112px;
    transition: all 0.5s;
    cursor: pointer;
    margin-top: 10px;
    font-family: "Varela Round", sans-serif;
    &:hover {
      background-color: #66fcf1;
      color: black;
    }
  }

  .toast-header {
    background-color: #66fcf1;
    font-family: "Varela Round", sans-serif;
    text-transform: capitalize;
    button {
      background-color: transparent;
      position: absolute;
      border: none;
      right: 25px;
    }
    #image {
      padding: 20px;
    }
  }

  .Sort_Button {
    outline: none;
    background-color: #45a29e;
    color: white;
  }
  #snackbar {
    visibility: hidden; /* Hidden by default. Visible on click */
    min-width: 250px; /* Set a default minimum width */
    max-width: 550px;
    min-height: 250px;
    max-height: 250px;
    margin-left: -125px; /* Divide value of min-width by 2 */
    background-color: #1f2833; /* Black background color */
    color: #fff; /* White text color */
    text-align: left; /* Centered text */
    border-radius: 2px; /* Rounded borders */
    padding: 16px; /* Padding */
    position: fixed; /* Sit on top of the screen */
    z-index: 1; /* Add a z-index if needed */
    left: 75%; /* Center the snackbar */
    top: 30px; /* 30px from the bottom */
    text-transform: capitalize;
    font-family: "Varela Round", sans-serif;
    font-size: x-large;
  }

  /* Show the snackbar when clicking on a button (class added with JavaScript) */
  #snackbar.show {
    visibility: visible; /* Show the snackbar */
    /* Add animation: Take 0.5 seconds to fade in and out the snackbar.
  However, delay the fade out process for 2.5 seconds */
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
  }

  /* Animations to fade the snackbar in and out */
  @-webkit-keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }

  @keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }

  @keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }
`;
