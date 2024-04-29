import defaultAxios from 'axios';

const axios = defaultAxios.create({
  baseURL: import.meta.env.VITE_MAIN_SERVER_URL,
});

axios.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.setAuthorization(`Token ${token}`);
  }

  return config;
});

export default axios;
