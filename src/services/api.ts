import axios from "axios"

export const searchApi = axios.create({
  baseURL: 'https://api.github.com/search/',
  headers: {
    'Accept': 'application/vnd.github.v3+json'
  }
})

export const usersApi = axios.create({
  baseURL: 'https://api.github.com/users/',
  headers: {
    'Accept': 'application/vnd.github.v3+json'
  }
})

export const statsApi = axios.create({
  baseURL: 'https://github-readme-stats.vercel.app/api',
})