import axios from "axios"


const axiosHTTP = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})

export { axiosHTTP }