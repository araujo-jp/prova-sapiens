import axios from 'axios'

let apiUrl;

if (process.env.NODE_ENV === 'development') {
  apiUrl = 'http://0.0.0.0:3333'
} else {
  apiUrl = 'https://prova-sapiens.herokuapp.com'
}

export const api = axios.create({
  baseURL: apiUrl
})