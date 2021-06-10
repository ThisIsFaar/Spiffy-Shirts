import { API } from "../../backend";

export const getProducts = () => {
  return fetch(`${API}/products`, { method: "GET" })
    .then((response) => {
      console.log("DATA WE GET IS: ", response);
      return response.json();
    })
    .catch((err) => console.log(err));
};
