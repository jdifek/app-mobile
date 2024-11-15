import axios from "axios";
import { getAccessToken, removeFromStorage } from "../services/auth/auth.helper";
import Cookies from "js-cookie";
import { Token } from "../types/enums";
import { getContentType } from "./axios.helper";

export const API_URL = process.env.API_URL;

const axiosWithAuth = axios.create({
  baseURL: API_URL,
  headers: getContentType(),
});

axiosWithAuth.interceptors.request.use((config) => {
  const accessToken = getAccessToken();
  if (config.headers && accessToken && !config.url?.includes('api/auth')) config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

axiosWithAuth.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;
    const refreshToken = Cookies.get(Token.refreshToken);

    if ((error.response.status === 401 || error.response.status === 403) && error.config && !error.config._isRetry && refreshToken) {
      originalRequest._isRetry = true;
      try {
        // await authService.getNewTokens();
        return axiosWithAuth.request(originalRequest);
      } catch (error) {
        removeFromStorage();
      }
    }
  }
);

export default axiosWithAuth;
