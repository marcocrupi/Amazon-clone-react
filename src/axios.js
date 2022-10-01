// Axios documentation: https://axios-http.com/docs/intro
import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "...",
});

export default instance;
