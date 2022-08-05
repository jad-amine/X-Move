import axios from "axios";

export default axios.create({
  baseURL: `http://192.168.43.248:4000/api/owners/`,
});
