import axios from "axios";
import { BASEPATH } from "./dasboardEndpoints";

const isDevelopment = process.env.NODE_ENV === 'development';

// fetch access token from localstorage


const accessToken = localStorage.getItem("accessToken");
console.log('base req :  ' , accessToken);

export const reqInstance = axios.create({
  // In development, use relative URLs that will be handled by the Vite proxy
  baseURL: isDevelopment ? `${BASEPATH}` : 'https://dev.mulearn.org/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`
  },
  // Don't set withCredentials in development when using proxy
});

