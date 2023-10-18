import axios from 'axios';
import Cookie from 'js-cookie';

const apiUrl = import.meta.env.VITE_API_URL_DEV;

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
});


export const publicInstance = axios.create({
  baseURL: apiUrl,
  withCredentials: false,
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
});

export const privateInstance = axios.create({
  baseURL: apiUrl,
  // withCredentials: true,
});

privateInstance.interceptors.request.use(
  (config) => {
    const accessToken = Cookie.get('access_token');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  async (error) => Promise.reject(error)
);

privateInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      window.location.href = '/login';
      Cookie.remove('access_token');
    }
    return Promise.reject(error);
  }
);
export default instance;
