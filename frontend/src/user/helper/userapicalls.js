import { API } from "../../backend";

export const emailVerification = (email) => {
  console.log(email);
  return fetch(`${API}/recover`, {
    //mode: "no-cors",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  })
    .then((response) => {
      return response.json();
    })
    .catch();
};
export const PasswordReset = (password, token) => {
  console.log(password);
  return fetch(`${API}/reset/${token}`, {
    //mode: "no-cors",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(password),
  })
    .then((response) => {
      return response.json();
    })
    .catch();
};
