import axios from "axios"
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_USERL,
}); 
export default axiosInstance