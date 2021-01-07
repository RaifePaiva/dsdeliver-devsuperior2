import axios from "axios";

const apiUrl = "http://localhost:8080";

export function fetchProducts(){
    return axios(`${apiUrl}/products`)
}