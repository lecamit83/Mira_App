import { LOGIN_API, ADD_PRODUCT_API, SIGN_UP_API, API_NBL_ID } from "./linkAPI";
/**
 * Login API
 */
export function postUser(data) {
  var URL = LOGIN_API;
  return fetch(URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}
export function signUpUser(data) {
  var URL = SIGN_UP_API;
  return fetch(URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}
export function addProduct(data) {
  var URL = ADD_PRODUCT_API;
  return fetch(URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export function updateInformationUser(data, uID) {
  var URL = API_NBL_ID + uID;
  return fetch(URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}
