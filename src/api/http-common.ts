import axios from "axios";
export default axios.create({
  baseURL: "XXXX",
  headers: {
    "Content-Type": "application/json",
    "x-apikey": "XXXX",
  },
});
