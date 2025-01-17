import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:5000/" });

export const signup = (data) => API.post("/users/signup", data)
export const getUsers = (searchTerm) => API.get(`/users/search/?searchTerm=${searchTerm}`);