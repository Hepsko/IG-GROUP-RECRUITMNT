import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "";

export default axios.create({
  baseURL: "https://recruitmentdb-508d.restdb.io/rest",
  headers: {
    "Content-Type": "application/json",
    "x-apikey": API_KEY,
  },
});
