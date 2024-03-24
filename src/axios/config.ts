import axios from "axios"

export const blogFetch =  axios.create(
  {
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
      "Content-Type": "application/json"
    }
  }
)
