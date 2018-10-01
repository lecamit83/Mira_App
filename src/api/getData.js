import { PRODUCT_API } from "./linkAPI";

var urls = [
  "http://api.hifapp.com/api/thuoc?page=",
  "http://api.hifapp.com/api/tpcn?page=",
  "http://api.hifapp.com/api/vttb?page=",
  "http://api.hifapp.com/api/mypham?page="
];
/**
 * GET product home
 *
 */
export function fetchPosts(id, page) {
  var URL = urls[id] + page;
  return fetch(URL, {
    method: "GET",
  }).then(res => res.json());
}
//fetchCompany function
export function fetchComp(url) {
  var URL = url;
  return fetch(URL, { method: "GET" }).then(res => res.json());
}
export function fetchProduct(url) {
  var URL = url;
  return fetch(URL, {
    method: "GET",
  }).then(res => res.json());
}
export function fetchInfor(uID) {
  var URL = "http://api.hifapp.com/api/nbl?id=" + uID;
  return fetch(URL, { method: "GET" }).then(res => res.json());
}