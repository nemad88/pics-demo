import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 0a2eb4e521b636088b1f44ab7291fac3ab76f6d72dbecf67abd2bd9c35bc6161"
  }
});
