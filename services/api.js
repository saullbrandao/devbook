import axios from "axios";

export const searchApi = axios.create({
  baseURL: 'https://api.github.com/search/',
  headers: {
    'Accept': 'application/vnd.github.v3+json'
  }
})