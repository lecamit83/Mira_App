import { DELETE_PRODUCT_API } from "./linkAPI";
export function deleteProduct(data) {
  var URL = DELETE_PRODUCT_API;
  return fetch(URL, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}
