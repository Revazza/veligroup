import axios from "axios";
import Cookies from "js-cookie";

// const BASE_URL = "https://localhost:7239";
// const BASE_URL = "https://veligroupapi20231125165417.azurewebsites.net";
const BASE_URL = "https://localhost:7239";
export const REPO_NAME = "/veligroup";
const token = Cookies.get("token");
//https://veligroupapiapi.azure-api.net
export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});