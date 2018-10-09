import axios from "axios";
import * as Config from "./../constants/Config";
require("babel-polyfill");
export default function callApi(enpoint, method = "GET", body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/${enpoint}`,
    data: body
  }).catch(err => {
    console.log(err);
  });
}
// export const fetchData = async () => {
//     try {
//       const response = await axios.get(`${Config.API_URL}/products`);
//       const data = await response.data;
//       return data;
//     } catch (e) {
//       console.log(e);
//     }
//   };
export const fetchData = async () => {
  try {
    const response = await axios.get(`${Config.API_URL}/products`);
    return await response.data;
  } catch (e) {
    console.log(e);
  }
};
