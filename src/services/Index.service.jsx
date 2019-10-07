import Axios from "axios";

export const restConnector = Axios.create({
  baseURL: "http://elearning0706.cybersoft.edu.vn/api/"
});
