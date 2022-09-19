import axios from "axios";
export default axios.create({
  baseURL: "https://recruitmentdb-508d.restdb.io/rest",
  headers: {
    "Content-Type": "application/json",
    "x-apikey": "5d9f48133cbe87164d4bb12c",
  },
});
