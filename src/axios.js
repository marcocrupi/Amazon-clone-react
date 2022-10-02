// Axios documentation: https://axios-http.com/docs/intro
import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "http://localhost:5001/clone-514e2/us-central1/api",
});

export default instance;
